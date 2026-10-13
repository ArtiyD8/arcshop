import type { TranslationKey } from './i18n';

/**
 * Тонкий клиент к серверному API (/api/*, см. server/auth-api.ts).
 * Здесь нет ни хеширования, ни хранения пользователей: всё это живёт на сервере,
 * а сессия — в HttpOnly-cookie, которую JavaScript страницы прочитать не может.
 */
export interface User {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  phone: string;
  login: string;
  email: string;
  password: string;
  password2: string;
}

export type Result = { ok: true; user?: User } | { ok: false; error: TranslationKey };

interface ApiResponse {
  ok: boolean;
  error?: TranslationKey;
  user?: User;
}

async function call(path: string, method: 'GET' | 'POST', body?: object): Promise<ApiResponse> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    return (await response.json()) as ApiResponse;
  } catch {
    return { ok: false, error: 'err.network' };
  }
}

function toResult(data: ApiResponse): Result {
  return data.ok ? { ok: true, user: data.user } : { ok: false, error: data.error ?? 'err.server' };
}

export async function fetchCurrentUser(): Promise<User | null> {
  const data = await call('/me', 'GET');
  return data.ok ? (data.user ?? null) : null;
}

export const register = async (data: RegisterData): Promise<Result> => toResult(await call('/register', 'POST', data));

/** identifier — логин или электронная почта */
export const login = async (identifier: string, password: string, remember: boolean): Promise<Result> =>
  toResult(await call('/login', 'POST', { identifier, password, remember }));

export const logout = async (): Promise<void> => {
  await call('/logout', 'POST', {});
};

export const changePassword = async (current: string, next: string, next2: string): Promise<Result> =>
  toResult(await call('/change-password', 'POST', { current, next, next2 }));
