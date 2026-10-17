import { randomBytes } from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { TranslationKey } from '../../src/i18n.ts';

export type Body = Record<string, unknown>;

export interface Reply {
  status: number;
  body: unknown;
  cookie?: string;
}

export const ok = (body: object = {}, cookie?: string): Reply => ({ status: 200, body: { ok: true, ...body }, cookie });
export const fail = (status: number, error: TranslationKey): Reply => ({ status, body: { ok: false, error } });

export interface Ctx {
  req: IncomingMessage;
  params: Record<string, string>;
  query: URLSearchParams;
  body: Body;
  /** id вошедшего пользователя или null */
  userId: string | null;
}

export interface Route {
  method: 'GET' | 'POST';
  /** например /products/:id/reviews */
  pattern: string;
  handler: (ctx: Ctx) => Promise<Reply> | Reply;
  /** требуется вход в аккаунт */
  auth?: boolean;
  /** строгий лимит запросов (вход, регистрация) */
  strict?: boolean;
}

// ---------- сессии: случайный токен в HttpOnly-cookie ----------
const COOKIE = 'arcshop_sid';
const REMEMBER_MS = 30 * 24 * 3600 * 1000;

export class Sessions {
  private map = new Map<string, { userId: string; expires: number | null }>();

  readToken(req: IncomingMessage): string | null {
    for (const part of (req.headers.cookie ?? '').split(';')) {
      const [name, ...rest] = part.trim().split('=');
      if (name === COOKIE) return rest.join('=');
    }
    return null;
  }

  userId(req: IncomingMessage): string | null {
    const token = this.readToken(req);
    const session = token ? this.map.get(token) : undefined;
    if (!token || !session) return null;
    if (session.expires !== null && session.expires < Date.now()) {
      this.map.delete(token);
      return null;
    }
    return session.userId;
  }

  /** Создаёт сессию (прежняя заменяется) и возвращает значение Set-Cookie */
  start(req: IncomingMessage, userId: string, remember: boolean): string {
    this.end(req);
    const token = randomBytes(32).toString('hex');
    this.map.set(token, { userId, expires: remember ? Date.now() + REMEMBER_MS : null });
    return this.cookie(req, token, remember ? REMEMBER_MS / 1000 : undefined);
  }

  end(req: IncomingMessage): void {
    const token = this.readToken(req);
    if (token) this.map.delete(token);
  }

  /** Закрывает все сессии пользователя, кроме текущей */
  endOthers(req: IncomingMessage, userId: string): void {
    const keep = this.readToken(req);
    for (const [token, s] of this.map) if (s.userId === userId && token !== keep) this.map.delete(token);
  }

  cookie(req: IncomingMessage, value: string, maxAge?: number): string {
    const parts = [`${COOKIE}=${value}`, 'Path=/', 'HttpOnly', 'SameSite=Strict'];
    if (maxAge !== undefined) parts.push(`Max-Age=${maxAge}`);
    if (req.headers['x-forwarded-proto'] === 'https' || 'encrypted' in req.socket) parts.push('Secure');
    return parts.join('; ');
  }
}

// ---------- лимиты запросов ----------
const buckets = new Map<string, { count: number; resetAt: number }>();

function limited(key: string, max: number): boolean {
  const now = Date.now();
  const entry = buckets.get(key);
  if (!entry || entry.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > max;
}

// ---------- роутер ----------
const MAX_BODY = 16 * 1024;

function readBody(req: IncomingMessage): Promise<Body | null> {
  return new Promise((resolve) => {
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
}

function compile(pattern: string): { regex: RegExp; names: string[] } {
  const names: string[] = [];
  const source = pattern.replace(/:([A-Za-z]+)/g, (_m, name: string) => {
    names.push(name);
    return '([^/]+)';
  });
  return { regex: new RegExp(`^${source}$`), names };
}

/** Собирает connect-middleware из таблицы маршрутов (монтируется на /api) */
export function createRouter(routes: Route[], sessions: Sessions) {
  const compiled = routes.map((route) => ({ route, ...compile(route.pattern) }));

  return async (req: IncomingMessage, res: ServerResponse, next: () => void): Promise<void> => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    let matched: { route: Route; params: Record<string, string> } | null = null;
    for (const c of compiled) {
      if (c.route.method !== req.method) continue;
      const m = c.regex.exec(url.pathname);
      if (!m) continue;
      matched = { route: c.route, params: Object.fromEntries(c.names.map((n, i) => [n, decodeURIComponent(m[i + 1])])) };
      break;
    }
    if (!matched) return next();

    const send = (reply: Reply): void => {
      res.statusCode = reply.status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      if (reply.cookie) res.setHeader('Set-Cookie', reply.cookie);
      res.end(JSON.stringify(reply.body));
    };

    try {
      const { route, params } = matched;
      let body: Body = {};

      if (route.method === 'POST') {
        // CSRF: запрос должен прийти с нашего же origin и быть JSON
        const origin = req.headers.origin;
        const sameOrigin = typeof origin === 'string' && new URL(origin).host === req.headers.host;
        if (!sameOrigin || !String(req.headers['content-type']).startsWith('application/json')) {
          return send(fail(403, 'err.notAuthorized'));
        }
        const ip = req.socket.remoteAddress ?? '';
        if (limited(`${route.strict ? 'strict' : 'write'}:${ip}`, route.strict ? 10 : 60)) {
          return send(fail(429, 'err.tooMany'));
        }
        const parsed = await readBody(req);
        if (!parsed) return send(fail(400, 'err.required'));
        body = parsed;
      }

      const userId = sessions.userId(req);
      if (route.auth && !userId) return send(fail(401, 'err.notAuthorized'));
      send(await route.handler({ req, params, query: url.searchParams, body, userId }));
    } catch (error) {
      console.error('[api]', error);
      send(fail(500, 'err.server'));
    }
  };
}

export const str = (body: Body, key: string): string => (typeof body[key] === 'string' ? (body[key] as string) : '');
