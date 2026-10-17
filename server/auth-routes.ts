import type { IncomingMessage } from 'node:http';
import { fail, ok, str } from './lib/http.ts';
import type { Body, Reply, Route, Sessions } from './lib/http.ts';
import { hashPassword, newSalt, verifyPassword } from './lib/password.ts';
import type { Repo, UserRow } from './db/types.ts';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LOGIN_RE = /^[A-Za-z0-9._-]{3,32}$/;
const PHONE_RE = /^\+?[\d\s()-]{10,20}$/;

/** На клиент уходит только это, ни хеша, ни телефона */
const publicUser = (u: UserRow) => ({ login: u.login, email: u.email, firstName: u.firstName, lastName: u.lastName });

export function authRoutes(repo: Repo, sessions: Sessions): Route[] {
  async function register(req: IncomingMessage, body: Body): Promise<Reply> {
    const firstName = str(body, 'firstName').trim();
    const lastName = str(body, 'lastName').trim();
    const phone = str(body, 'phone').trim();
    const login = str(body, 'login').trim();
    const email = str(body, 'email').trim();
    const password = str(body, 'password');
    const password2 = str(body, 'password2');

    if (!firstName || !lastName || !phone || !login || !email || !password || !password2) return fail(400, 'err.required');
    if (firstName.length > 64 || lastName.length > 64) return fail(400, 'err.required');
    if (!LOGIN_RE.test(login)) return fail(400, 'err.login');
    if (email.length > 254 || !EMAIL_RE.test(email)) return fail(400, 'err.email');
    if (!PHONE_RE.test(phone)) return fail(400, 'err.phone');
    if (password.length < 8 || password.length > 128) return fail(400, 'err.passwordShort');
    if (password !== password2) return fail(400, 'err.passwordMismatch');

    const salt = newSalt();
    const created = await repo.createUser({
      firstName,
      lastName,
      phone,
      login,
      email,
      salt: salt.toString('hex'),
      hash: await hashPassword(password, salt),
    });
    if (!created.ok) return fail(409, created.error === 'login' ? 'err.loginTaken' : 'err.emailTaken');
    return ok({ user: publicUser(created.user) }, sessions.start(req, created.user.id, true));
  }

  return [
    { method: 'POST', pattern: '/register', strict: true, handler: ({ req, body }) => register(req, body) },
    {
      method: 'POST',
      pattern: '/login',
      strict: true,
      handler: async ({ req, body }) => {
        const identifier = str(body, 'identifier').trim();
        const password = str(body, 'password');
        if (!identifier || !password) return fail(400, 'err.required');
        if (password.length > 128) return fail(401, 'err.invalidCredentials');

        const user = await repo.findUserByIdentifier(identifier);
        if (!(await verifyPassword(password, user)) || !user) return fail(401, 'err.invalidCredentials');
        return ok({ user: publicUser(user) }, sessions.start(req, user.id, body.remember === true));
      },
    },
    {
      method: 'GET',
      pattern: '/me',
      handler: async ({ userId }) => {
        const user = userId ? await repo.findUserById(userId) : undefined;
        return ok(user ? { user: publicUser(user) } : {});
      },
    },
    {
      method: 'POST',
      pattern: '/logout',
      handler: ({ req }) => {
        sessions.end(req);
        return ok({}, sessions.cookie(req, '', 0));
      },
    },
    {
      method: 'POST',
      pattern: '/change-password',
      auth: true,
      handler: async ({ req, body, userId }) => {
        const user = userId ? await repo.findUserById(userId) : undefined;
        if (!user) return fail(401, 'err.notAuthorized');
        const current = str(body, 'current');
        const next = str(body, 'next');
        const next2 = str(body, 'next2');
        if (!current || !next || !next2) return fail(400, 'err.required');
        if (!(await verifyPassword(current, user))) return fail(403, 'err.wrongPassword');
        if (next.length < 8 || next.length > 128) return fail(400, 'err.passwordShort');
        if (next !== next2) return fail(400, 'err.passwordMismatch');
        if (next === current) return fail(400, 'err.samePassword');

        const salt = newSalt();
        await repo.updateUserPassword(user.id, salt.toString('hex'), await hashPassword(next, salt));
        sessions.endOthers(req, user.id); // остальные сессии закрываются
        return ok();
      },
    },
  ];
}
