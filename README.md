# ARCSHOP

Vite + React + TypeScript + ESLint (flat config) + PostCSS (nesting, autoprefixer).

```bash
npm install
npm run dev       # разработка (фронт + API авторизации)
npm run build     # tsc + сборка
npm run preview   # предпросмотр сборки (API тоже работает)
npm run lint      # ESLint
```

## Маршруты
`/home` · `/smartphones` · `/laptops` · `/peripherals` · `/accessories` · `/drivers-software`
`/login` · `/register` · `/settings` (только для вошедших)

## Авторизация и безопасность
Вся логика авторизации живёт на сервере — `server/auth-api.ts` (Vite-плагин, работает в `dev` и `preview`).
В браузер он не попадает: клиент (`src/auth.ts`) только вызывает `/api/*`.

- пароли — только scrypt-хеш с солью; пользователи в `server/data/users.json` (в `.gitignore`);
- сессия — случайный токен в HttpOnly + SameSite=Strict cookie, JS страницы его не видит;
- проверка Origin и Content-Type (CSRF), ограничение попыток входа, одинаковая ошибка для «нет такого пользователя» и «неверный пароль»;
- после смены пароля остальные сессии пользователя закрываются.

Важно: всё, что выполняется в браузере, пользователь может увидеть во вкладке Network/Sources — это неизбежно.
Поэтому секреты и проверки держим только на сервере. В продакшене `server/auth-api.ts` нужно вынести в отдельный
Node-сервер (Express/Fastify) с настоящей БД: `vite build` выдаёт только статику.

## Темы
Светлая, тёмная («Полночный индиго») и системная. Переключатель в шапке доступен без входа;
токены цветов — в `src/styles/base.css`. Цвет нажатой кнопки зависит от темы (`--press-*`).

## Демо-данные
Списки избранного и корзины и чат поддержки работают на демо-данных (`src/data/demo-products.ts`,
`src/shop-context.tsx`) — каталога и бэкенда для них пока нет.

## Структура
- `src/App.tsx` — маршруты и охранники (`RequireAuth`, `GuestOnly`)
- `src/*-context.tsx` — язык, тема, пользователь, магазин (избранное/корзина/чат)
- `src/components/` — `Shell`, `AuthScreen`, `Popover`, `ThemeMenu`, `ShopPanels`, `Form`, `Icon`, `Deco`
- `server/auth-api.ts` — серверная авторизация
