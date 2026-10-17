import type { Product } from '../shared/types';
import { Icon } from './Icon';
import type { IconName } from './Icon';

/** Заглушки по категории, пока у товара нет фото */
const PLACEHOLDER: Record<Product['category'], IconName> = {
  smartphones: 'smartphone',
  laptops: 'laptop',
  peripherals: 'headphones',
  accessories: 'bag',
  software: 'book',
};

/** Фото товара (поле image) или нейтральная заглушка по типу товара */
export function ProductImage({ product }: { product: Product }) {
  if (product.image) {
    return <img className="pimg" src={product.image} alt={product.name} loading="lazy" />;
  }
  return (
    <span className="pimg pimg-ph" aria-hidden="true">
      <Icon name={PLACEHOLDER[product.category]} />
    </span>
  );
}
