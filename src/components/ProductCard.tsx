import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n-context';
import { formatMoney } from '../lib/format';
import { useProductLink } from '../lib/use-product-link';
import { useShop } from '../shop-context';
import type { Product } from '../shared/types';
import { Icon } from './Icon';
import { ProductImage } from './ProductImage';
import { Stars } from './Stars';

/** Карточка товара: плоская, без лишних эффектов */
export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { t, lang } = useI18n();
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const productLink = useProductLink();
  const [added, setAdded] = useState(false);
  const timer = useRef<number>(0);
  const favorite = isFavorite(product.id);

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const badge =
    product.badge === 'sale' && discount ? `-${discount}%` : product.badge === 'hit' ? t('shop.badge.hit') : product.badge === 'new' ? t('shop.badge.new') : null;

  const onAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className="pcard"
      style={{ '--i': index, '--c1': product.colors[0], '--c2': product.colors[1] } as CSSProperties}
    >
      <div className="pcard-stage">
        <ProductImage product={product} />
        {badge && <span className={`pbadge pbadge-${product.badge}`}>{badge}</span>}
        <button
          type="button"
          className={favorite ? 'pfav on' : 'pfav'}
          aria-pressed={favorite}
          aria-label={favorite ? t('shop.favRemove') : t('shop.favAdd')}
          onClick={() => toggleFavorite(product.id)}
        >
          <Icon name={favorite ? 'heartFill' : 'heart'} />
        </button>
      </div>

      <div className="pcard-body">
        <span className="pbrand">{product.brand}</span>
        <h3 className="pname">
          <Link to={productLink(product.id)} state={{ modal: true }} className="pname-link">
            {product.name}
          </Link>
        </h3>
        <p className="prating">
          {product.reviewCount > 0 ? (
            <>
              <Stars value={product.rating} />
              <span>
                {product.rating.toFixed(1)} <small>({product.reviewCount})</small>
              </span>
            </>
          ) : (
            <small>{t('shop.noRating')}</small>
          )}
        </p>
        <div className="pprice">
          <strong>{formatMoney(product.price, lang)}</strong>
          {product.oldPrice && <s>{formatMoney(product.oldPrice, lang)}</s>}
        </div>
        <button type="button" className="pbuy" data-added={added} onClick={onAdd} aria-label={`${t('shop.addToCart')}: ${product.name}`}>
          <span className="pbuy-idle">
            <Icon name="cart" />
            {t('shop.addToCart')}
          </span>
          <span className="pbuy-done" aria-live="polite">
            <Icon name="check" />
            {t('shop.added')}
          </span>
        </button>
      </div>
    </article>
  );
}
