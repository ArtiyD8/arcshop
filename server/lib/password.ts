import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scryptAsync = promisify(scrypt) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;
const dummySalt = randomBytes(16);

export const newSalt = (): Buffer => randomBytes(16);

export async function hashPassword(password: string, salt: Buffer): Promise<string> {
  return (await scryptAsync(password, salt, 64)).toString('hex');
}

/** Проверка пароля; если пользователя нет — сравниваем с пустышкой, чтобы время ответа не выдавало это */
export async function verifyPassword(
  password: string,
  user: { salt: string; hash: string } | undefined,
): Promise<boolean> {
  const salt = user ? Buffer.from(user.salt, 'hex') : dummySalt;
  const actual = Buffer.from(await hashPassword(password, salt), 'hex');
  const expected = Buffer.from(user?.hash ?? '00'.repeat(64), 'hex');
  return timingSafeEqual(actual, expected) && user !== undefined;
}
