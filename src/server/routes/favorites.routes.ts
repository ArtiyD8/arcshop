import { Router } from 'express';
import type { Response } from 'express';
import { db } from '../db';
import { authMiddleware, type AuthenticatedRequest } from '../auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/', (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.userId;
  const userFavs = db.favorites.filter((f) => f.userId === userId);

  const items = userFavs.map((fav) => {
    const product = db.products.find((p) => p.id === fav.productId);
    return {
      id: fav.id,
      productId: fav.productId,
      product: product
        ? {
            id: product.id,
            title: product.title,
            name: product.name,
            slug: product.slug,
            price: product.price,
            images: product.images,
            image: product.image,
            stock: product.stock,
          }
        : null,
    };
  });

  return res.json({ success: true, ok: true, data: items, favorites: items });
});

router.post('/toggle', (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, ok: false, message: 'Не указан productId' });
    }

    const product = db.products.find((p) => p.id === productId || p.slug === productId);
    if (!product) {
      return res.status(404).json({ success: false, ok: false, message: 'Товар не найден' });
    }

    const existingIdx = db.favorites.findIndex((f) => f.userId === userId && f.productId === product.id);

    if (existingIdx >= 0) {
      db.favorites.splice(existingIdx, 1);
      db.save();
      return res.json({ success: true, ok: true, isFavorite: false, message: 'Товар удален из избранного' });
    } else {
      db.favorites.push({
        id: 'fav-' + Math.random().toString(36).slice(2, 10),
        userId,
        productId: product.id,
      });
      db.save();
      return res.json({ success: true, ok: true, isFavorite: true, message: 'Товар добавлен в избранное' });
    }
  } catch (error: any) {
    return res.status(400).json({ success: false, ok: false, message: error.message });
  }
});

router.delete('/:productId', (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.userId;
  const prodId = req.params.productId;

  const idx = db.favorites.findIndex((f) => f.userId === userId && (f.productId === prodId || f.id === prodId));
  if (idx >= 0) {
    db.favorites.splice(idx, 1);
    db.save();
  }

  return res.json({ success: true, ok: true, isFavorite: false, message: 'Товар удален из избранного' });
});

router.delete('/', (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.userId;
  const remaining = db.favorites.filter((f) => f.userId !== userId);
  db.favorites.length = 0;
  db.favorites.push(...remaining);
  db.save();

  return res.json({ success: true, ok: true, message: 'Список избранного очищен' });
});

export default router;
