import type { TranslationKey } from '../i18n';

export type ApiResult<T extends object> = ({ ok: true } & T) | { ok: false; error: TranslationKey };

async function request<T extends object>(method: 'GET' | 'POST', path: string, body?: object): Promise<ApiResult<T>> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      credentials: 'same-origin',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    return (await response.json()) as ApiResult<T>;
  } catch {
    return { ok: false, error: 'err.network' };
  }
}

export const apiGet = <T extends object>(path: string): Promise<ApiResult<T>> => request<T>('GET', path);
export const apiPost = <T extends object = object>(path: string, body: object): Promise<ApiResult<T>> =>
  request<T>('POST', path, body);
