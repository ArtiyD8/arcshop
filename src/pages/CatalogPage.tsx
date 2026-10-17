import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { ProductCard } from '../components/ProductCard';
import { Shell } from '../components/Shell';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import type { Category } from '../shared/specs';
import type { Product } from '../shared/types';

type Sort = 'popular' | 'priceAsc' | 'priceDesc';

const popularity = (p: Product): number => p.reviewCount * 10 + p.rating + p.questionCount;

function sortProducts(list: Product[], sort: Sort): Product[] {
  const copy = [...list];
  if (sort === 'priceAsc') return copy.sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') return copy.sort((a, b) => b.price - a.price);
  return copy.sort((a, b) => popularity(b) - popularity(a));
}

function Grid({ products }: { products: Product[] }) {
  return (
    <div className="pgrid">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}

/** Пока каталог грузится, показываем «скелеты» карточек */
function Skeletons() {
  return (
    <div className="pgrid" aria-hidden="true">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="pcard-skel" style={{ '--i': i } as React.CSSProperties} />
      ))}
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{t('home.hero.title')}</h1>
        <p>{t('home.hero.subtitle')}</p>
        <Link to="/smartphones" className="hero-cta">
          {t('home.hero.cta')}
        </Link>
      </div>
    </section>
  );
}

/** Главная (category не задана) и разделы каталога */
export function CatalogPage({ title, category }: { title: TranslationKey; category?: Category }) {
  const { t, tf } = useI18n();
  const { products, status, refresh } = useCatalog();
  const [sort, setSort] = useState<Sort>('popular');

  const list = useMemo(
    () => (category ? sortProducts(products.filter((p) => p.category === category), sort) : []),
    [products, category, sort],
  );

  const sections: Array<{ key: TranslationKey; items: Product[] }> = useMemo(
    () => [
      { key: 'home.hits', items: sortProducts(products.filter((p) => p.badge === 'hit'), 'popular') },
      { key: 'home.new', items: products.filter((p) => p.badge === 'new') },
      { key: 'home.sale', items: products.filter((p) => p.oldPrice !== undefined) },
    ],
    [products],
  );

  let body;
  if (status === 'loading') body = <Skeletons />;
  else if (status === 'error') {
    body = (
      <div className="catalog-state" role="alert">
        <p>{t('shop.loadError')}</p>
        <button type="button" className="btn btn-gradient" onClick={refresh}>
          OK
        </button>
      </div>
    );
  } else if (!category) {
    body = (
      <>
        {sections
          .filter((s) => s.items.length > 0)
          .map((s) => (
            <section key={s.key} className="catalog-section">
              <div className="shead">
                <h2>{t(s.key)}</h2>
              </div>
              <Grid products={s.items} />
            </section>
          ))}
      </>
    );
  } else if (list.length === 0) {
    body = <p className="catalog-state">{t('shop.empty')}</p>;
  } else {
    body = <Grid products={list} />;
  }

  return (
    <Shell>
      <div className="catalog">
        {category ? (
          <div className="shead">
            <div>
              <h1>{t(title)}</h1>
              {status === 'ready' && <small>{tf('shop.count', { n: list.length })}</small>}
            </div>
            <label className="sort">
              <span>{t('shop.sort')}</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="popular">{t('shop.sort.popular')}</option>
                <option value="priceAsc">{t('shop.sort.priceAsc')}</option>
                <option value="priceDesc">{t('shop.sort.priceDesc')}</option>
              </select>
            </label>
          </div>
        ) : (
          <>
            <h1 className="visually-hidden">{t(title)}</h1>
            <Hero />
          </>
        )}
        {body}
      </div>
    </Shell>
  );
}
