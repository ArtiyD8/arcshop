import type { IconName } from '../components/Icon';

/** Демо-товары для списков избранного и корзины, пока нет каталога/бэкенда */
export interface Product {
  id: string;
  name: string;
  price: number;
  icon: IconName;
}

export const DEMO_PRODUCTS: Product[] = [
  { id: 'phone-x', name: 'Arc Phone X 256 GB', price: 59990, icon: 'smartphone' },
  { id: 'book-15', name: 'Arc Book 15 Pro', price: 89990, icon: 'laptop' },
  { id: 'pulse', name: 'Arc Pulse Gaming Headset', price: 7990, icon: 'headphones' },
  { id: 'charge', name: 'Arc Charge 65W', price: 2490, icon: 'bag' },
];
