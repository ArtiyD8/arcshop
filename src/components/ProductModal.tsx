import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { useI18n } from '../i18n-context';
import { formatMoney, specText } from '../lib/format';
import { CATEGORY_ROUTE, SPEC_DEFS } from '../shared/specs';
import type { Product } from '../shared/types';
import { useShop } from '../shop-context';
import { Icon } from './Icon';
import { ProductImage } from './ProductImage';
import { QuestionsTab, ReviewsTab, SpecsTab } from './ProductTabs';
import { Stars } from './Stars';

type Tab = 'specs' | 'reviews' | 'questions';

const NAV_KEY = {
  smartphones: 'nav.smartphones',
  laptops: 'nav.laptops',
  peripherals: 'nav.peripherals',
  accessories: 'nav.accessories',
  software: 'nav.drivers',
} as const;

/** Окно товара открывается параметром ?product=id поверх любой страницы */
export function ProductModalHost() {
  const [params, setParams] = useSearchParams();
  const { byId, status } = useCatalog();
  const id = params.get('product');
  const product = id ? byId.get(id) : undefined;
  const unknown = Boolean(id) && status !== 'loading' && !product;

  // несуществующий id в адресе — просто убираем параметр
  useEffect(() => {
    if (unknown) {
      const next = new URLSearchParams(params);
      next.delete('product');
      setParams(next, { replace: true });
    }
  }, [unknown, params, setParams]);

  return product ? <ProductModal key={product.id} product={product} /> : null;
}

function ProductModal({ product }: { product: Product }) {
  const { t, tf, lang } = useI18n();
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState<Tab>('specs');
  const [askKey, setAskKey] = useState(0);
  const [added, setAdded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const favorite = isFavorite(product.id);

  const close = () => {
    // окно открыто переходом из каталога — возвращаемся назад, иначе просто убираем параметр
    if ((location.state as { modal?: boolean } | null)?.modal) {
      navigate(-1);
      return;
    }
    const next = new URLSearchParams(location.search);
    next.delete('product');
    const search = next.toString();
    navigate(`${location.pathname}${search ? `?${search}` : ''}`, { replace: true });
  };
  const closeRef = useRef(close);
  useEffect(() => {
    closeRef.current = close;
  });

  // блокировка прокрутки страницы, фокус в окне и возврат фокуса при закрытии
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add('modal-open');
    dialogRef.current?.focus();
    return () => {
      document.documentElement.classList.remove('modal-open');
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') closeRef.current();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Tab не уходит за пределы окна
  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const items = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, textarea, [tabindex="0"]');
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openTab = (next: Tab) => {
    setTab(next);
    tabsRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
  };
  const onAsk = () => {
    openTab('questions');
    setAskKey((k) => k + 1);
  };
  const onAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const highlights = SPEC_DEFS[product.category].filter((d) => d.highlight && product.specs[d.key] !== undefined);
  const style = { '--c1': product.colors[0], '--c2': product.colors[1] } as CSSProperties;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialogRef}
        className="modal"
        style={style}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onKeyDown={trapFocus}
      >
        <button type="button" className="modal-close" onClick={close} aria-label={t('modal.close')}>
          <Icon name="close" />
        </button>

        <div className="modal-top">
          <div className="modal-stage">
            <ProductImage product={product} />
            {product.badge === 'hit' && <span className="pbadge pbadge-hit">{t('shop.badge.hit')}</span>}
            {product.badge === 'new' && <span className="pbadge pbadge-new">{t('shop.badge.new')}</span>}
            {discount > 0 && <span className="pbadge pbadge-sale">{tf('modal.discount', { n: discount })}</span>}
          </div>

          <div className="modal-info">
            <Link to={CATEGORY_ROUTE[product.category]} className="modal-crumb" onClick={close}>
              {t(NAV_KEY[product.category])} · {product.brand}
            </Link>
            <div className="modal-titlerow">
              <h2 id="modal-title">{product.name}</h2>
              {/* значок «вопрос о товаре» отличается от иконки чата поддержки в шапке */}
              <button type="button" className="ask-btn" onClick={onAsk} aria-label={t('modal.ask')} title={t('modal.ask')}>
                <Icon name="ask" />
                {product.questionCount > 0 && <span className="badge">{product.questionCount}</span>}
              </button>
            </div>

            <button type="button" className="modal-rating" onClick={() => openTab('reviews')}>
              {product.reviewCount > 0 ? (
                <>
                  <Stars value={product.rating} />
                  <span>
                    {product.rating.toFixed(1)} · {t('modal.tab.reviews')} ({product.reviewCount})
                  </span>
                </>
              ) : (
                <span>{t('shop.noRating')}</span>
              )}
            </button>

            <div className="pprice modal-price">
              <strong>{formatMoney(product.price, lang)}</strong>
              {product.oldPrice && <s>{formatMoney(product.oldPrice, lang)}</s>}
            </div>

            <p className="modal-desc">{product.description[lang]}</p>

            <ul className="chips">
              {highlights.map((def) => (
                <li key={def.key} className="chip">
                  <small>{def.label[lang]}</small>
                  {specText(def, product.specs[def.key], lang, t)}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button type="button" className="pbuy modal-buy" data-added={added} onClick={onAdd}>
                <span className="pbuy-idle">
                  <Icon name="cart" />
                  {t('shop.addToCart')}
                </span>
                <span className="pbuy-done" aria-live="polite">
                  <Icon name="check" />
                  {t('shop.added')}
                </span>
              </button>
              <button
                type="button"
                className={favorite ? 'pfav pfav-lg on' : 'pfav pfav-lg'}
                aria-pressed={favorite}
                aria-label={favorite ? t('shop.favRemove') : t('shop.favAdd')}
                onClick={() => toggleFavorite(product.id)}
              >
                <Icon name={favorite ? 'heartFill' : 'heart'} />
              </button>
            </div>
          </div>
        </div>

        <div className="modal-tabs" ref={tabsRef}>
          <div className="tablist" role="tablist">
            {(['specs', 'reviews', 'questions'] as const).map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`tab-${name}`}
                aria-selected={tab === name}
                aria-controls={`panel-${name}`}
                className={tab === name ? 'tab on' : 'tab'}
                onClick={() => setTab(name)}
              >
                {t(`modal.tab.${name}` as const)}
                {name === 'reviews' && product.reviewCount > 0 && <span className="tab-count">{product.reviewCount}</span>}
                {name === 'questions' && product.questionCount > 0 && <span className="tab-count">{product.questionCount}</span>}
              </button>
            ))}
          </div>
          <div className="tabpanel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
            {tab === 'specs' && <SpecsTab product={product} />}
            {tab === 'reviews' && <ReviewsTab product={product} />}
            {tab === 'questions' && <QuestionsTab product={product} focusKey={askKey} />}
          </div>
        </div>
      </div>
    </div>
  );
}
