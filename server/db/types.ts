import type { Category, L10n, SpecValue } from '../../src/shared/specs.ts';
import type { Badge } from '../../src/shared/types.ts';

/** Строки таблиц (см. schema.sql) */
export interface UserRow {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  login: string;
  email: string;
  salt: string;
  hash: string;
  createdAt: string;
}

export interface ProductRow {
  id: string;
  category: Category;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: Badge;
  colors: [string, string];
  image?: string;
  description: L10n;
  specs: Record<string, SpecValue>;
  createdAt: string;
}

export interface ReviewRow {
  id: string;
  productId: string;
  userId: string;
  authorName: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface QuestionRow {
  id: string;
  productId: string;
  userId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

export interface AnswerRow {
  id: string;
  questionId: string;
  userId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

export interface OrderRow {
  id: string;
  userId: string;
  total: number;
  status: 'paid';
  createdAt: string;
}

export interface OrderItemRow {
  orderId: string;
  productId: string;
  qty: number;
  price: number;
}

export interface DbData {
  users: UserRow[];
  products: ProductRow[];
  reviews: ReviewRow[];
  questions: QuestionRow[];
  answers: AnswerRow[];
  orders: OrderRow[];
  orderItems: OrderItemRow[];
}

export type NewUser = Omit<UserRow, 'id' | 'createdAt'>;

export interface ProductStats {
  rating: number;
  reviewCount: number;
  questionCount: number;
}

export interface QuestionWithAnswers extends QuestionRow {
  answers: AnswerRow[];
}

/**
 * Единственная точка доступа к данным. Сейчас реализована поверх JSON-файла (json-repo.ts);
 * для SQL-базы нужно написать другую реализацию этого же интерфейса — остальной код не меняется.
 */
export interface Repo {
  // пользователи
  findUserById(id: string): Promise<UserRow | undefined>;
  findUserByIdentifier(identifier: string): Promise<UserRow | undefined>;
  createUser(data: NewUser): Promise<{ ok: true; user: UserRow } | { ok: false; error: 'login' | 'email' }>;
  updateUserPassword(id: string, salt: string, hash: string): Promise<void>;

  // каталог
  listProducts(): Promise<ProductRow[]>;
  getProduct(id: string): Promise<ProductRow | undefined>;
  productStats(): Promise<Map<string, ProductStats>>;

  // отзывы
  listReviews(productId: string): Promise<ReviewRow[]>;
  /** null — отзыв от этого пользователя на этот товар уже есть */
  addReview(data: Omit<ReviewRow, 'id' | 'createdAt'>): Promise<ReviewRow | null>;

  // вопросы и ответы
  listQuestions(productId: string): Promise<QuestionWithAnswers[]>;
  addQuestion(data: Omit<QuestionRow, 'id' | 'createdAt'>): Promise<QuestionRow>;
  /** null — вопроса не существует */
  addAnswer(data: Omit<AnswerRow, 'id' | 'createdAt'>): Promise<AnswerRow | null>;

  // заказы
  /** null — в заказе есть несуществующий товар. Цены берутся из каталога, а не от клиента. */
  createOrder(userId: string, items: Array<{ productId: string; qty: number }>): Promise<OrderRow | null>;
  hasPurchased(userId: string, productId: string): Promise<boolean>;
  purchasedProductIds(userId: string): Promise<string[]>;
}
