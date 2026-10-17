import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useCatalog } from './catalog-context';
import type { TranslationKey } from './i18n';
import { apiPost } from './lib/api';
import type { OrderSummary, Product } from './shared/types';

export interface CartItem {
  product: Product;
  qty: number;
}

/** Сообщение чата: либо текст пользователя, либо ключ перевода (ответ поддержки) */
export interface ChatMessage {
  id: number;
  from: 'me' | 'support';
  text?: string;
  key?: TranslationKey;
}

export const MAX_COMPARE = 4;

interface ShopValue {
  favorites: Product[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;

  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  /** оформляет заказ из корзины; цены считает сервер */
  checkout: () => Promise<{ ok: true; order: OrderSummary } | { ok: false; error: TranslationKey }>;

  /** товары из корзины, отмеченные для сравнения (все одной категории) */
  compareIds: string[];
  toggleCompare: (id: string) => void;

  messages: ChatMessage[];
  sendMessage: (text: string) => void;
}

const ShopContext = createContext<ShopValue | null>(null);

const FAV_KEY = 'arcshop:favorites';
const CART_KEY = 'arcshop:cart';

function readStored<T>(key: string, parse: (raw: unknown) => T, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? parse(JSON.parse(raw)) : fallback;
  } catch {
    return fallback;
  }
}

const parseIds = (raw: unknown): string[] =>
  Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : [];

const parseCart = (raw: unknown): Array<{ id: string; qty: number }> =>
  Array.isArray(raw)
    ? raw.flatMap((x: { id?: unknown; qty?: unknown }) =>
        typeof x?.id === 'string' && typeof x.qty === 'number' && x.qty >= 1 ? [{ id: x.id, qty: Math.min(Math.floor(x.qty), 99) }] : [],
      )
    : [];

export function ShopProvider({ children }: { children: ReactNode }) {
  const { byId } = useCatalog();
  // В корзине и избранном лежат только id: данные о товаре всегда берутся из актуального каталога
  const [favIds, setFavIds] = useState<string[]>(() => readStored(FAV_KEY, parseIds, []));
  const [cartLines, setCartLines] = useState(() => readStored(CART_KEY, parseCart, []));
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, from: 'support', key: 'chat.greeting' }]);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  // корзина и избранное сохраняются в браузере (это не секретные данные)
  useEffect(() => {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favIds));
      localStorage.setItem(CART_KEY, JSON.stringify(cartLines));
    } catch {
      /* storage unavailable */
    }
  }, [favIds, cartLines]);

  const favorites = useMemo(() => favIds.flatMap((id) => byId.get(id) ?? []), [favIds, byId]);
  const cart = useMemo<CartItem[]>(
    () => cartLines.flatMap((line) => (byId.has(line.id) ? [{ product: byId.get(line.id) as Product, qty: line.qty }] : [])),
    [cartLines, byId],
  );

  const toggleFavorite = useCallback(
    (id: string) => setFavIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id])),
    [],
  );
  const isFavorite = useCallback((id: string) => favIds.includes(id), [favIds]);

  const addToCart = useCallback((id: string) => {
    setCartLines((lines) =>
      lines.some((l) => l.id === id)
        ? lines.map((l) => (l.id === id ? { ...l, qty: Math.min(l.qty + 1, 99) } : l))
        : [...lines, { id, qty: 1 }],
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartLines((lines) => lines.filter((l) => l.id !== id));
    setCompareIds((ids) => ids.filter((x) => x !== id));
  }, []);

  const setQty = useCallback(
    (id: string, qty: number) => {
      if (qty <= 0) return removeFromCart(id);
      setCartLines((lines) => lines.map((l) => (l.id === id ? { ...l, qty: Math.min(qty, 99) } : l)));
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setCartLines([]);
    setCompareIds([]);
  }, []);

  const toggleCompare = useCallback(
    (id: string) => {
      setCompareIds((ids) => {
        if (ids.includes(id)) return ids.filter((x) => x !== id);
        const category = ids.length ? byId.get(ids[0])?.category : undefined;
        // сравнивать можно только товары одной категории, не больше MAX_COMPARE штук
        if (ids.length >= MAX_COMPARE || (category && byId.get(id)?.category !== category)) return ids;
        return [...ids, id];
      });
    },
    [byId],
  );

  const checkout = useCallback(async () => {
    const result = await apiPost<{ order: OrderSummary }>('/orders', {
      items: cartLines.map((l) => ({ productId: l.id, qty: l.qty })),
    });
    if (!result.ok) return result;
    setCartLines([]);
    setCompareIds([]);
    return { ok: true as const, order: result.order };
  }, [cartLines]);

  const sendMessage = useCallback((text: string) => {
    const clean = text.trim().slice(0, 500);
    if (!clean) return;
    setMessages((list) => [...list, { id: nextId.current++, from: 'me', text: clean }]);
    // имитация ответа оператора
    timers.current.push(
      window.setTimeout(() => {
        setMessages((list) => [...list, { id: nextId.current++, from: 'support', key: 'chat.reply' }]);
      }, 900),
    );
  }, []);

  const value = useMemo<ShopValue>(
    () => ({
      favorites,
      isFavorite,
      toggleFavorite,
      cart,
      cartCount: cart.reduce((sum, i) => sum + i.qty, 0),
      cartTotal: cart.reduce((sum, i) => sum + i.product.price * i.qty, 0),
      addToCart,
      setQty,
      removeFromCart,
      clearCart,
      checkout,
      compareIds: compareIds.filter((id) => cart.some((i) => i.product.id === id)),
      toggleCompare,
      messages,
      sendMessage,
    }),
    [favorites, isFavorite, toggleFavorite, cart, addToCart, setQty, removeFromCart, clearCart, checkout, compareIds, toggleCompare, messages, sendMessage],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}
