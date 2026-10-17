-- Схема БД ARCSHOP (PostgreSQL; для SQLite замените JSONB на TEXT, TIMESTAMPTZ на TEXT).
-- Сейчас приложение работает на JSON-файле (server/db/json-repo.ts) с тем же набором сущностей.
-- Чтобы перейти на SQL, достаточно написать реализацию интерфейса Repo (server/db/types.ts) поверх этой схемы.

CREATE TABLE users (
  id            TEXT PRIMARY KEY,
  first_name    TEXT NOT NULL,
  last_name     TEXT NOT NULL,
  phone         TEXT NOT NULL,
  login         TEXT NOT NULL,
  email         TEXT NOT NULL,
  salt          TEXT NOT NULL,          -- соль scrypt
  hash          TEXT NOT NULL,          -- scrypt-хеш пароля
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX users_login_key ON users (lower(login));
CREATE UNIQUE INDEX users_email_key ON users (lower(email));

CREATE TABLE products (
  id            TEXT PRIMARY KEY,
  category      TEXT NOT NULL CHECK (category IN ('smartphones','laptops','peripherals','accessories','software')),
  brand         TEXT NOT NULL,
  name          TEXT NOT NULL,
  price         INTEGER NOT NULL CHECK (price >= 0),     -- в рублях
  old_price     INTEGER CHECK (old_price IS NULL OR old_price > price),
  badge         TEXT CHECK (badge IN ('hit','new','sale')),
  color_a       TEXT NOT NULL,
  color_b       TEXT NOT NULL,
  description   JSONB NOT NULL,                          -- {"ru": "...", "en": "..."}
  specs         JSONB NOT NULL,                          -- ключи описаны в src/shared/specs.ts
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX products_category_idx ON products (category);

CREATE TABLE orders (
  id            TEXT PRIMARY KEY,
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  total         INTEGER NOT NULL CHECK (total >= 0),
  status        TEXT NOT NULL DEFAULT 'paid',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX orders_user_idx ON orders (user_id);

CREATE TABLE order_items (
  order_id      TEXT NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
  product_id    TEXT NOT NULL REFERENCES products (id),
  qty           INTEGER NOT NULL CHECK (qty BETWEEN 1 AND 99),
  price         INTEGER NOT NULL,                        -- цена на момент покупки
  PRIMARY KEY (order_id, product_id)
);

-- Отзыв: один на пару (пользователь, товар); писать может только покупатель (проверяется по order_items)
CREATE TABLE reviews (
  id            TEXT PRIMARY KEY,
  product_id    TEXT NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  author_name   TEXT NOT NULL,
  rating        INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body          TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (product_id, user_id)
);

CREATE TABLE questions (
  id            TEXT PRIMARY KEY,
  product_id    TEXT NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  author_name   TEXT NOT NULL,
  body          TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX questions_product_idx ON questions (product_id);

CREATE TABLE answers (
  id            TEXT PRIMARY KEY,
  question_id   TEXT NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
  user_id       TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  author_name   TEXT NOT NULL,
  body          TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX answers_question_idx ON answers (question_id);
