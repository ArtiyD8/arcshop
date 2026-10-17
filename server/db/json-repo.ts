import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { SEED_ANSWERS, SEED_PRODUCTS, SEED_QUESTIONS, SEED_REVIEWS } from './seed.ts';
import type {
  AnswerRow,
  DbData,
  NewUser,
  OrderRow,
  ProductRow,
  ProductStats,
  QuestionRow,
  QuestionWithAnswers,
  Repo,
  ReviewRow,
  UserRow,
} from './types.ts';

const emptyDb = (): DbData => ({
  users: [],
  products: [],
  reviews: [],
  questions: [],
  answers: [],
  orders: [],
  orderItems: [],
});

/** Пользователи прошлой версии лежали в server/data/users.json — подхватываем их при первом запуске */
function importLegacyUsers(dir: string): UserRow[] {
  const legacy = path.join(dir, 'users.json');
  if (!existsSync(legacy)) return [];
  try {
    const rows = JSON.parse(readFileSync(legacy, 'utf8')) as Array<Omit<UserRow, 'id' | 'createdAt'>>;
    return rows.map((u) => ({ ...u, id: randomUUID(), createdAt: new Date().toISOString() }));
  } catch {
    return [];
  }
}

/**
 * Реализация Repo на JSON-файле: данные целиком в памяти, каждая запись сохраняется атомарно
 * (временный файл + rename) и идёт через очередь, чтобы параллельные запросы не портили файл.
 * Для продакшена замените на реализацию поверх SQL (см. schema.sql).
 */
export function createJsonRepo(dir: string): Repo {
  const file = path.join(dir, 'db.json');
  let queue: Promise<unknown> = Promise.resolve();

  const load = (): DbData => {
    if (existsSync(file)) {
      try {
        return { ...emptyDb(), ...(JSON.parse(readFileSync(file, 'utf8')) as Partial<DbData>) };
      } catch {
        // повреждённый файл не затираем молча
        renameSync(file, `${file}.broken-${Date.now()}`);
      }
    }
    return { ...emptyDb(), users: importLegacyUsers(dir) };
  };

  const data = load();
  let dirty = false;
  if (data.products.length === 0) {
    data.products = SEED_PRODUCTS;
    data.reviews = [...data.reviews, ...SEED_REVIEWS];
    data.questions = [...data.questions, ...SEED_QUESTIONS];
    data.answers = [...data.answers, ...SEED_ANSWERS];
    dirty = true;
  }

  const persist = (): void => {
    mkdirSync(dir, { recursive: true });
    const tmp = `${file}.tmp`;
    writeFileSync(tmp, JSON.stringify(data, null, 2), { mode: 0o600 });
    renameSync(tmp, file);
  };
  if (dirty || !existsSync(file)) persist();

  /** Выполняет изменение данных последовательно и сохраняет результат на диск */
  const mutate = <T>(fn: () => T): Promise<T> => {
    const job = queue.then(() => {
      const result = fn();
      persist();
      return result;
    });
    queue = job.catch(() => undefined);
    return job;
  };

  const now = (): string => new Date().toISOString();
  const lower = (s: string): string => s.toLowerCase();

  return {
    // ---------- пользователи ----------
    findUserById: async (id) => data.users.find((u) => u.id === id),
    findUserByIdentifier: async (identifier) => {
      const id = lower(identifier);
      return data.users.find((u) => lower(u.login) === id || lower(u.email) === id);
    },
    createUser: (input: NewUser) =>
      mutate(() => {
        if (data.users.some((u) => lower(u.login) === lower(input.login))) return { ok: false as const, error: 'login' as const };
        if (data.users.some((u) => lower(u.email) === lower(input.email))) return { ok: false as const, error: 'email' as const };
        const user: UserRow = { ...input, id: randomUUID(), createdAt: now() };
        data.users.push(user);
        return { ok: true as const, user };
      }),
    updateUserPassword: (id, salt, hash) =>
      mutate(() => {
        const user = data.users.find((u) => u.id === id);
        if (user) Object.assign(user, { salt, hash });
      }),

    // ---------- каталог ----------
    listProducts: async () => data.products,
    getProduct: async (id) => data.products.find((p) => p.id === id),
    productStats: async () => {
      const stats = new Map<string, ProductStats>();
      for (const p of data.products) {
        const reviews = data.reviews.filter((r) => r.productId === p.id);
        const avg = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
        stats.set(p.id, {
          rating: Math.round(avg * 10) / 10,
          reviewCount: reviews.length,
          questionCount: data.questions.filter((q) => q.productId === p.id).length,
        });
      }
      return stats;
    },

    // ---------- отзывы ----------
    listReviews: async (productId) =>
      data.reviews.filter((r) => r.productId === productId).sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    addReview: (input) =>
      mutate(() => {
        if (data.reviews.some((r) => r.productId === input.productId && r.userId === input.userId)) return null;
        const row: ReviewRow = { ...input, id: randomUUID(), createdAt: now() };
        data.reviews.push(row);
        return row;
      }),

    // ---------- вопросы ----------
    listQuestions: async (productId): Promise<QuestionWithAnswers[]> =>
      data.questions
        .filter((q) => q.productId === productId)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((q) => ({
          ...q,
          answers: data.answers.filter((a) => a.questionId === q.id).sort((a, b) => a.createdAt.localeCompare(b.createdAt)),
        })),
    addQuestion: (input) =>
      mutate(() => {
        const row: QuestionRow = { ...input, id: randomUUID(), createdAt: now() };
        data.questions.push(row);
        return row;
      }),
    addAnswer: (input) =>
      mutate(() => {
        if (!data.questions.some((q) => q.id === input.questionId)) return null;
        const row: AnswerRow = { ...input, id: randomUUID(), createdAt: now() };
        data.answers.push(row);
        return row;
      }),

    // ---------- заказы ----------
    createOrder: (userId, items) =>
      mutate((): OrderRow | null => {
        const merged = new Map<string, number>();
        for (const item of items) merged.set(item.productId, Math.min((merged.get(item.productId) ?? 0) + item.qty, 99));

        const lines: Array<{ product: ProductRow; qty: number }> = [];
        for (const [productId, qty] of merged) {
          const product = data.products.find((p) => p.id === productId);
          if (!product) return null;
          lines.push({ product, qty });
        }
        if (lines.length === 0) return null;

        const order: OrderRow = {
          id: randomUUID(),
          userId,
          total: lines.reduce((sum, l) => sum + l.product.price * l.qty, 0),
          status: 'paid',
          createdAt: now(),
        };
        data.orders.push(order);
        for (const l of lines) {
          data.orderItems.push({ orderId: order.id, productId: l.product.id, qty: l.qty, price: l.product.price });
        }
        return order;
      }),
    hasPurchased: async (userId, productId) => {
      const mine = new Set(data.orders.filter((o) => o.userId === userId).map((o) => o.id));
      return data.orderItems.some((i) => i.productId === productId && mine.has(i.orderId));
    },
    purchasedProductIds: async (userId) => {
      const mine = new Set(data.orders.filter((o) => o.userId === userId).map((o) => o.id));
      return [...new Set(data.orderItems.filter((i) => mine.has(i.orderId)).map((i) => i.productId))];
    },
  };
}
