This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
prisma/
  migrations/
    20261007144739_init/
      migration.sql
    20261009142246_add_refresh_tokens/
      migration.sql
    20261009151245_update_user_and_tokens/
      migration.sql
    migration_lock.toml
  schema.prisma
  seed.ts
src/
  config/
    prisma.ts
  middlewares/
    admin.middleware.ts
    auth.middleware.ts
    logger.middleware.ts
    optional-auth.middleware.ts
  modules/
    admin/
      admin.controller.ts
      admin.routes.ts
    auth/
      auth.controller.ts
      auth.routes.ts
      auth.service.ts
    cart/
      cart.controller.ts
      cart.routes.ts
      cart.service.ts
    favorites/
      favorites.controller.ts
      favorites.routes.ts
      favorites.service.ts
    orders/
      orders.controller.ts
      orders.routes.ts
      orders.service.ts
    products/
      product.controller.ts
      product.routes.ts
      product.service.ts
    questions/
      questions.controller.ts
      questions.routes.ts
      questions.service.ts
    reviews/
      reviews.controller.ts
      reviews.routes.ts
      reviews.service.ts
  app.ts
  server.ts
.gitignore
docker-compose.yml
Dockerfile
endpoints.md
package.json
README.md
tsconfig.json
````

# Files

## File: prisma/migrations/20261007144739_init/migration.sql
````sql
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "images" TEXT[],
    "specs" JSONB NOT NULL DEFAULT '{}',
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
````

## File: prisma/migrations/20261009142246_add_refresh_tokens/migration.sql
````sql
-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
````

## File: prisma/migrations/20261009151245_update_user_and_tokens/migration.sql
````sql
/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
````

## File: prisma/migrations/migration_lock.toml
````toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
````

## File: prisma/schema.prisma
````prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  CUSTOMER
  ADMIN
}

enum OrderStatus {
  PENDING   // Ожидает оплаты / обработки
  PAID      // Оплачен
  SHIPPED   // В доставке
  DELIVERED // Доставлен
  CANCELLED // Отменен
}

enum ProductBadge {
  HIT  // Хит продаж
  NEW  // Новинка
  SALE // Скидка
}

model User {
  id            String         @id @default(uuid())
  firstName     String
  lastName      String
  email         String         @unique
  phone         String         @unique
  password      String
  role          Role           @default(CUSTOMER)
  refreshTokens RefreshToken[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt

  cartItems     CartItem[]
  favorites     Favorite[]
  orders        Order[]
  reviews       Review[]
  questions     Question[]
  answers       Answer[]
}

model RefreshToken {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  expiresAt DateTime
  createdAt DateTime @default(now())
}

model Category {
  id        String    @id @default(uuid())
  name      String
  slug      String    @unique
  icon      String?
  order     Int       @default(0)
  products  Product[]
  createdAt DateTime  @default(now())
}

model Banner {
  id        String   @id @default(uuid())
  title     String
  imageUrl  String
  link      String?
  isActive  Boolean  @default(true)
  order     Int      @default(0)
  createdAt DateTime @default(now())
}

model Product {
  id          String        @id @default(uuid())
  title       String
  slug        String        @unique
  brand       String        @default("Arc")
  colors      String[]      @default(["#4340b8", "#26215c"])
  badge       ProductBadge?
  description String
  price       Decimal       @db.Decimal(10, 2)
  oldPrice    Decimal?      @db.Decimal(10, 2)
  stock       Int           @default(0)
  images      String[]
  specs       Json?
  isFeatured  Boolean       @default(false)
  categoryId  String
  category    Category      @relation(fields: [categoryId], references: [id])
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  cartItems   CartItem[]
  favorites   Favorite[]
  orderItems  OrderItem[]
  reviews     Review[]
  questions   Question[]
}

model Review {
  id         String   @id @default(uuid())
  productId  String
  product    Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  userId     String
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  authorName String
  rating     Int
  text       String
  createdAt  DateTime @default(now())

  @@unique([productId, userId])
}

model Question {
  id         String   @id @default(uuid())
  productId  String
  product    Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  userId     String
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  authorName String
  text       String
  answers    Answer[]
  createdAt  DateTime @default(now())
}

model Answer {
  id         String   @id @default(uuid())
  questionId String
  question   Question @relation(fields: [questionId], references: [id], onDelete: Cascade)
  userId     String
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  authorName String
  text       String
  createdAt  DateTime @default(now())
}

model CartItem {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  quantity  Int      @default(1)

  @@unique([userId, productId])
}

model Favorite {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  @@unique([userId, productId])
}

model Order {
  id              String      @id @default(uuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  status          OrderStatus @default(PENDING)
  totalAmount     Decimal     @db.Decimal(10, 2)
  deliveryAddress String
  contactPhone    String
  comment         String?
  items           OrderItem[]
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}

model OrderItem {
  id        String   @id @default(uuid())
  orderId   String
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  price     Decimal  @db.Decimal(10, 2)
  quantity  Int      @default(1)
}
````

## File: prisma/seed.ts
````typescript
import { PrismaClient, ProductBadge } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Начинаем сидирование базы данных под фронтенд...");

  // 1. Категории со слагами, идентичными роутам фронта
  const categoriesData = [
    { name: "Смартфоны", slug: "smartphones", icon: "smartphone", order: 1 },
    { name: "Ноутбуки", slug: "laptops", icon: "laptop", order: 2 },
    { name: "Периферия", slug: "peripherals", icon: "headphones", order: 3 },
    { name: "Аксессуары", slug: "accessories", icon: "bag", order: 4 },
    { name: "Драйверы & Софт", slug: "software", icon: "book", order: 5 },
  ];

  const categories: Record<string, string> = {};

  for (const cat of categoriesData) {
    const record = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, icon: cat.icon, order: cat.order },
      create: cat,
    });
    categories[cat.slug] = record.id;
  }

  // 2. Баннер
  await prisma.banner.upsert({
    where: { id: "default-banner-1" },
    update: {},
    create: {
      id: "default-banner-1",
      title: "Весенняя распродажа: скидки на ультрабуки до 25%",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      link: "/laptops",
      isActive: true,
      order: 1,
    },
  });

  // 3. Создаем тестового пользователя для отзывов и вопросов
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@arcshop.com" },
    update: {},
    create: {
      id: "demo-user-id-1",
      firstName: "Алексей",
      lastName: "Морозов",
      phone: "+79990001122",
      email: "demo@arcshop.com",
      password: "demoPasswordHashNotForLogin",
      role: "CUSTOMER",
    },
  });

  // 4. Товары с брендами, цветами и бейджами
  const products = [
    // Смартфоны
    {
      id: "prod-arc-phone-x",
      title: "Arc Phone X",
      slug: "arc-phone-x",
      brand: "Arc",
      badge: ProductBadge.HIT,
      colors: ["#6c63ff", "#2ec4ff"],
      description:
        "Флагман с ярким 120 Гц экраном, мощной камерой и быстрой зарядкой на весь день.",
      price: 59990.0,
      oldPrice: 69990.0,
      stock: 14,
      isFeatured: true,
      categoryId: categories["smartphones"],
      images: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        chip: { ru: "Arc A17", en: "Arc A17" },
        screen: 6.7,
        refresh: 120,
        ram: 12,
        storage: 256,
        camera: 50,
        battery: 5000,
        charging: 67,
        weight: 192,
        nfc: true,
        warranty: 12,
      },
    },
    {
      id: "prod-nova-s5",
      title: "Nova S5",
      slug: "nova-s5",
      brand: "Nova",
      badge: ProductBadge.NEW,
      colors: ["#ff6b9a", "#ffb86b"],
      description:
        "Тонкий смартфон с рекордно быстрой зарядкой 80 Вт и ёмким аккумулятором.",
      price: 44990.0,
      oldPrice: null,
      stock: 8,
      isFeatured: false,
      categoryId: categories["smartphones"],
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        chip: { ru: "Nova N8", en: "Nova N8" },
        screen: 6.5,
        refresh: 120,
        ram: 8,
        storage: 128,
        camera: 64,
        battery: 5200,
        charging: 80,
        weight: 201,
        nfc: true,
        warranty: 12,
      },
    },

    // Ноутбуки
    {
      id: "prod-arc-book-15-pro",
      title: "Arc Book 15 Pro",
      slug: "arc-book-15-pro",
      brand: "Arc",
      badge: ProductBadge.HIT,
      colors: ["#6c63ff", "#a78bfa"],
      description:
        "Мощный и тихий ноутбук для работы и творчества с экраном 120 Гц.",
      price: 89990.0,
      oldPrice: null,
      stock: 6,
      isFeatured: true,
      categoryId: categories["laptops"],
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        cpu: { ru: "Arc M2 Pro", en: "Arc M2 Pro" },
        cores: 10,
        gpu: { ru: "Встроенная 16 ядер", en: "Integrated 16-core" },
        ram: 16,
        storage: 512,
        screen: 15.6,
        refresh: 120,
        battery: 16,
        weight: 1.7,
        warranty: 12,
      },
    },

    // Периферия
    {
      id: "prod-arc-pulse-headset",
      title: "Arc Pulse Headset",
      slug: "arc-pulse-headset",
      brand: "Arc",
      badge: ProductBadge.HIT,
      colors: ["#6c63ff", "#22d3ee"],
      description:
        "Беспроводная игровая гарнитура: 40 часов звука и почти нулевая задержка.",
      price: 7990.0,
      oldPrice: null,
      stock: 20,
      isFeatured: false,
      categoryId: categories["peripherals"],
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        type: { ru: "Игровая гарнитура", en: "Gaming headset" },
        connection: { ru: "2.4 ГГц / Bluetooth", en: "2.4 GHz / Bluetooth" },
        latency: 20,
        battery: 40,
        weight: 290,
        rgb: true,
        warranty: 12,
      },
    },
    {
      id: "prod-nova-strike-mouse",
      title: "Nova Strike Mouse",
      slug: "nova-strike-mouse",
      brand: "Nova",
      badge: ProductBadge.NEW,
      colors: ["#ff6b9a", "#8b5cf6"],
      description:
        "Сверхлёгкая беспроводная мышь на 58 граммов для быстрых игр.",
      price: 5490.0,
      oldPrice: null,
      stock: 15,
      isFeatured: false,
      categoryId: categories["peripherals"],
      images: [
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        type: { ru: "Мышь", en: "Mouse" },
        connection: { ru: "2.4 ГГц", en: "2.4 GHz" },
        latency: 1,
        battery: 90,
        weight: 58,
        rgb: true,
        warranty: 12,
      },
    },

    // Аксессуары
    {
      id: "prod-arc-charge-65",
      title: "Arc Charge 65W",
      slug: "arc-charge-65w",
      brand: "Arc",
      badge: ProductBadge.HIT,
      colors: ["#6c63ff", "#facc15"],
      description:
        "Зарядное устройство GaN на 65 Вт заряжает ноутбук, телефон и наушники одновременно.",
      price: 2490.0,
      oldPrice: null,
      stock: 25,
      isFeatured: false,
      categoryId: categories["accessories"],
      images: [
        "https://images.unsplash.com/photo-1609592426508-cc02b662363e?auto=format&fit=crop&w=800&q=80",
      ],
      specs: {
        type: { ru: "Зарядное устройство", en: "Charger" },
        power: 65,
        ports: 3,
        cable: 1.5,
        weight: 140,
        warranty: 12,
      },
    },

    // Софт
    {
      id: "prod-arc-driver-suite",
      title: "Arc Driver Suite Pro",
      slug: "arc-driver-suite-pro",
      brand: "Arc",
      badge: ProductBadge.HIT,
      colors: ["#6c63ff", "#06b6d4"],
      description:
        "Автоматическое обновление драйверов и откат к стабильной версии в один клик.",
      price: 1290.0,
      oldPrice: null,
      stock: 999,
      isFeatured: false,
      categoryId: categories["software"],
      images: [],
      specs: {
        platforms: { ru: "Windows / Linux", en: "Windows / Linux" },
        version: { ru: "4.2", en: "4.2" },
        devices: 3,
        support: 12,
        size: 180,
      },
    },
  ];

  for (const prod of products) {
    await prisma.product.upsert({
      where: { slug: prod.slug },
      update: {
        brand: prod.brand,
        badge: prod.badge,
        colors: prod.colors,
        price: prod.price,
        oldPrice: prod.oldPrice,
        stock: prod.stock,
        specs: prod.specs,
        images: prod.images,
      },
      create: prod,
    });
  }

  // 5. Демо-отзыв на Arc Phone X
  await prisma.review.upsert({
    where: {
      productId_userId: {
        productId: "prod-arc-phone-x",
        userId: demoUser.id,
      },
    },
    update: {},
    create: {
      productId: "prod-arc-phone-x",
      userId: demoUser.id,
      authorName: "Алексей М.",
      rating: 5,
      text: "Экран очень плавный, заряда хватает на полтора дня. Камера в темноте приятно удивила!",
    },
  });

  // 6. Демо-вопрос на Arc Phone X
  const qRecord = await prisma.question.upsert({
    where: { id: "demo-question-1" },
    update: {},
    create: {
      id: "demo-question-1",
      productId: "prod-arc-phone-x",
      userId: demoUser.id,
      authorName: "Сергей Н.",
      text: "Есть ли в комплекте зарядный блок?",
    },
  });

  await prisma.answer.upsert({
    where: { id: "demo-answer-1" },
    update: {},
    create: {
      id: "demo-answer-1",
      questionId: qRecord.id,
      userId: demoUser.id,
      authorName: "Магазин ARCSHOP",
      text: "Да, в комплекте идёт блок питания на 67 Вт и кабель USB-C.",
    },
  });

  console.log(
    "✅ Сидирование успешно завершено! Каталог, отзывы и вопросы добавлены.",
  );
}

main().finally(async () => {
  await prisma.$disconnect();
});
````

## File: src/config/prisma.ts
````typescript
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: [
    { emit: 'stdout', level: 'query' }, // Покажет сырой SQL-запрос
    { emit: 'stdout', level: 'error' }, // Покажет ошибки базы данных
    { emit: 'stdout', level: 'warn' },  // Предупреждения
  ],
});
````

## File: src/middlewares/admin.middleware.ts
````typescript
import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './auth.middleware';

export const adminMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user || req.user.role !== 'ADMIN') {
    return res.status(403).json({
      success: false,
      message: 'Доступ запрещен. Требуются права администратора',
    });
  }
  next();
};
````

## File: src/middlewares/auth.middleware.ts
````typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthPayload {
  userId: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthPayload;
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Токен отсутствует' });
  }

  try {
    const secret = process.env.JWT_ACCESS_SECRET || 'access_secret';
    const decoded = jwt.verify(token, secret) as AuthPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Недействительный токен' });
  }
};
````

## File: src/middlewares/logger.middleware.ts
````typescript
import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, originalUrl } = req;

  // Слушаем окончание ответа
  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;

    // Подсветим статус эмодзи для наглядности
    const icon = status >= 500 ? '❌' : status >= 400 ? '⚠️' : '✅';
    console.log(`${icon} [${new Date().toISOString()}] ${method} ${originalUrl} -> ${status} (${duration}ms)`);
  });

  next();
};

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('💥 КРИТИЧЕСКАЯ ОШИБКА СЕРВЕРА:', {
    message: err.message,
    stack: err.stack,
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Внутренняя ошибка сервера',
  });
};
````

## File: src/middlewares/optional-auth.middleware.ts
````typescript
import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest, AuthPayload } from './auth.middleware';

export const optionalAuthMiddleware = (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next();
  }

  try {
    const secret = process.env.JWT_ACCESS_SECRET || 'dev_access_secret_15m';
    const decoded = jwt.verify(token, secret) as AuthPayload;
    req.user = decoded;
  } catch {
    // Если токен невалидный или просрочен, просто продолжаем как гость
  }

  next();
};
````

## File: src/modules/admin/admin.controller.ts
````typescript
import { Request, Response } from 'express';
import { prisma } from '../../config/prisma';

// Изменение статуса заказа (например: PENDING -> PAID -> SHIPPED -> DELIVERED)
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const orderId = Array.isArray(idParam) ? idParam[0] : idParam;
    const { status } = req.body;

    const validStatuses = ['PENDING', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Некорректный статус заказа' });
    }

    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return res.json({
      success: true,
      message: `Статус заказа обновлен на ${status}`,
      data: order,
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Получение ВСЕХ заказов магазина (для панели администратора)
export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
        items: {
          include: {
            product: {
              select: { id: true, title: true, slug: true },
            },
          },
        },
      },
    });

    return res.json({ success: true, data: orders });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Создание нового товара администратором
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, slug, description, price, oldPrice, stock, images, categoryId, specs, isFeatured } = req.body;

    if (!title || !slug || !price || !categoryId) {
      return res.status(400).json({ success: false, message: 'Укажите title, slug, price и categoryId' });
    }

    const product = await prisma.product.create({
      data: {
        title,
        slug,
        description: description || '',
        price,
        oldPrice: oldPrice || null,
        stock: Number(stock) || 0,
        images: images || [],
        categoryId,
        specs: specs || null,
        isFeatured: Boolean(isFeatured),
      },
    });

    return res.status(201).json({ success: true, data: product });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Удаление товара
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const productId = Array.isArray(idParam) ? idParam[0] : idParam;

    await prisma.product.delete({ where: { id: productId } });
    return res.json({ success: true, message: 'Товар успешно удален' });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/admin/admin.routes.ts
````typescript
import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { adminMiddleware } from '../../middlewares/admin.middleware';
import {
  updateOrderStatus,
  getAllOrders,
  createProduct,
  deleteProduct,
} from './admin.controller';

const router = Router();

// Все роуты админки требуют авторизацию И роль ADMIN
router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/orders', getAllOrders);
router.patch('/orders/:id/status', updateOrderStatus);

router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);

export default router;
````

## File: src/modules/auth/auth.controller.ts
````typescript
import { Request, Response } from 'express';
import * as authService from './auth.service';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 30 * 24 * 60 * 60 * 1000,
};

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: 'Все поля обязательны для заполнения',
      });
    }

    const data = await authService.register({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    res.cookie('refreshToken', data.refreshToken, COOKIE_OPTIONS);
    return res.status(201).json({
      success: true,
      user: data.user,
      accessToken: data.accessToken,
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({
        success: false,
        message: 'Укажите email/телефон и пароль',
      });
    }

    const data = await authService.login({ login, password });

    res.cookie('refreshToken', data.refreshToken, COOKIE_OPTIONS);
    return res.json({
      success: true,
      user: data.user,
      accessToken: data.accessToken,
    });
  } catch (error: any) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;
    const tokens = await authService.refresh(token);

    res.cookie('refreshToken', tokens.refreshToken, COOKIE_OPTIONS);
    return res.json({ success: true, accessToken: tokens.accessToken });
  } catch (error: any) {
    res.clearCookie('refreshToken');
    return res.status(401).json({ success: false, message: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;
    await authService.logout(token);

    res.clearCookie('refreshToken');
    return res.json({ success: true, message: 'Выход выполнен успешно' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logoutAll = async (req: any, res: Response) => {
  try {
    await authService.logoutAll(req.user.userId);

    res.clearCookie('refreshToken');
    return res.json({ success: true, message: 'Все сессии успешно сброшены' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getMe = async (req: any, res: Response) => {
  try {
    const user = await authService.getMe(req.user.userId);
    return res.json({ success: true, user });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

export const changePassword = async (req: any, res: Response) => {
  try {
    const userId = req.user.userId;
    const current = req.body.current || req.body.currentPassword;
    const next = req.body.next || req.body.newPassword;
    const next2 = req.body.next2 || req.body.newPassword2;

    await authService.changePassword(userId, current, next, next2);

    res.clearCookie('refreshToken');
    return res.json({ success: true, message: 'Пароль успешно изменен' });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/auth/auth.routes.ts
````typescript
import { Router } from "express";
import {
  register,
  login,
  refresh,
  logout,
  logoutAll,
  getMe,
  changePassword,
} from "./auth.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

router.post('/change-password', authMiddleware, changePassword);

router.get("/me", authMiddleware, getMe);
router.post("/logout-all", authMiddleware, logoutAll);

export default router;
````

## File: src/modules/auth/auth.service.ts
````typescript
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/prisma';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'dev_access_secret_15m';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret_30d';

const generateTokens = (userId: string, role: string) => {
  const accessToken = jwt.sign({ userId, role }, ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: '30d' });
  return { accessToken, refreshToken };
};

const saveRefreshToken = async (userId: string, token: string) => {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  await prisma.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });
};

interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginDto {
  login: string; // email или телефон
  password: string;
}

export const register = async ({ firstName, lastName, email, phone, password }: RegisterDto) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    if (existingUser.email === email) {
      throw new Error('Пользователь с таким email уже существует');
    }
    throw new Error('Пользователь с таким номером телефона уже существует');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
    },
  });

  const tokens = generateTokens(user.id, user.role);
  await saveRefreshToken(user.id, tokens.refreshToken);

  return { user, ...tokens };
};

export const login = async ({ login, password }: LoginDto) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: login }, { phone: login }],
    },
  });

  if (!user) {
    throw new Error('Неверный логин (email/телефон) или пароль');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Неверный логин (email/телефон) или пароль');
  }

  const tokens = generateTokens(user.id, user.role);
  await saveRefreshToken(user.id, tokens.refreshToken);

  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    ...tokens,
  };
};

export const refresh = async (oldRefreshToken: string) => {
  if (!oldRefreshToken) throw new Error('Refresh токен не передан');

  try {
    jwt.verify(oldRefreshToken, REFRESH_SECRET);
  } catch {
    throw new Error('Недействительный или просроченный refresh токен');
  }

  const tokenInDb = await prisma.refreshToken.findUnique({
    where: { token: oldRefreshToken },
    include: { user: true },
  });

  if (!tokenInDb || tokenInDb.expiresAt < new Date()) {
    if (tokenInDb) await prisma.refreshToken.delete({ where: { id: tokenInDb.id } });
    throw new Error('Сессия завершена');
  }

  await prisma.refreshToken.delete({ where: { id: tokenInDb.id } });

  const tokens = generateTokens(tokenInDb.user.id, tokenInDb.user.role);
  await saveRefreshToken(tokenInDb.user.id, tokens.refreshToken);

  return tokens;
};

export const logout = async (refreshToken: string) => {
  if (!refreshToken) return;
  await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });
};

export const logoutAll = async (userId: string) => {
  await prisma.refreshToken.deleteMany({ where: { userId } });
};

export const getMe = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error('Пользователь не найден');
  }

  return user;
};

export const changePassword = async (
  userId: string,
  currentPass: string,
  nextPass: string,
  next2Pass?: string
) => {
  if (!currentPass || !nextPass) {
    throw new Error('Заполните все поля паролей');
  }

  if (next2Pass && nextPass !== next2Pass) {
    throw new Error('Новые пароли не совпадают');
  }

  if (nextPass.length < 8) {
    throw new Error('Пароль должен быть не короче 8 символов');
  }

  if (currentPass === nextPass) {
    throw new Error('Новый пароль совпадает с текущим');
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new Error('Пользователь не найден');
  }

  const isValid = await bcrypt.compare(currentPass, user.password);
  if (!isValid) {
    throw new Error('Текущий пароль указан неверно');
  }

  const hashedPassword = await bcrypt.hash(nextPass, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  await prisma.refreshToken.deleteMany({ where: { userId } });
};
````

## File: src/modules/cart/cart.controller.ts
````typescript
import { Response } from 'express';
import { AuthenticatedRequest } from '../../middlewares/auth.middleware';
import * as cartService from './cart.service';

export const getCart = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const data = await cartService.getCart(userId);
    return res.json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const addToCart = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не указан productId' });
    }

    await cartService.addToCart(userId, productId, Number(quantity) || 1);
    return res.json({ success: true, message: 'Товар добавлен в корзину' });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const updateQuantity = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const itemIdParam = req.params.itemId;
    const itemId = Array.isArray(itemIdParam) ? itemIdParam[0] : itemIdParam;
    const { quantity } = req.body;

    if (!quantity || isNaN(Number(quantity))) {
      return res.status(400).json({ success: false, message: 'Некорректное количество' });
    }

    await cartService.updateQuantity(userId, itemId, Number(quantity));
    return res.json({ success: true, message: 'Количество обновлено' });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const removeFromCart = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const itemIdParam = req.params.itemId;
    const itemId = Array.isArray(itemIdParam) ? itemIdParam[0] : itemIdParam;

    await cartService.removeFromCart(userId, itemId);
    return res.json({ success: true, message: 'Товар удален из корзины' });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/cart/cart.routes.ts
````typescript
import { Router } from 'express';
import { getCart, addToCart, updateQuantity, removeFromCart } from './cart.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/', getCart);
router.post('/', addToCart);
router.patch('/:itemId', updateQuantity);
router.delete('/:itemId', removeFromCart);

export default router;
````

## File: src/modules/cart/cart.service.ts
````typescript
import { prisma } from '../../config/prisma';

export const getCart = async (userId: string) => {
  const items = await prisma.cartItem.findMany({
    where: { userId },
    include: {
      product: {
        select: {
          id: true,
          title: true,
          slug: true,
          price: true,
          images: true,
          stock: true,
        },
      },
    },
    orderBy: { product: { title: 'asc' } },
  });

  // Преобразуем Decimal в Number и считаем сумму
  const formattedItems = items.map((item) => {
    const price = Number(item.product.price);
    return {
      id: item.id,
      quantity: item.quantity,
      product: {
        ...item.product,
        price,
      },
      subtotal: price * item.quantity,
    };
  });

const totalCount = formattedItems.reduce((acc: number, curr) => acc + curr.quantity, 0);
  const totalPrice = formattedItems.reduce((acc: number, curr) => acc + curr.subtotal, 0);

  return {
    items: formattedItems,
    totalCount,
    totalPrice,
  };
};

export const addToCart = async (userId: string, productId: string, quantity: number = 1) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error('Товар не найден');
  }

  if (product.stock < quantity) {
    throw new Error('Недостаточно товара на складе');
  }

  // upsert: если товар уже в корзине — увеличиваем quantity, если нет — создаем
  return prisma.cartItem.upsert({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
    update: {
      quantity: { increment: quantity },
    },
    create: {
      userId,
      productId,
      quantity,
    },
  });
};

export const updateQuantity = async (userId: string, itemId: string, quantity: number) => {
  if (quantity < 1) {
    throw new Error('Количество не может быть меньше 1');
  }

  const cartItem = await prisma.cartItem.findFirst({
    where: { id: itemId, userId },
    include: { product: true },
  });

  if (!cartItem) {
    throw new Error('Позиция в корзине не найдена');
  }

  if (cartItem.product.stock < quantity) {
    throw new Error('Запрошенное количество превышает остаток на складе');
  }

  return prisma.cartItem.update({
    where: { id: itemId },
    data: { quantity },
  });
};

export const removeFromCart = async (userId: string, itemId: string) => {
  const cartItem = await prisma.cartItem.findFirst({
    where: { id: itemId, userId },
  });

  if (!cartItem) {
    throw new Error('Позиция в корзине не найдена');
  }

  return prisma.cartItem.delete({
    where: { id: itemId },
  });
};
````

## File: src/modules/favorites/favorites.controller.ts
````typescript
import { Response } from 'express';
import { AuthenticatedRequest } from '../../middlewares/auth.middleware';
import * as favoritesService from './favorites.service';

export const getFavorites = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const data = await favoritesService.getFavorites(userId);
    return res.json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleFavorite = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не указан productId' });
    }

    const result = await favoritesService.toggleFavorite(userId, productId);
    return res.json({ success: true, ...result });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/favorites/favorites.routes.ts
````typescript
import { Router } from 'express';
import { getFavorites, toggleFavorite } from './favorites.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/', getFavorites);
router.post('/toggle', toggleFavorite);

export default router;
````

## File: src/modules/favorites/favorites.service.ts
````typescript
import { prisma } from '../../config/prisma';

export const getFavorites = async (userId: string) => {
  const items = await prisma.favorite.findMany({
    where: { userId },
    include: {
      product: {
        select: {
          id: true,
          title: true,
          slug: true,
          price: true,
          images: true,
          stock: true,
        },
      },
    },
    orderBy: { product: { title: 'asc' } },
  });

  return items.map((item) => ({
    id: item.id,
    product: {
      ...item.product,
      price: Number(item.product.price),
    },
  }));
};

export const toggleFavorite = async (userId: string, productId: string) => {
  const existing = await prisma.favorite.findUnique({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
  });

  if (existing) {
    await prisma.favorite.delete({
      where: { id: existing.id },
    });
    return { isFavorite: false, message: 'Товар удален из избранного' };
  }

  // Проверяем существование товара перед добавлением
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    throw new Error('Товар не найден');
  }

  await prisma.favorite.create({
    data: { userId, productId },
  });

  return { isFavorite: true, message: 'Товар добавлен в избранное' };
};
````

## File: src/modules/orders/orders.controller.ts
````typescript
import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/auth.middleware";
import * as ordersService from "./orders.service";

export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { deliveryAddress, contactPhone, comment, items } = req.body;

    // Нормализуем массив items (поддерживаем qty и quantity)
    const normalizedItems = Array.isArray(items)
      ? items.map((i: any) => ({
          productId: i.productId,
          quantity: Number(i.quantity || i.qty) || 1,
        }))
      : undefined;

    const order = await ordersService.createOrder({
      userId,
      deliveryAddress,
      contactPhone,
      comment,
      items: normalizedItems,
    });

    return res.status(201).json({
      success: true,
      ok: true, // Совместимость с фронтендом
      message: "Заказ успешно оформлен",
      order: {
        id: order.id,
        total: Number(order.totalAmount),
        createdAt: order.createdAt,
      },
      data: order,
    });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, ok: false, message: error.message });
  }
};

export const getMyOrders = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const orders = await ordersService.getUserOrders(userId);
    return res.json({ success: true, data: orders });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getPurchasedProducts = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.userId;
    const productIds = await ordersService.getPurchasedProductIds(userId);
    return res.json({ success: true, ok: true, productIds });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrderById = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user!.userId;
    const rawId = req.params.id;
    const orderId = Array.isArray(rawId) ? rawId[0] : rawId;

    const order = await ordersService.getOrderById(userId, orderId);
    return res.json({ success: true, data: order });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

export const cancelOrder = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const rawId = req.params.id;
    const orderId = Array.isArray(rawId) ? rawId[0] : rawId;

    const order = await ordersService.cancelOrder(userId, orderId);
    return res.json({
      success: true,
      message: "Заказ отменен, товары возвращены на склад",
      data: order,
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/orders/orders.routes.ts
````typescript
import { Router } from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  cancelOrder,
  getPurchasedProducts,
} from "./orders.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", createOrder);
router.get("/", getMyOrders);
router.get("/purchased", getPurchasedProducts); // <-- добавили эндпоинт купленных товаров
router.get("/:id", getOrderById);
router.patch("/:id/cancel", cancelOrder);

export default router;
````

## File: src/modules/orders/orders.service.ts
````typescript
import { prisma } from "../../config/prisma";

interface OrderItemInput {
  productId: string;
  quantity: number;
}

interface CreateOrderDto {
  userId: string;
  deliveryAddress?: string;
  contactPhone?: string;
  comment?: string;
  items?: OrderItemInput[];
}

export const createOrder = async ({
  userId,
  deliveryAddress,
  contactPhone,
  comment,
  items: directItems,
}: CreateOrderDto) => {
  return prisma.$transaction(async (tx) => {
    let orderLines: Array<{
      productId: string;
      quantity: number;
      price: any;
      title: string;
    }> = [];

    // Сценарий А: товары переданы напрямую с фронтенда (из localStorage)
    if (directItems && directItems.length > 0) {
      for (const item of directItems) {
        const product = await tx.product.findUnique({
          where: { id: item.productId },
        });
        if (!product) {
          throw new Error(`Товар с ID ${item.productId} не найден`);
        }
        if (product.stock < item.quantity) {
          throw new Error(
            `Недостаточно товара "${product.title}". В наличии: ${product.stock} шт., запрошено: ${item.quantity} шт.`,
          );
        }
        orderLines.push({
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
          title: product.title,
        });
      }
    } else {
      // Сценарий Б: забираем позиции из базы данных (CartItem)
      const cartItems = await tx.cartItem.findMany({
        where: { userId },
        include: { product: true },
      });

      if (cartItems.length === 0) {
        throw new Error("Корзина пуста. Невозможно оформить заказ");
      }

      for (const item of cartItems) {
        if (item.product.stock < item.quantity) {
          throw new Error(
            `Недостаточно товара "${item.product.title}". В наличии: ${item.product.stock} шт., запрошено: ${item.quantity} шт.`,
          );
        }
        orderLines.push({
          productId: item.productId,
          quantity: item.quantity,
          price: item.product.price,
          title: item.product.title,
        });
      }

      // Очищаем серверную корзину
      await tx.cartItem.deleteMany({ where: { userId } });
    }

    const totalAmount = orderLines.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0,
    );

    // Достаем данные пользователя для контактных полей, если они не указаны в запросе
    const user = await tx.user.findUnique({ where: { id: userId } });

    // Создаем заказ со статусом PAID (для учебного проекта покупка сразу считается успешной)
    const order = await tx.order.create({
      data: {
        userId,
        deliveryAddress: deliveryAddress || "Самовывоз / По адресу профиля",
        contactPhone: contactPhone || user?.phone || "+7 (000) 000-00-00",
        comment,
        totalAmount,
        status: "PAID",
        items: {
          create: orderLines.map((line) => ({
            productId: line.productId,
            price: line.price,
            quantity: line.quantity,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                title: true,
                slug: true,
                images: true,
              },
            },
          },
        },
      },
    });

    // Списываем остатки со склада
    for (const line of orderLines) {
      await tx.product.update({
        where: { id: line.productId },
        data: {
          stock: {
            decrement: line.quantity,
          },
        },
      });
    }

    return order;
  });
};

export const getUserOrders = async (userId: string) => {
  return prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          product: {
            select: {
              id: true,
              title: true,
              slug: true,
              images: true,
            },
          },
        },
      },
    },
  });
};

export const getPurchasedProductIds = async (userId: string) => {
  const items = await prisma.orderItem.findMany({
    where: {
      order: {
        userId,
        status: { in: ["PAID", "DELIVERED", "SHIPPED"] },
      },
    },
    select: { productId: true },
  });

  return Array.from(new Set(items.map((i) => i.productId)));
};

export const getOrderById = async (userId: string, orderId: string) => {
  const order = await prisma.order.findFirst({
    where: { id: orderId, userId },
    include: {
      items: {
        include: {
          product: {
            select: {
              id: true,
              title: true,
              slug: true,
              images: true,
            },
          },
        },
      },
    },
  });

  if (!order) {
    throw new Error("Заказ не найден");
  }

  return order;
};

export const cancelOrder = async (userId: string, orderId: string) => {
  return prisma.$transaction(async (tx) => {
    const order = await tx.order.findFirst({
      where: { id: orderId, userId },
      include: { items: true },
    });

    if (!order) {
      throw new Error("Заказ не найден");
    }

    if (order.status === "CANCELLED") {
      throw new Error("Заказ уже отменен");
    }

    if (order.status === "DELIVERED") {
      throw new Error("Нельзя отменить уже доставленный заказ");
    }

    for (const item of order.items) {
      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            increment: item.quantity,
          },
        },
      });
    }

    return tx.order.update({
      where: { id: orderId },
      data: { status: "CANCELLED" },
    });
  });
};
````

## File: src/modules/products/product.controller.ts
````typescript
import { Request, Response } from 'express';
import * as productService from './product.service';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await productService.getAllCategories();
    return res.status(200).json({ success: true, data: categories });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Ошибка получения категорий' });
  }
};

export const getBanners = async (_req: Request, res: Response) => {
  try {
    const banners = await productService.getAllBanners();
    return res.status(200).json({ success: true, data: banners });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Ошибка получения баннеров' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProductsList(req.query);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Ошибка получения каталога' });
  }
};

export const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const slugParam = req.params.slug;
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    if (!slug) {
      return res.status(400).json({ success: false, message: 'Не передан slug' });
    }

    const product = await productService.getProductBySlug(slug);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Товар не найден' });
    }

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Ошибка получения товара' });
  }
};
````

## File: src/modules/products/product.routes.ts
````typescript
import { Router } from 'express';
import {
  getCategories,
  getBanners,
  getProducts,
  getProductBySlug,
} from './product.controller';

const router = Router();

router.get('/categories', getCategories);
router.get('/banners', getBanners);
router.get('/products', getProducts);
router.get('/products/:slug', getProductBySlug);

export default router;
````

## File: src/modules/products/product.service.ts
````typescript
import { prisma } from '../../config/prisma';

export interface GetProductsParams {
  category?: string;
  search?: string;
  page?: string | number;
  limit?: string | number;
  sort?: 'popular' | 'price_asc' | 'price_desc' | 'newest';
}

export const getAllCategories = async () => {
  return prisma.category.findMany({
    orderBy: { order: 'asc' },
    select: {
      id: true,
      name: true,
      slug: true,
      icon: true,
    },
  });
};

export const getAllBanners = async () => {
  return prisma.banner.findMany({
    where: { isActive: true },
    orderBy: { order: 'asc' },
  });
};

export const getProductsList = async (query: GetProductsParams) => {
  const page = Math.max(Number(query.page) || 1, 1);
  const limit = Math.max(Number(query.limit) || 12, 1);
  const skip = (page - 1) * limit;

  type FindManyArgs = NonNullable<Parameters<typeof prisma.product.findMany>[0]>;
  const where: NonNullable<FindManyArgs['where']> = {};

  if (query.category) {
    where.category = { slug: String(query.category) };
  }

  if (query.search) {
    where.OR = [
      { title: { contains: String(query.search), mode: 'insensitive' } },
      { description: { contains: String(query.search), mode: 'insensitive' } },
      { brand: { contains: String(query.search), mode: 'insensitive' } },
    ];
  }

  let orderBy: NonNullable<FindManyArgs['orderBy']> = { createdAt: 'desc' };
  if (query.sort === 'price_asc') {
    orderBy = { price: 'asc' };
  } else if (query.sort === 'price_desc') {
    orderBy = { price: 'desc' };
  } else if (query.sort === 'newest') {
    orderBy = { createdAt: 'desc' };
  }

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        reviews: {
          select: { rating: true },
        },
        _count: {
          select: {
            reviews: true,
            questions: true,
          },
        },
      },
    }),
  ]);

  // Форматируем товары с подсчетом рейтинга
  const data = products.map((prod) => {
    const reviewCount = prod._count.reviews;
    const questionCount = prod._count.questions;
    const totalRatingSum = prod.reviews.reduce((acc: number, curr: { rating: number }) => acc + curr.rating, 0);
    const rating = reviewCount > 0 ? Math.round((totalRatingSum / reviewCount) * 10) / 10 : 0;

    const { reviews, _count, ...rest } = prod;

    return {
      ...rest,
      price: Number(prod.price),
      oldPrice: prod.oldPrice ? Number(prod.oldPrice) : null,
      rating,
      reviewCount,
      questionCount,
    };
  });

  return {
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
    data,
  };
};

export const getProductBySlug = async (slug: string) => {
  const prod = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      reviews: {
        select: { rating: true },
      },
      _count: {
        select: {
          reviews: true,
          questions: true,
        },
      },
    },
  });

  if (!prod) return null;

  const reviewCount = prod._count.reviews;
  const questionCount = prod._count.questions;
  const totalRatingSum = prod.reviews.reduce((acc: number, curr: { rating: number }) => acc + curr.rating, 0);
  const rating = reviewCount > 0 ? Math.round((totalRatingSum / reviewCount) * 10) / 10 : 0;

  const { reviews, _count, ...rest } = prod;

  return {
    ...rest,
    price: Number(prod.price),
    oldPrice: prod.oldPrice ? Number(prod.oldPrice) : null,
    rating,
    reviewCount,
    questionCount,
  };
};
````

## File: src/modules/questions/questions.controller.ts
````typescript
import { Response } from 'express';
import { AuthenticatedRequest } from '../../middlewares/auth.middleware';
import * as questionsService from './questions.service';

export const getProductQuestions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const rawId = req.params.productId;
    const productId = Array.isArray(rawId) ? rawId[0] : rawId;
    const userId = req.user?.userId;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не передан productId' });
    }

    const questions = await questionsService.getProductQuestions(productId, userId);
    return res.json({ success: true, questions });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createQuestion = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const rawId = req.params.productId;
    const productId = Array.isArray(rawId) ? rawId[0] : rawId;
    const { text } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не передан productId' });
    }

    const question = await questionsService.createQuestion(userId, productId, text);
    return res.status(201).json({ success: true, message: 'Вопрос опубликован', data: question });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const createAnswer = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const rawId = req.params.questionId;
    const questionId = Array.isArray(rawId) ? rawId[0] : rawId;
    const { text } = req.body;

    if (!questionId) {
      return res.status(400).json({ success: false, message: 'Не передан questionId' });
    }

    const answer = await questionsService.createAnswer(userId, questionId, text);
    return res.status(201).json({ success: true, message: 'Ответ опубликован', data: answer });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/questions/questions.routes.ts
````typescript
import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { optionalAuthMiddleware } from '../../middlewares/optional-auth.middleware';
import {
  getProductQuestions,
  createQuestion,
  createAnswer,
} from './questions.controller';

const router = Router();

// Получить список вопросов по товару (с проверкой isMine через опциональный токен)
router.get('/products/:productId/questions', optionalAuthMiddleware, getProductQuestions);

// Задать вопрос по товару
router.post('/products/:productId/questions', authMiddleware, createQuestion);

// Ответить на вопрос
router.post('/questions/:questionId/answers', authMiddleware, createAnswer);

export default router;
````

## File: src/modules/questions/questions.service.ts
````typescript
import { prisma } from '../../config/prisma';

export const getProductQuestions = async (productId: string, currentUserId?: string) => {
  const questions = await prisma.question.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
    include: {
      answers: {
        orderBy: { createdAt: 'asc' },
        include: {
          user: {
            select: {
              role: true,
            },
          },
        },
      },
    },
  });

  // Собираем всех пользователей, ответивших на вопросы
  const answerUserIds = Array.from(
    new Set(questions.flatMap((q) => q.answers.map((a) => a.userId)))
  );

  // Проверяем, кто из них покупал данный товар
  const buyers = new Set<string>();
  if (answerUserIds.length > 0) {
    const purchasedRecords = await prisma.orderItem.findMany({
      where: {
        productId,
        order: {
          userId: { in: answerUserIds },
          status: { in: ['PAID', 'DELIVERED', 'SHIPPED'] },
        },
      },
      select: {
        order: {
          select: { userId: true },
        },
      },
    });

    for (const record of purchasedRecords) {
      buyers.add(record.order.userId);
    }
  }

  return questions.map((q) => ({
    id: q.id,
    authorName: q.authorName,
    text: q.text,
    createdAt: q.createdAt,
    isMine: q.userId === currentUserId,
    answers: q.answers.map((a) => ({
      id: a.id,
      authorName: a.authorName,
      text: a.text,
      createdAt: a.createdAt,
      isMine: a.userId === currentUserId,
      isBuyer: buyers.has(a.userId),
      isShop: a.user.role === 'ADMIN',
    })),
  }));
};

export const createQuestion = async (userId: string, productId: string, text: string) => {
  const cleanText = text?.trim();
  if (!cleanText || cleanText.length < 5 || cleanText.length > 500) {
    throw new Error('Текст вопроса должен быть от 5 до 500 символов');
  }

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    throw new Error('Товар не найден');
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const authorName = user ? `${user.firstName} ${user.lastName?.[0] || ''}.` : 'Покупатель';

  return prisma.question.create({
    data: {
      productId,
      userId,
      authorName,
      text: cleanText,
    },
  });
};

export const createAnswer = async (userId: string, questionId: string, text: string) => {
  const cleanText = text?.trim();
  if (!cleanText || cleanText.length < 2 || cleanText.length > 500) {
    throw new Error('Текст ответа должен быть от 2 до 500 символов');
  }

  const question = await prisma.question.findUnique({ where: { id: questionId } });
  if (!question) {
    throw new Error('Вопрос не найден');
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  // Для админов указываем подпись «Магазин ARCSHOP»
  const authorName =
    user?.role === 'ADMIN'
      ? 'Магазин ARCSHOP'
      : user
      ? `${user.firstName} ${user.lastName?.[0] || ''}.`
      : 'Покупатель';

  return prisma.answer.create({
    data: {
      questionId,
      userId,
      authorName,
      text: cleanText,
    },
  });
};
````

## File: src/modules/reviews/reviews.controller.ts
````typescript
import { Response } from 'express';
import { AuthenticatedRequest } from '../../middlewares/auth.middleware';
import * as reviewsService from './reviews.service';

export const getProductReviews = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const rawId = req.params.productId;
    const productId = Array.isArray(rawId) ? rawId[0] : rawId;
    const userId = req.user?.userId;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не передан productId' });
    }

    const data = await reviewsService.getProductReviews(productId, userId);
    return res.json({ success: true, ...data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createReview = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const rawId = req.params.productId;
    const productId = Array.isArray(rawId) ? rawId[0] : rawId;
    const { rating, text } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'Не передан productId' });
    }

    const review = await reviewsService.createReview(userId, productId, Number(rating), text);
    return res.status(201).json({ success: true, message: 'Отзыв добавлен', data: review });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
````

## File: src/modules/reviews/reviews.routes.ts
````typescript
import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { optionalAuthMiddleware } from '../../middlewares/optional-auth.middleware';
import { getProductReviews, createReview } from './reviews.controller';

const router = Router({ mergeParams: true });

// GET доступен всем, но через optionalAuth вычисляется isMine и blocked
router.get('/:productId/reviews', optionalAuthMiddleware, getProductReviews);

// POST только для авторизованных покупателей
router.post('/:productId/reviews', authMiddleware, createReview);

export default router;
````

## File: src/modules/reviews/reviews.service.ts
````typescript
import { prisma } from '../../config/prisma';

export const getProductReviews = async (productId: string, userId?: string) => {
  const reviews = await prisma.review.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
  });

  // Расчет распределения оценок [1 звезда, 2, 3, 4, 5]
  const distribution = [0, 0, 0, 0, 0];
  let sum = 0;

  for (const r of reviews) {
    if (r.rating >= 1 && r.rating <= 5) {
      distribution[r.rating - 1] += 1;
      sum += r.rating;
    }
  }

  const count = reviews.length;
  const rating = count > 0 ? Math.round((sum / count) * 10) / 10 : 0;

  // Определение статуса блокировки для клиента ('login' | 'purchase' | 'reviewed' | null)
  let blocked: 'login' | 'purchase' | 'reviewed' | null = 'login';

  if (userId) {
    const alreadyReviewed = reviews.some((r) => r.userId === userId);
    if (alreadyReviewed) {
      blocked = 'reviewed';
    } else {
      // Проверяем, покупал ли пользователь этот товар
      const hasPurchased = await prisma.orderItem.findFirst({
        where: {
          productId,
          order: {
            userId,
            status: { in: ['PAID', 'DELIVERED', 'SHIPPED'] },
          },
        },
      });

      blocked = hasPurchased ? null : 'purchase';
    }
  }

  return {
    reviews: reviews.map((r) => ({
      id: r.id,
      authorName: r.authorName,
      rating: r.rating,
      text: r.text,
      createdAt: r.createdAt,
      isMine: r.userId === userId,
    })),
    summary: {
      rating,
      count,
      distribution,
    },
    blocked,
  };
};

export const createReview = async (
  userId: string,
  productId: string,
  rating: number,
  text: string
) => {
  if (!rating || rating < 1 || rating > 5) {
    throw new Error('Оценка должна быть целым числом от 1 до 5');
  }

  const cleanText = text?.trim();
  if (!cleanText || cleanText.length < 3 || cleanText.length > 2000) {
    throw new Error('Текст отзыва должен содержать от 3 до 2000 символов');
  }

  // 1. Проверяем, существует ли товар
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    throw new Error('Товар не найден');
  }

  // 2. Проверяем покупку
  const hasPurchased = await prisma.orderItem.findFirst({
    where: {
      productId,
      order: {
        userId,
        status: { in: ['PAID', 'DELIVERED', 'SHIPPED'] },
      },
    },
  });

  if (!hasPurchased) {
    throw new Error('Отзыв можно оставить только после покупки товара');
  }

  // 3. Проверяем дубликат отзыва
  const existingReview = await prisma.review.findUnique({
    where: {
      productId_userId: {
        productId,
        userId,
      },
    },
  });

  if (existingReview) {
    throw new Error('Вы уже оставили отзыв на этот товар');
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const authorName = user ? `${user.firstName} ${user.lastName?.[0] || ''}.` : 'Покупатель';

  return prisma.review.create({
    data: {
      productId,
      userId,
      authorName,
      rating,
      text: cleanText,
    },
  });
};
````

## File: src/app.ts
````typescript
import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './modules/auth/auth.routes';
import cartRoutes from './modules/cart/cart.routes';
import favoritesRoutes from './modules/favorites/favorites.routes';
import orderRoutes from './modules/orders/orders.routes';
import adminRoutes from './modules/admin/admin.routes';
import reviewRoutes from './modules/reviews/reviews.routes';
import questionRoutes from './modules/questions/questions.routes';
import productRoutes from './modules/products/product.routes';

import { requestLogger, errorHandler } from './middlewares/logger.middleware';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Логгер запросов первым
app.use(requestLogger);

// Эндпоинты API v1
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/favorites', favoritesRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/products', reviewRoutes);
app.use('/api/v1', questionRoutes);
app.use('/api/v1', productRoutes);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running smoothly' });
});

// Обработчик ошибок в конце
app.use(errorHandler);

export default app;
````

## File: src/server.ts
````typescript
import dotenv from 'dotenv';
// Считываем переменные из файла .env (порт, пароли)
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
````

## File: .gitignore
````
node_modules
dist
.git
.env
.env.*
npm-debug.log
````

## File: docker-compose.yml
````yaml
services:
  postgres:
    image: postgres:16-alpine
    container_name: arcshop_db
    restart: no
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secretpassword
      POSTGRES_DB: arcshop_db
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

  api:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: arcshop_api
    restart: no
    ports:
      - '5000:5000'
    environment:
      DATABASE_URL: 'postgresql://postgres:secretpassword@postgres:5432/arcshop_db?schema=public'
      PORT: 5000
      JWT_ACCESS_SECRET: 'your_super_secret_access_key'
      JWT_REFRESH_SECRET: 'your_super_secret_refresh_key'
      CLIENT_URL: 'http://localhost:5173'
    depends_on:
      - postgres

volumes:
  postgres_data:
````

## File: Dockerfile
````dockerfile
# 1. Этап сборки (Builder)
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем манифесты зависимостей и схему Prisma
COPY package*.json ./
COPY prisma ./prisma/

# Устанавливаем зависимости и генерируем Prisma Client
RUN npm ci
RUN npx prisma generate

# Копируем исходный код и компилируем TypeScript
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# 2. Этап продакшена (Runner)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копируем манифесты для установки только production-зависимостей
COPY package*.json ./
COPY prisma ./prisma/

# Устанавливаем только runtime зависимости и генерируем Prisma Client под платформу
RUN npm ci --only=production
RUN npx prisma generate

# Копируем скомпилированный код из этапа builder
COPY --from=builder /app/dist ./dist

# Порт приложения
EXPOSE 5000

# Запуск сервера
CMD ["node", "dist/server.js"]
````

## File: endpoints.md
````markdown
Вот полный, структурированный список всех эндпоинтов твоего бэкенда на текущий момент (включая только что добавленный модуль заказов). 

Можешь скопировать этот блок и передать фронтендеру или вставить в свой файл спецификации `API_SPECIFICATION.md`.

---

# ARCSHOP REST API — Полная документация эндпоинтов

* **Базовый URL:** `http://localhost:5000/api/v1`
* **Формат данных:** `JSON`
* **Авторизация:** Заголовок `Authorization: Bearer <accessToken>`
* **Refresh Token:** Управляется автоматически через `httpOnly` Cookie

---

## 1. Авторизация и профиль (`/auth`)

| Метод | URL | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Публичный | Регистрация нового покупателя |
| `POST` | `/auth/login` | Публичный | Вход (по email или номеру телефона) |
| `POST` | `/auth/refresh` | По Cookie | Обновление пары токенов (access/refresh) |
| `POST` | `/auth/logout` | Авторизован / Cookie | Выход из текущей сессии (очистка cookie) |
| `POST` | `/auth/logout-all` | Bearer Token | Сброс всех активных сессий пользователя |
| `GET` | `/auth/me` | Bearer Token | Получение данных текущего пользователя |

<details>
<summary>Примеры тела запросов (Auth)</summary>

**POST `/auth/register`**
```json
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "email": "ivan@example.com",
  "phone": "+79991234567",
  "password": "strongPassword123"
}
```

**POST `/auth/login`**
```json
{
  "login": "ivan@example.com", 
  "password": "strongPassword123"
}
```
*(В поле `login` можно передавать как email, так и телефон)*
</details>

---

## 2. Категории и Баннеры (Главная и Сайдбар)

| Метод | URL | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/categories` | Публичный | Список всех категорий для сайдбара (с иконками) |
| `GET` | `/banners` | Публичный | Список активных баннеров для слайдера |

<details>
<summary>Пример ответа GET /categories</summary>

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-1",
      "name": "Смартфоны",
      "slug": "smartphones",
      "icon": "smartphone"
    }
  ]
}
```
</details>

---

## 3. Каталог товаров (`/products`)

| Метод | URL | Доступ | Описание |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | Публичный | Каталог с пагинацией, поиском и фильтрами |
| `GET` | `/products/:slug` | Публичный | Детальная страница товара по его slug |

**Параметры строки запроса (Query Params) для `GET /products`:**
* `category` *(строка)*: фильтр по категории, например `?category=laptops`
* `search` *(строка)*: поиск по названию/описанию, например `?search=macbook`
* `page` *(число, default: 1)*: номер страницы
* `limit` *(число, default: 12)*: элементов на страницу
* `sort` *(строка)*: сортировка: `price_asc` (дешевле), `price_desc` (дороже), `newest` (новые)

<details>
<summary>Пример ответа GET /products</summary>

```json
{
  "success": true,
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 12,
    "totalPages": 4
  },
  "data": [
    {
      "id": "prod-uuid",
      "title": "MacBook Air M2",
      "slug": "macbook-air-m2",
      "price": 115000.00,
      "oldPrice": 125000.00,
      "stock": 8,
      "images": ["https://..."],
      "category": {
        "id": "cat-uuid",
        "name": "Ноутбуки",
        "slug": "laptops"
      }
    }
  ]
}
```
</details>

---

## 4. Корзина (`/cart`)

*Все эндпоинты требуют заголовок `Authorization: Bearer <accessToken>`*

| Метод | URL | Описание |
| :--- | :--- | :--- |
| `GET` | `/cart` | Получить корзину пользователя (с подсчетом итоговой цены) |
| `POST` | `/cart` | Добавить товар в корзину (или увеличить кол-во) |
| `PATCH` | `/cart/:itemId` | Изменить количество конкретной позиции |
| `DELETE` | `/cart/:itemId` | Удалить позицию из корзины |

<details>
<summary>Примеры запросов и ответов (Cart)</summary>

**POST `/cart`**
```json
{
  "productId": "prod-uuid-1",
  "quantity": 2
}
```

**PATCH `/cart/:itemId`**
```json
{
  "quantity": 3
}
```

**Пример ответа GET `/cart`:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "cart-item-uuid",
        "quantity": 2,
        "product": {
          "id": "prod-uuid-1",
          "title": "MacBook Air M2",
          "slug": "macbook-air-m2",
          "price": 115000,
          "images": ["..."],
          "stock": 8
        },
        "subtotal": 230000
      }
    ],
    "totalCount": 2,
    "totalPrice": 230000
  }
}
```
</details>

---

## 5. Избранное (`/favorites`)

*Все эндпоинты требуют заголовок `Authorization: Bearer <accessToken>`*

| Метод | URL | Описание |
| :--- | :--- | :--- |
| `GET` | `/favorites` | Получить список всех избранных товаров |
| `POST` | `/favorites/toggle` | Добавить/удалить товар из избранного (переключатель) |

<details>
<summary>Пример работы POST /favorites/toggle</summary>

**Тело запроса:**
```json
{
  "productId": "prod-uuid-1"
}
```

**Ответ (если добавили):**
```json
{
  "success": true,
  "isFavorite": true,
  "message": "Товар добавлен в избранное"
}
```
*(При повторном вызове вернет `"isFavorite": false` и удалит товар из базы)*
</details>

---

## 6. Заказы (`/orders`)

*Все эндпоинты требуют заголовок `Authorization: Bearer <accessToken>`*

| Метод | URL | Описание |
| :--- | :--- | :--- |
| `POST` | `/orders` | **Оформить заказ из корзины** (с проверкой и списанием остатков) |
| `GET` | `/orders` | История всех заказов текущего пользователя |
| `GET` | `/orders/:id` | Детальная информация по конкретному заказу |
| `PATCH` | `/orders/:id/cancel` | Отменить заказ (возвращает товары обратно на склад) |

<details>
<summary>Примеры запросов и ответов (Orders)</summary>

**POST `/orders` (Оформление заказа):**
```json
{
  "deliveryAddress": "г. Москва, ул. Ленина, д. 10, кв. 42",
  "contactPhone": "+79991234567",
  "comment": "Позвонить за час до доставки"
}
```

**Ответ (201 Created):**
```json
{
  "success": true,
  "message": "Заказ успешно оформлен",
  "data": {
    "id": "order-uuid-1",
    "userId": "user-uuid-1",
    "status": "PENDING",
    "totalAmount": "230000.00",
    "deliveryAddress": "г. Москва, ул. Ленина, д. 10, кв. 42",
    "contactPhone": "+79991234567",
    "comment": "Позвонить за час до доставки",
    "createdAt": "2026-03-31T12:00:00.000Z",
    "items": [
      {
        "id": "item-uuid",
        "productId": "prod-uuid-1",
        "price": "115000.00",
        "quantity": 2,
        "product": {
          "id": "prod-uuid-1",
          "title": "MacBook Air M2",
          "slug": "macbook-air-m2",
          "images": ["..."]
        }
      }
    ]
  }
}
```

**Возможные статусы заказа (`status`):**
* `PENDING` — оформлен, ожидает оплаты/обработки
* `PAID` — оплачен
* `SHIPPED` — передан курьеру/в доставку
* `DELIVERED` — доставлен покупателю
* `CANCELLED` — отменен
</details>

---

## 7. Системные

| Метод | URL | Описание |
| :--- | :--- | :--- |
| `GET` | `/health` | Проверка жизнеспособности сервера (`status: ok`) |
````

## File: package.json
````json
{
  "name": "tech-store-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "prisma:seed": "tsx prisma/seed.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "@prisma/client": "^6.19.3",
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.6",
    "dotenv": "^18.0.5",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "zod": "^4.6.5"
  },
  "devDependencies": {
    "@types/bcrypt": "^6.0.0",
    "@types/cookie-parser": "^1.4.10",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^26.6.4",
    "prisma": "^6.19.3",
    "tsx": "^4.23.15",
    "typescript": "^7.0.2"
  }
}
````

## File: README.md
````markdown
# Техническая документация (Backend Dev Notes)

Внутренняя памятка по архитектуре, конфигурации окружения и командам обслуживания бэкенда ARCSHOP.

---

## 1. Конфигурация окружения (`.env`)

Создать файл `.env` в корне проекта:

```env
# HTTP Сервер
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# База данных PostgreSQL
# ВНИМАНИЕ: Для запуска ВНУТРИ Docker Compose используется хост 'postgres'
DATABASE_URL="postgresql://postgres:secretpassword@postgres:5432/arcshop_db?schema=public"

# Если запускать Prisma/скрипты ЛОКАЛЬНО с хост-машины (без docker exec), менять хост на localhost:
# DATABASE_URL="postgresql://postgres:secretpassword@localhost:5432/arcshop_db?schema=public"

# JWT Секреты
JWT_ACCESS_SECRET="arcshop_super_secret_access_jwt_key_2026"
JWT_REFRESH_SECRET="arcshop_super_secret_refresh_jwt_key_2026"

```

---

## 2. Структура проекта и назначение файлов

```text
.
├── docker-compose.yml              # Описание сервисов (postgres, api) и сети
├── Dockerfile                      # Multi-stage сборка Node.js приложения
├── .dockerignore                   # Исключения контекста сборки Docker
├── .env                            # Переменные окружения (локальные секреты)
├── package.json                    # Скрипты и зависимости Node.js
├── tsconfig.json                   # Настройки компилятора TypeScript
├── prisma/
│   ├── schema.prisma               # Схема моделей PostgreSQL (User, RefreshToken, Category, Product...)
│   ├── seed.ts                     # Исходный скрипт сидирования на TS
│   └── seed.js                     # Чистый JS-скрипт сидирования (для выполнения внутри контейнера)
└── src/
    ├── server.ts                   # Точка входа: чтение PORT и вызов app.listen
    ├── app.ts                      # Express-инстанс: cors, cookies, json, подключение роутеров
    ├── config/
    │   └── prisma.ts               # Экземпляр PrismaClient (Singleton)
    ├── middlewares/
    │   └── auth.middleware.ts      # Проверка Bearer токена (authMiddleware)
    └── modules/
        ├── auth/                   # Модуль авторизации
        │   ├── auth.controller.ts  # Обработка register, login, refresh, me, logout
        │   ├── auth.routes.ts      # Маршруты /api/v1/auth/*
        │   └── auth.service.ts     # Бизнес-логика, хэширование паролей, работа с RefreshToken
        └── products/               # Модуль каталога и витрины
            ├── product.controller.ts # Хэндлеры для categories, banners, products
            ├── product.routes.ts     # Маршруты /api/v1/* (categories, banners, products)
            └── product.service.ts    # Запросы к БД: фильтрация, поиск, пагинация, категории

```

---

## 3. Модели базы данных (Ключевые сущности)

* **`User`**: пользователь магазина (`id`, `email`, `phone`, `password`, `role`).
* **`RefreshToken`**: токены обновления сессий (`token`, `userId`, `expiresAt`) со связью `Cascade` при удалении пользователя.
* **`Category`**: категории сайдбара (`name`, `slug`, `icon`, `order`).


* **`Banner`**: рекламные баннеры на главной (`title`, `imageUrl`, `link`, `isActive`, `order`).


* **`Product`**: карточки товаров (`title`, `slug`, `price`, `stock`, `images`, `specs` (JSON), `categoryId`).
* **`CartItem` & `Favorite**`: корзина и избранное с уникальными индексами `@@unique([userId, productId])`.



---

## 4. Шпаргалка по Docker & Prisma

### Управление контейнерами

```bash
# Сборка и фоновый запуск всех сервисов
docker compose up --build -d

# Просмотр статуса контейнеров
docker compose ps

# Просмотр логов бэкенда в реальном времени
docker compose logs -f api

# Остановка контейнеров
docker compose down

# Остановка с полным удалением данных базы (volumes)
docker compose down -v

```

### Команды обслуживания внутри Docker-контейнера

```bash
# Синхронизация структуры БД со схемой Prisma без создания миграций
docker compose exec api npx prisma db push

# Применение зафиксированных миграций
docker compose exec api npx prisma migrate deploy

# Генерация Prisma Client
docker compose exec api npx prisma generate

# Запуск начального наполнения БД (категории сайдбара и баннер)
docker compose exec api node prisma/seed.js

```

---

## 5. Быстрая проверка API

```bash
# Проверка жизнеспособности сервера
curl http://localhost:5000/health

# Проверка категорий сайдбара
curl http://localhost:5000/api/v1/categories

# Проверка каталога товаров
curl http://localhost:5000/api/v1/products

```
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "types": ["node"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*", "prisma/**/*"],
  "exclude": ["node_modules", "dist", "prisma"]
}
````
