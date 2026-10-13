/**
 * Серверная часть авторизации. Работает внутри Vite (dev и preview), в браузер не попадает.
 *  - пароли хранятся только как scrypt-хеш с солью, на клиент уходят лишь login/email/имя;
 *  - сессия — случайный токен в HttpOnly-cookie (JS страницы его прочитать не может);
 *  - защита от CSRF (SameSite=Strict + проверка Origin), ограничение частоты попыток входа.
 * Для продакшена эту логику нужно вынести в отдельный сервер (Express/Fastify и т.п.).
 */
import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import { promisify } from 'node:util';
import type { Plugin } from 'vite';
import type { TranslationKey } from '../src/i18n';

const scryptAsync = promisify(scrypt) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;

interface StoredUser {
  firstName: string;
  lastName: string;
  phone: string;
  login: string;
  email: string;
  salt: string;
  hash: string;
}

interface PublicUser {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface Session {
  login: string;
  expires: number | null;
}

type Body = Record<string, unknown>;
type Reply = { status: number; body: { ok: boolean; error?: TranslationKey; user?: PublicUser }; cookie?: string };

const COOKIE = 'arcshop_sid';
const REMEMBER_MS = 30 * 24 * 3600 * 1000;
const MAX_BODY = 16 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LOGIN_RE = /^[A-Za-z0-9._-]{3,32}$/;
const PHONE_RE = /^\+?[\d\s()-]{10,20}$/;

const fail = (status: number, error: TranslationKey): Reply => ({ status, body: { ok: false, error } });
const publicUser = (u: StoredUser): PublicUser => ({
  login: u.login,
  email: u.email,
  firstName: u.firstName,
  lastName: u.lastName,
});

function createHandler(root: string) {
  const file = path.join(root, 'server', 'data', 'users.json');
  const sessions = new Map<string, Session>();
  const attempts = new Map<string, { count: number; resetAt: number }>();
  let writeQueue: Promise<unknown> = Promise.resolve();
  // Хеш-пустышка: сравниваем с ним, когда пользователя нет, чтобы не выдавать это по времени ответа
  const dummySalt = randomBytes(16);

  const loadUsers = (): StoredUser[] => {
    try {
      return existsSync(file) ? (JSON.parse(readFileSync(file, 'utf8')) as StoredUser[]) : [];
    } catch {
      return [];
    }
  };

  /** Запись через очередь и временный файл, чтобы параллельные запросы не портили данные */
  const saveUsers = (mutate: (users: StoredUser[]) => StoredUser[] | null): Promise<boolean> => {
    const job = writeQueue.then(() => {
      const next = mutate(loadUsers());
      if (!next) return false;
      mkdirSync(path.dirname(file), { recursive: true });
      const tmp = `${file}.tmp`;
      writeFileSync(tmp, JSON.stringify(next, null, 2), { mode: 0o600 });
      renameSync(tmp, file);
      return true;
    });
    writeQueue = job.catch(() => undefined);
    return job;
  };

  const hashPassword = async (password: string, salt: Buffer): Promise<string> =>
    (await scryptAsync(password, salt, 64)).toString('hex');

  const verify = async (password: string, user: StoredUser | undefined): Promise<boolean> => {
    const salt = user ? Buffer.from(user.salt, 'hex') : dummySalt;
    const actual = Buffer.from(await hashPassword(password, salt), 'hex');
    const expected = Buffer.from(user?.hash ?? '00'.repeat(64), 'hex');
    return timingSafeEqual(actual, expected) && user !== undefined;
  };

  const tooManyAttempts = (ip: string): boolean => {
    const now = Date.now();
    const entry = attempts.get(ip);
    if (!entry || entry.resetAt < now) {
      attempts.set(ip, { count: 1, resetAt: now + 60_000 });
      return false;
    }
    entry.count += 1;
    return entry.count > 10;
  };

  const readCookie = (req: IncomingMessage): string | null => {
    const raw = req.headers.cookie ?? '';
    for (const part of raw.split(';')) {
      const [name, ...rest] = part.trim().split('=');
      if (name === COOKIE) return rest.join('=');
    }
    return null;
  };

  const sessionLogin = (req: IncomingMessage): string | null => {
    const token = readCookie(req);
    const session = token ? sessions.get(token) : undefined;
    if (!token || !session) return null;
    if (session.expires !== null && session.expires < Date.now()) {
      sessions.delete(token);
      return null;
    }
    return session.login;
  };

  const startSession = (req: IncomingMessage, login: string, remember: boolean): string => {
    const old = readCookie(req);
    if (old) sessions.delete(old);
    const token = randomBytes(32).toString('hex');
    sessions.set(token, { login, expires: remember ? Date.now() + REMEMBER_MS : null });
    return cookie(req, token, remember ? REMEMBER_MS / 1000 : undefined);
  };

  const isHttps = (req: IncomingMessage): boolean =>
    req.headers['x-forwarded-proto'] === 'https' || 'encrypted' in req.socket;

  function cookie(req: IncomingMessage, value: string, maxAge?: number): string {
    const parts = [`${COOKIE}=${value}`, 'Path=/', 'HttpOnly', 'SameSite=Strict'];
    if (maxAge !== undefined) parts.push(`Max-Age=${maxAge}`);
    if (isHttps(req)) parts.push('Secure');
    return parts.join('; ');
  }

  const str = (body: Body, key: string): string => (typeof body[key] === 'string' ? (body[key] as string) : '');

  // ---------- обработчики ----------
  async function register(req: IncomingMessage, body: Body): Promise<Reply> {
    const firstName = str(body, 'firstName').trim();
    const lastName = str(body, 'lastName').trim();
    const phone = str(body, 'phone').trim();
    const login = str(body, 'login').trim();
    const email = str(body, 'email').trim();
    const password = str(body, 'password');
    const password2 = str(body, 'password2');

    if (!firstName || !lastName || !phone || !login || !email || !password || !password2) {
      return fail(400, 'err.required');
    }
    if (firstName.length > 64 || lastName.length > 64) return fail(400, 'err.required');
    if (!LOGIN_RE.test(login)) return fail(400, 'err.login');
    if (email.length > 254 || !EMAIL_RE.test(email)) return fail(400, 'err.email');
    if (!PHONE_RE.test(phone)) return fail(400, 'err.phone');
    if (password.length < 8 || password.length > 128) return fail(400, 'err.passwordShort');
    if (password !== password2) return fail(400, 'err.passwordMismatch');

    const salt = randomBytes(16);
    const user: StoredUser = {
      firstName,
      lastName,
      phone,
      login,
      email,
      salt: salt.toString('hex'),
      hash: await hashPassword(password, salt),
    };
    let error: TranslationKey | null = null;
    await saveUsers((users) => {
      if (users.some((u) => u.login.toLowerCase() === login.toLowerCase())) error = 'err.loginTaken';
      else if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) error = 'err.emailTaken';
      return error ? null : [...users, user];
    });
    if (error) return fail(409, error);
    return { status: 200, body: { ok: true, user: publicUser(user) }, cookie: startSession(req, login, true) };
  }

  async function login(req: IncomingMessage, body: Body): Promise<Reply> {
    const id = str(body, 'identifier').trim().toLowerCase();
    const password = str(body, 'password');
    if (!id || !password) return fail(400, 'err.required');
    if (password.length > 128) return fail(401, 'err.invalidCredentials');

    const user = loadUsers().find((u) => u.login.toLowerCase() === id || u.email.toLowerCase() === id);
    if (!(await verify(password, user)) || !user) return fail(401, 'err.invalidCredentials');
    return {
      status: 200,
      body: { ok: true, user: publicUser(user) },
      cookie: startSession(req, user.login, body.remember === true),
    };
  }

  function me(req: IncomingMessage): Reply {
    const login = sessionLogin(req);
    const user = login ? loadUsers().find((u) => u.login === login) : undefined;
    return { status: 200, body: { ok: true, ...(user ? { user: publicUser(user) } : {}) } };
  }

  function logout(req: IncomingMessage): Reply {
    const token = readCookie(req);
    if (token) sessions.delete(token);
    return { status: 200, body: { ok: true }, cookie: cookie(req, '', 0) };
  }

  async function changePassword(req: IncomingMessage, body: Body): Promise<Reply> {
    const login = sessionLogin(req);
    if (!login) return fail(401, 'err.notAuthorized');
    const current = str(body, 'current');
    const next = str(body, 'next');
    const next2 = str(body, 'next2');
    if (!current || !next || !next2) return fail(400, 'err.required');

    const user = loadUsers().find((u) => u.login === login);
    if (!user || !(await verify(current, user))) return fail(403, 'err.wrongPassword');
    if (next.length < 8 || next.length > 128) return fail(400, 'err.passwordShort');
    if (next !== next2) return fail(400, 'err.passwordMismatch');
    if (next === current) return fail(400, 'err.samePassword');

    const salt = randomBytes(16);
    const hash = await hashPassword(next, salt);
    await saveUsers((users) =>
      users.map((u) => (u.login === login ? { ...u, salt: salt.toString('hex'), hash } : u)),
    );
    // после смены пароля все остальные сессии этого пользователя закрываются
    const keep = readCookie(req);
    for (const [token, s] of sessions) if (s.login === login && token !== keep) sessions.delete(token);
    return { status: 200, body: { ok: true } };
  }

  const readBody = (req: IncomingMessage): Promise<Body | null> =>
    new Promise((resolve) => {
      let size = 0;
      const chunks: Buffer[] = [];
      req.on('data', (chunk: Buffer) => {
        size += chunk.length;
        if (size > MAX_BODY) {
          resolve(null);
          req.destroy();
        } else chunks.push(chunk);
      });
      req.on('end', () => {
        try {
          const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
          resolve(parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as Body) : null);
        } catch {
          resolve(null);
        }
      });
      req.on('error', () => resolve(null));
    });

  return async (req: IncomingMessage, res: ServerResponse, next: () => void): Promise<void> => {
    const route = `${req.method} ${(req.url ?? '').split('?')[0]}`;
    const known = ['POST /register', 'POST /login', 'POST /logout', 'POST /change-password', 'GET /me'];
    if (!known.includes(route)) return next();

    const send = (reply: Reply): void => {
      res.statusCode = reply.status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      if (reply.cookie) res.setHeader('Set-Cookie', reply.cookie);
      res.end(JSON.stringify(reply.body));
    };

    try {
      if (req.method === 'POST') {
        // CSRF: запрос должен прийти с нашего же origin и быть JSON
        const origin = req.headers.origin;
        const sameOrigin = typeof origin === 'string' && new URL(origin).host === req.headers.host;
        if (!sameOrigin || !String(req.headers['content-type']).startsWith('application/json')) {
          return send({ status: 403, body: { ok: false, error: 'err.notAuthorized' } });
        }
        if ((route === 'POST /login' || route === 'POST /register') && tooManyAttempts(req.socket.remoteAddress ?? '')) {
          return send(fail(429, 'err.tooMany'));
        }
      }

      const body = req.method === 'POST' ? await readBody(req) : {};
      if (!body) return send(fail(400, 'err.required'));

      switch (route) {
        case 'POST /register':
          return send(await register(req, body));
        case 'POST /login':
          return send(await login(req, body));
        case 'POST /logout':
          return send(logout(req));
        case 'POST /change-password':
          return send(await changePassword(req, body));
        default:
          return send(me(req));
      }
    } catch (error) {
      console.error('[auth-api]', error);
      send(fail(500, 'err.server'));
    }
  };
}

export function authApi(): Plugin {
  const handler = createHandler(process.cwd());
  return {
    name: 'arcshop-auth-api',
    configureServer(server) {
      server.middlewares.use('/api', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api', handler);
    },
  };
}
