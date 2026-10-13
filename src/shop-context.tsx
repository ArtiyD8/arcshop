import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { DEMO_PRODUCTS } from './data/demo-products';
import type { Product } from './data/demo-products';
import type { TranslationKey } from './i18n';

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

interface ShopValue {
  favorites: Product[];
  cart: CartItem[];
  cartTotal: number;
  messages: ChatMessage[];
  removeFavorite: (id: string) => void;
  addToCart: (product: Product) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  sendMessage: (text: string) => void;
}

const ShopContext = createContext<ShopValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>(DEMO_PRODUCTS.slice(0, 3));
  const [cart, setCart] = useState<CartItem[]>([
    { product: DEMO_PRODUCTS[0], qty: 1 },
    { product: DEMO_PRODUCTS[3], qty: 2 },
  ]);
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, from: 'support', key: 'chat.greeting' }]);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  const removeFavorite = useCallback((id: string) => setFavorites((list) => list.filter((p) => p.id !== id)), []);

  const addToCart = useCallback((product: Product) => {
    setCart((items) =>
      items.some((i) => i.product.id === product.id)
        ? items.map((i) => (i.product.id === product.id ? { ...i, qty: Math.min(i.qty + 1, 99) } : i))
        : [...items, { product, qty: 1 }],
    );
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((items) =>
      items.flatMap((i) => (i.product.id !== id ? [i] : qty <= 0 ? [] : [{ ...i, qty: Math.min(qty, 99) }])),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => setCart((items) => items.filter((i) => i.product.id !== id)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const sendMessage = useCallback((text: string) => {
    const clean = text.trim().slice(0, 500);
    if (!clean) return;
    const mine: ChatMessage = { id: nextId.current++, from: 'me', text: clean };
    setMessages((list) => [...list, mine]);
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
      cart,
      cartTotal: cart.reduce((sum, i) => sum + i.product.price * i.qty, 0),
      messages,
      removeFavorite,
      addToCart,
      setQty,
      removeFromCart,
      clearCart,
      sendMessage,
    }),
    [favorites, cart, messages, removeFavorite, addToCart, setQty, removeFromCart, clearCart, sendMessage],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside <ShopProvider>');
  return ctx;
}
