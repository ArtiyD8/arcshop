# Полная документация REST API — ARCSHOP (Monorepo)

## 1. Общие сведения

* **Базовый URL (Production / Dev):** `http://localhost:3000/api/v1`
* **Совместимые алиасы:** `http://localhost:3000/api/*` (все вызовы `/api/...` автоматически маршрутизируются на те же обработчики, что и `/api/v1/...`)
* **Формат обмена данными:** `application/json; charset=utf-8`
* **Двойная авторизация (Dual-Auth):**
  * **Bearer-токен** в заголовке: `Authorization: Bearer <accessToken>`
  * **ИЛИ Cookie**: `accessToken` (1 день) и `refreshToken` (30 дней, `httpOnly`, `SameSite=Lax`). Приложение поддерживает оба способа одновременно.
* **Тестовые учетные записи (предзаполнены в БД):**
  * **Покупатель (`CUSTOMER`):** `demo@arcshop.com` / `demo12345`
  * **Администратор (`ADMIN`):** `admin@arcshop.com` / `admin12345`

---

## 2. Стандартные форматы ответов

### Успешный ответ (HTTP 200 / 201)
```json
{
  "success": true,
  "ok": true,
  "data": { ... },
  "message": "Опциональное пояснение"
}
```

### Ошибка (HTTP 400 / 401 / 403 / 404 / 409 / 500)
```json
{
  "success": false,
  "ok": false,
  "error": "err.invalidCredentials",
  "message": "Неверный логин или пароль"
}
```

---

## 3. Полный реестр реализованных эндпоинтов (55 маршрутов)

### 3.1. Авторизация и профиль (`/api/v1/auth`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Публичный | Регистрация нового покупателя (выдача JWT + httpOnly cookies) |
| `POST` | `/api/v1/auth/login` | Публичный | Вход (по email, логину или номеру телефона) |
| `GET` | `/api/v1/auth/me` | Авторизован | Профиль текущего пользователя (`nickname`, `avatarUrl` и др.) |
| `PATCH` | `/api/v1/auth/me` | Авторизован | Обновление профиля (имя, фамилия, телефон, email, логин, никнейм, аватарка) |
| `PATCH` | `/api/v1/auth/avatar` | Авторизован | Установка или обновление аватарки (`avatarUrl`) и опционально никнейма (`nickname`) |
| `PATCH` | `/api/v1/auth/nickname` | Авторизован | Изменение никнейма пользователя (`nickname`, от 2 до 30 символов, с проверкой уникальности) |
| `PUT` | `/api/v1/auth/me` | Авторизован | Полное обновление профиля пользователя |
| `POST` | `/api/v1/auth/refresh` | Cookie / Body | Обновление пары `accessToken` + `refreshToken` |
| `POST` | `/api/v1/auth/logout` | Авторизован | Выход из текущей сессии (очистка cookies) |
| `POST` | `/api/v1/auth/logout-all` | Авторизован | Завершение всех активных сессий на всех устройствах |
| `POST` | `/api/v1/auth/change-password`| Авторизован | Смена пароля (с аннулированием старых сессий) |

### 3.2. Каталог, товары и умное сравнение (`/api/v1/products`, `/api/v1/categories`, `/api/v1/banners`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/categories` | Публичный | Список всех категорий с иконками и счетчиком товаров (`productCount`) |
| `GET` | `/api/v1/categories/:slug` | Публичный | Детальная информация о категории и список товаров в ней |
| `GET` | `/api/v1/banners` | Публичный | Активные рекламные баннеры на главной странице |
| `GET` | `/api/v1/products` | Публичный | Каталог с фильтрами (`category`, `brand`, `badge`, `minPrice`, `maxPrice`, `inStock`, `isFeatured`, `search`, `sort`, `page`, `limit`) |
| `GET` | `/api/v1/products/:slug` | Публичный | Детальная карточка товара по `slug` или `id` с агрегатами отзывов и вопросов |
| `GET` | `/api/v1/products/compare` | Публичный | Серверный математический расчет умного сравнения (`?ids=id1,id2`) |
| `POST` | `/api/v1/products/compare` | Публичный | Сравнение товаров передачей массива `{ "ids": [...] }` в теле запроса |

### 3.3. Отзывы с верификацией покупки (`/api/v1/products/:productId/reviews`, `/api/v1/reviews`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/products/:productId/reviews` | Публичный / Auth | Список отзывов, гистограмма 1–5 и статус блокировки (`login` / `purchase` / `reviewed` / `null`) |
| `POST` | `/api/v1/products/:productId/reviews` | Покупатель (PAID)| Публикация отзыва (проверяет наличие оплаченного заказа с этим товаром) |
| `PATCH` | `/api/v1/products/:productId/reviews/:reviewId` | Автор / ADMIN | Редактирование текста и оценки отзыва |
| `DELETE`| `/api/v1/products/:productId/reviews/:reviewId` | Автор / ADMIN | Удаление отзыва |
| `PATCH` | `/api/v1/reviews/:reviewId` | Автор / ADMIN | Прямой алиас редактирования отзыва по ID |
| `DELETE`| `/api/v1/reviews/:reviewId` | Автор / ADMIN | Прямой алиас удаления отзыва по ID |

### 3.4. Вопросы и ответы (`/api/v1/products/:productId/questions`, `/api/v1/questions`, `/api/v1/answers`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/products/:productId/questions`| Публичный | Список вопросов и ответов с авто-бейджами `isBuyer` (купил товар) и `isShop` (ответ магазина) |
| `POST` | `/api/v1/products/:productId/questions`| Авторизован | Задать вопрос по товару |
| `POST` | `/api/v1/questions/:questionId/answers`| Авторизован | Ответить на вопрос (для `ADMIN` автоматически ставится имя «Магазин ARCSHOP») |
| `DELETE`| `/api/v1/questions/:questionId` | Автор / ADMIN | Удалить вопрос вместе с ответами |
| `DELETE`| `/api/v1/answers/:answerId` | Автор / ADMIN | Удалить конкретный ответ |

### 3.5. Серверная корзина (`/api/v1/cart`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/cart` | Авторизован | Получение серверной корзины с расчетом `subtotal`, `totalCount`, `totalPrice` |
| `POST` | `/api/v1/cart` | Авторизован | Добавить товар в корзину с контролем остатка на складе |
| `POST` | `/api/v1/cart/sync` | Авторизован | Синхронизация локальной корзины клиента с сервером |
| `PATCH` | `/api/v1/cart/:itemId` | Авторизован | Изменить количество позиции (по `itemId` или `productId`) |
| `DELETE`| `/api/v1/cart/:itemId` | Авторизован | Удалить конкретную позицию из корзины |
| `DELETE`| `/api/v1/cart` | Авторизован | Полностью очистить корзину пользователя |

### 3.6. Избранное (`/api/v1/favorites`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/favorites` | Авторизован | Список избранных товаров пользователя |
| `POST` | `/api/v1/favorites/toggle` | Авторизован | Добавить / удалить товар из избранного (переключатель) |
| `DELETE`| `/api/v1/favorites/:productId` | Авторизован | Удалить конкретный товар из избранного |
| `DELETE`| `/api/v1/favorites` | Авторизован | Очистить весь список избранного |

### 3.7. Заказы и покупки (`/api/v1/orders`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/orders` | Авторизован | Оформить заказ (списание остатков, промокоды, гарантия ArcCare+ +8%, выбор способа оплаты `CARD`/`SBP`/`SPLIT`/`B2B_INVOICE`) |
| `GET` | `/api/v1/orders` | Авторизован | История всех заказов текущего пользователя |
| `GET` | `/api/v1/orders/purchased` | Авторизован | Список ID всех купленных товаров пользователя (для верификации отзывов) |
| `GET` | `/api/v1/orders/:id` | Авторизован | Детальная информация по конкретному заказу |
| `PATCH` | `/api/v1/orders/:id/cancel` | Авторизован | Отмена заказа с автоматическим возвратом товаров на склад |

### 3.8. Бизнес-сервисы и поддержка (`/api/v1/promocodes`, `/api/v1/trade-in`, `/api/v1/b2b`, `/api/v1/chat`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/promocodes` | Публичный | Список активных промокодов (`WELCOME`, `ARC2026`, `PRODEV`) |
| `POST` | `/api/v1/promocodes/validate` | Публичный | Валидация промокода и расчет скидки под сумму корзины |
| `GET` | `/api/v1/trade-in` | Публичный | История оценок устройств по программе Trade-In |
| `POST` | `/api/v1/trade-in/estimate` | Публичный | Оценка старого устройства и выпуск промокода (`TRADEIN10` / `TRADEIN15` / `TRADEIN20`) |
| `GET` | `/api/v1/b2b/quotes` | Публичный | Реестр сформированных B2B-счетов для юрлиц |
| `POST` | `/api/v1/b2b/quote` | Публичный | Генерация коммерческого предложения и B2B-счета с НДС 20% и оптовой скидкой -7% (от 5 шт.) |
| `GET` | `/api/v1/chat` | Публичный / Auth | История сообщений чата поддержки для текущей сессии |
| `POST` | `/api/v1/chat` | Публичный / Auth | Отправка сообщения в чат и автоответ консультанта по доставке, гарантии, Сплиту, Trade-In и промокодам |
| `DELETE`| `/api/v1/chat` | Публичный / Auth | Очистка истории чата поддержки |

### 3.9. Администрирование и аналитика (`/api/v1/admin`)
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/admin/stats` | ADMIN | Сводная аналитика и юнит-экономика (выручка, валовая прибыль 22%, средний чек AOV, товары с низким остатком) |
| `GET` | `/api/v1/admin/orders` | ADMIN | Все заказы магазина с контактами покупателей |
| `PATCH` | `/api/v1/admin/orders/:id/status`| ADMIN | Смена статуса заказа (`PENDING`/`PAID`/`SHIPPED`/`DELIVERED`/`CANCELLED`) с возвратом склада при отмене |
| `POST` | `/api/v1/admin/products` | ADMIN | Создание нового товара |
| `PATCH` | `/api/v1/admin/products/:id` | ADMIN | Редактирование товара (цена, старая цена, остаток, бейдж, характеристики) |
| `DELETE`| `/api/v1/admin/products/:id` | ADMIN | Удаление товара из каталога |
| `GET` | `/api/v1/admin/users` | ADMIN | Список всех пользователей со счетчиком их заказов |
| `PATCH` | `/api/v1/admin/users/:id/role`| ADMIN | Изменение роли пользователя (`CUSTOMER` / `ADMIN`) |
| `POST` | `/api/v1/admin/categories` | ADMIN | Создание новой категории |
| `PATCH` | `/api/v1/admin/categories/:id`| ADMIN | Редактирование категории |
| `DELETE`| `/api/v1/admin/categories/:id`| ADMIN | Удаление категории |
| `GET` | `/api/v1/admin/banners` | ADMIN | Список всех баннеров (включая неактивные) |
| `POST` | `/api/v1/admin/banners` | ADMIN | Создание нового рекламного баннера |
| `PATCH` | `/api/v1/admin/banners/:id` | ADMIN | Редактирование баннера |
| `DELETE`| `/api/v1/admin/banners/:id` | ADMIN | Удаление баннера |

### 3.10. Системные маршруты
| Метод | Путь | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/endpoints` | Публичный | Машиночитаемая спецификация всех 55+ эндпоинтов с примерами JSON |
| `GET` | `/health` | Публичный | Проверка работоспособности сервера |

---

## 4. Примеры вызова эндпоинтов аватара и никнейма

### Установка / смена аватарки (`PATCH /api/v1/auth/avatar`)
```json
{
  "avatarUrl": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
  "nickname": "alexey_pro"
}
```

### Изменение никнейма (`PATCH /api/v1/auth/nickname`)
```json
{
  "nickname": "alexey_pro"
}
```
