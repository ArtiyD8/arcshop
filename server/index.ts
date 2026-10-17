/**
 * Серверная часть ARCSHOP. Работает внутри Vite (dev и preview), в браузер не попадает.
 *  - пароли — только scrypt-хеш с солью, сессия — токен в HttpOnly-cookie;
 *  - данные — через интерфейс Repo (сейчас JSON-файл, схема SQL лежит в db/schema.sql);
 *  - защита от CSRF (SameSite=Strict + проверка Origin), лимиты запросов.
 * Для продакшена эту логику нужно вынести в отдельный сервер (Express/Fastify и т.п.).
 */
import path from 'node:path';
import type { Plugin } from 'vite';
import { authRoutes } from './auth-routes.ts';
import { createJsonRepo } from './db/json-repo.ts';
import { Sessions, createRouter } from './lib/http.ts';
import { shopRoutes } from './shop-routes.ts';

export function arcshopApi(): Plugin {
  // БД и роутер создаются лениво, при старте dev/preview-сервера, а не при чтении конфига (например, в `vite build`)
  let handler: ReturnType<typeof createRouter> | undefined;
  const get = (): ReturnType<typeof createRouter> => {
    if (!handler) {
      const repo = createJsonRepo(path.join(process.cwd(), 'server', 'data'));
      const sessions = new Sessions();
      handler = createRouter([...authRoutes(repo, sessions), ...shopRoutes(repo)], sessions);
    }
    return handler;
  };

  return {
    name: 'arcshop-api',
    configureServer(server) {
      server.middlewares.use('/api', get());
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api', get());
    },
  };
}
