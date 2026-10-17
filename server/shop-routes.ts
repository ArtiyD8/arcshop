import { fail, ok, str } from './lib/http.ts';
import type { Route } from './lib/http.ts';
import type { ProductRow, ProductStats, Repo, UserRow } from './db/types.ts';
import type { Product, Review, ReviewBlock, ReviewSummary } from '../src/shared/types.ts';

const shortName = (u: UserRow): string => `${u.firstName} ${u.lastName.charAt(0).toUpperCase()}.`;

const toProduct = (p: ProductRow, stats?: ProductStats): Product => ({
  id: p.id,
  category: p.category,
  brand: p.brand,
  name: p.name,
  price: p.price,
  oldPrice: p.oldPrice,
  badge: p.badge,
  colors: p.colors,
  image: p.image,
  description: p.description,
  specs: p.specs,
  rating: stats?.rating ?? 0,
  reviewCount: stats?.reviewCount ?? 0,
  questionCount: stats?.questionCount ?? 0,
});

export function shopRoutes(repo: Repo): Route[] {
  return [
    // ---------- каталог (публичный) ----------
    {
      method: 'GET',
      pattern: '/products',
      handler: async () => {
        const [products, stats] = await Promise.all([repo.listProducts(), repo.productStats()]);
        return ok({ products: products.map((p) => toProduct(p, stats.get(p.id))) });
      },
    },

    // ---------- отзывы: читать может каждый, писать — только покупатель ----------
    {
      method: 'GET',
      pattern: '/products/:id/reviews',
      handler: async ({ params, userId }) => {
        const product = await repo.getProduct(params.id);
        if (!product) return fail(404, 'err.notFound');
        const rows = await repo.listReviews(product.id);

        const summary: ReviewSummary = { rating: 0, count: rows.length, distribution: [0, 0, 0, 0, 0] };
        for (const r of rows) summary.distribution[r.rating - 1] += 1;
        if (rows.length) summary.rating = Math.round((rows.reduce((s, r) => s + r.rating, 0) / rows.length) * 10) / 10;

        let blocked: ReviewBlock = 'login';
        if (userId) {
          if (rows.some((r) => r.userId === userId)) blocked = 'reviewed';
          else blocked = (await repo.hasPurchased(userId, product.id)) ? null : 'purchase';
        }
        const reviews: Review[] = rows.map((r) => ({
          id: r.id,
          authorName: r.authorName,
          rating: r.rating,
          text: r.text,
          createdAt: r.createdAt,
          isMine: r.userId === userId,
        }));
        return ok({ reviews, summary, blocked });
      },
    },
    {
      method: 'POST',
      pattern: '/products/:id/reviews',
      auth: true,
      handler: async ({ params, body, userId }) => {
        const user = userId ? await repo.findUserById(userId) : undefined;
        const product = await repo.getProduct(params.id);
        if (!user) return fail(401, 'err.notAuthorized');
        if (!product) return fail(404, 'err.notFound');

        // главное правило: отзыв доступен только тому, кто купил этот товар
        if (!(await repo.hasPurchased(user.id, product.id))) return fail(403, 'err.reviewNeedsPurchase');

        const rating = body.rating;
        const text = str(body, 'text').trim();
        if (typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) return fail(400, 'err.reviewInvalid');
        if (text.length < 3 || text.length > 2000) return fail(400, 'err.reviewInvalid');

        const row = await repo.addReview({ productId: product.id, userId: user.id, authorName: shortName(user), rating, text });
        return row ? ok() : fail(409, 'err.alreadyReviewed');
      },
    },

    // ---------- вопросы по товару: спрашивать и отвечать могут вошедшие пользователи ----------
    {
      method: 'GET',
      pattern: '/products/:id/questions',
      handler: async ({ params, userId }) => {
        const product = await repo.getProduct(params.id);
        if (!product) return fail(404, 'err.notFound');
        const rows = await repo.listQuestions(product.id);
        const buyers = new Set<string>();
        for (const q of rows) {
          for (const a of q.answers) {
            if (a.userId !== 'seed' && (await repo.hasPurchased(a.userId, product.id))) buyers.add(a.userId);
          }
        }
        return ok({
          questions: rows.map((q) => ({
            id: q.id,
            authorName: q.authorName,
            text: q.text,
            createdAt: q.createdAt,
            isMine: q.userId === userId,
            answers: q.answers.map((a) => ({
              id: a.id,
              authorName: a.authorName,
              text: a.text,
              createdAt: a.createdAt,
              isMine: a.userId === userId,
              isBuyer: buyers.has(a.userId),
              isShop: a.userId === 'seed' && a.authorName.startsWith('Магазин'),
            })),
          })),
        });
      },
    },
    {
      method: 'POST',
      pattern: '/products/:id/questions',
      auth: true,
      handler: async ({ params, body, userId }) => {
        const user = userId ? await repo.findUserById(userId) : undefined;
        const product = await repo.getProduct(params.id);
        if (!user) return fail(401, 'err.notAuthorized');
        if (!product) return fail(404, 'err.notFound');
        const text = str(body, 'text').trim();
        if (text.length < 5 || text.length > 500) return fail(400, 'err.questionInvalid');
        await repo.addQuestion({ productId: product.id, userId: user.id, authorName: shortName(user), text });
        return ok();
      },
    },
    {
      method: 'POST',
      pattern: '/questions/:id/answers',
      auth: true,
      handler: async ({ params, body, userId }) => {
        const user = userId ? await repo.findUserById(userId) : undefined;
        if (!user) return fail(401, 'err.notAuthorized');
        const text = str(body, 'text').trim();
        if (text.length < 2 || text.length > 500) return fail(400, 'err.questionInvalid');
        const row = await repo.addAnswer({ questionId: params.id, userId: user.id, authorName: shortName(user), text });
        return row ? ok() : fail(404, 'err.notFound');
      },
    },

    // ---------- заказы ----------
    {
      method: 'POST',
      pattern: '/orders',
      auth: true,
      handler: async ({ body, userId }) => {
        if (!userId) return fail(401, 'err.notAuthorized');
        const raw = body.items;
        if (!Array.isArray(raw) || raw.length === 0 || raw.length > 50) return fail(400, 'err.orderInvalid');

        const items: Array<{ productId: string; qty: number }> = [];
        for (const entry of raw as unknown[]) {
          const e = entry as { productId?: unknown; qty?: unknown };
          if (typeof e?.productId !== 'string' || typeof e.qty !== 'number' || !Number.isInteger(e.qty) || e.qty < 1 || e.qty > 99) {
            return fail(400, 'err.orderInvalid');
          }
          items.push({ productId: e.productId, qty: e.qty });
        }
        // цены берутся из каталога на сервере, значения от клиента не учитываются
        const order = await repo.createOrder(userId, items);
        return order ? ok({ order: { id: order.id, total: order.total, createdAt: order.createdAt } }) : fail(400, 'err.orderInvalid');
      },
    },
    {
      method: 'GET',
      pattern: '/orders/purchased',
      auth: true,
      handler: async ({ userId }) => ok({ productIds: userId ? await repo.purchasedProductIds(userId) : [] }),
    },
  ];
}
