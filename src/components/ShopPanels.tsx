import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import { formatMoney } from '../lib/format';
import { MAX_COMPARE, useShop } from '../shop-context';
import type { OrderSummary, Product } from '../shared/types';
import { Icon } from './Icon';
import { PanelHeader, Popover } from './Popover';
import { ProductImage } from './ProductImage';
import { useProductLink } from '../lib/use-product-link';

function Thumb({ product }: { product: Product }) {
  return (
    <span className="thumb">
      <ProductImage product={product} />
    </span>
  );
}

function Empty({ icon, text }: { icon: 'heart' | 'cart'; text: string }) {
  return (
    <div className="empty">
      <Icon name={icon} />
      <p>{text}</p>
    </div>
  );
}

/* ---------- Чат с поддержкой ---------- */
export function ChatPanel() {
  const { t } = useI18n();
  const { messages, sendMessage } = useShop();
  const [text, setText] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ block: 'end' });
  }, [messages.length]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(text);
    setText('');
  };

  return (
    <Popover label={t('chat.title')} icon="chat">
      {() => (
        <>
          <PanelHeader title={t('chat.title')}>
            <span className="status">{t('chat.online')}</span>
          </PanelHeader>
          <div className="pop-body chat-log" aria-live="polite">
            {messages.map((m) => (
              <p key={m.id} className={m.from === 'me' ? 'msg msg-me' : 'msg'}>
                {m.key ? t(m.key) : m.text}
              </p>
            ))}
            <div ref={endRef} />
          </div>
          <form className="chat-form" onSubmit={onSubmit}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={500}
              placeholder={t('chat.placeholder')}
              aria-label={t('chat.placeholder')}
            />
            <button className="send-btn" type="submit" aria-label={t('chat.send')} disabled={!text.trim()}>
              <Icon name="send" />
            </button>
          </form>
        </>
      )}
    </Popover>
  );
}

/* ---------- Избранное ---------- */
export function FavoritesPanel() {
  const { t, lang } = useI18n();
  const { favorites, toggleFavorite, addToCart } = useShop();
  const productLink = useProductLink();

  return (
    <Popover label={t('fav.title')} icon="heart" badge={favorites.length}>
      {(close) => (
        <>
          <PanelHeader title={t('fav.title')} />
          {favorites.length === 0 ? (
            <Empty icon="heart" text={t('fav.empty')} />
          ) : (
            <ul className="pop-body list">
              {favorites.map((product) => (
                <li key={product.id} className="row">
                  <Thumb product={product} />
                  <span className="row-info">
                    <Link to={productLink(product.id)} state={{ modal: true }} className="row-name" onClick={close}>
                      {product.name}
                    </Link>
                    <span className="row-price">{formatMoney(product.price, lang)}</span>
                  </span>
                  <button className="chip-btn" type="button" onClick={() => addToCart(product.id)}>
                    {t('fav.addToCart')}
                  </button>
                  <button
                    className="icon-btn"
                    type="button"
                    aria-label={t('fav.remove')}
                    title={t('fav.remove')}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon name="trash" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Popover>
  );
}

/* ---------- Корзина: оформление заказа и выбор товаров для сравнения ---------- */
export function CartPanel() {
  const { t, tf, lang } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const productLink = useProductLink();
  const { cart, cartCount, cartTotal, setQty, removeFromCart, clearCart, checkout, compareIds, toggleCompare } = useShop();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<TranslationKey | null>(null);
  const [ordered, setOrdered] = useState<OrderSummary | null>(null);

  const compareCategory = compareIds.length ? cart.find((i) => i.product.id === compareIds[0])?.product.category : undefined;
  /** почему товар нельзя добавить к сравнению (null — можно) */
  const compareBlock = (product: Product): TranslationKey | null => {
    if (compareIds.includes(product.id)) return null;
    if (compareIds.length >= MAX_COMPARE) return 'cart.compareMax';
    if (compareCategory && product.category !== compareCategory) return 'cart.compareOther';
    return null;
  };

  async function onCheckout(close: () => void) {
    if (!user) {
      close();
      navigate('/login');
      return;
    }
    setBusy(true);
    setError(null);
    const result = await checkout();
    setBusy(false);
    if (result.ok) setOrdered(result.order);
    else setError(result.error);
  }

  const onCompare = (close: () => void) => {
    close();
    navigate(`/compare?ids=${compareIds.join(',')}`);
  };

  return (
    <Popover label={t('cart.title')} icon="cart" badge={cartCount}>
      {(close) => (
        <>
          <PanelHeader title={t('cart.title')}>
            {cart.length > 0 && (
              <button className="link-btn" type="button" onClick={clearCart}>
                {t('cart.clear')}
              </button>
            )}
          </PanelHeader>

          {cart.length === 0 ? (
            ordered ? (
              <div className="empty ordered" role="status">
                <Icon name="check" />
                <strong>{t('cart.ordered')}</strong>
                <p>{tf('cart.orderedHint', { id: ordered.id.slice(0, 8).toUpperCase() })}</p>
              </div>
            ) : (
              <Empty icon="cart" text={t('cart.empty')} />
            )
          ) : (
            <>
              <ul className="pop-body list">
                {cart.map(({ product, qty }) => {
                  const block = compareBlock(product);
                  return (
                    <li key={product.id} className="row">
                      <label className={block ? 'cmp-check disabled' : 'cmp-check'} title={block ? t(block) : t('cart.compare')}>
                        <input
                          type="checkbox"
                          checked={compareIds.includes(product.id)}
                          disabled={block !== null}
                          onChange={() => toggleCompare(product.id)}
                          aria-label={`${t('cart.compare')}: ${product.name}`}
                        />
                        <Icon name="compare" />
                      </label>
                      <Thumb product={product} />
                      <span className="row-info">
                        <Link to={productLink(product.id)} state={{ modal: true }} className="row-name" onClick={close}>
                          {product.name}
                        </Link>
                        <span className="row-price">{formatMoney(product.price * qty, lang)}</span>
                      </span>
                      <span className="stepper">
                        <button type="button" aria-label={t('cart.dec')} onClick={() => setQty(product.id, qty - 1)}>
                          <Icon name="minus" />
                        </button>
                        <output aria-live="polite">{qty}</output>
                        <button type="button" aria-label={t('cart.inc')} onClick={() => setQty(product.id, qty + 1)}>
                          <Icon name="plus" />
                        </button>
                      </span>
                      <button
                        className="icon-btn"
                        type="button"
                        aria-label={t('cart.remove')}
                        title={t('cart.remove')}
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Icon name="trash" />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="pop-footer">
                {compareIds.length >= 2 ? (
                  <button className="btn btn-outline btn-block" type="button" onClick={() => onCompare(close)}>
                    <Icon name="compare" />
                    {tf('cart.compareN', { n: compareIds.length })}
                  </button>
                ) : (
                  <p className="cmp-hint">
                    <Icon name="compare" />
                    {t('cart.compareHint')}
                  </p>
                )}
                <p className="total">
                  <span>{t('cart.total')}</span>
                  <strong>{formatMoney(cartTotal, lang)}</strong>
                </p>
                {error && (
                  <p className="message" role="alert" data-kind="error">
                    {t(error)}
                  </p>
                )}
                <button className="btn btn-gradient btn-block" type="button" disabled={busy} onClick={() => void onCheckout(close)}>
                  {busy ? t('cart.paying') : user ? t('cart.checkout') : t('cart.loginToCheckout')}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </Popover>
  );
}
