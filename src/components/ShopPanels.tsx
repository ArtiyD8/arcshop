import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import type { Product } from '../data/demo-products';
import { useI18n } from '../i18n-context';
import { useShop } from '../shop-context';
import { Icon } from './Icon';
import { PanelHeader, Popover } from './Popover';

function useMoney(): (value: number) => string {
  const { lang } = useI18n();
  return (value) =>
    new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(value);
}

function Thumb({ product }: { product: Product }) {
  return (
    <span className="thumb">
      <Icon name={product.icon} />
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
  const { t } = useI18n();
  const money = useMoney();
  const { favorites, removeFavorite, addToCart } = useShop();

  return (
    <Popover label={t('fav.title')} icon="heart" badge={favorites.length}>
      {() => (
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
                    <span className="row-name">{product.name}</span>
                    <span className="row-price">{money(product.price)}</span>
                  </span>
                  <button className="chip-btn" type="button" onClick={() => addToCart(product)}>
                    {t('fav.addToCart')}
                  </button>
                  <button
                    className="icon-btn"
                    type="button"
                    aria-label={t('fav.remove')}
                    title={t('fav.remove')}
                    onClick={() => removeFavorite(product.id)}
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

/* ---------- Корзина ---------- */
export function CartPanel() {
  const { t } = useI18n();
  const money = useMoney();
  const { cart, cartTotal, setQty, removeFromCart, clearCart } = useShop();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Popover label={t('cart.title')} icon="cart" badge={count}>
      {() => (
        <>
          <PanelHeader title={t('cart.title')}>
            {cart.length > 0 && (
              <button className="link-btn" type="button" onClick={clearCart}>
                {t('cart.clear')}
              </button>
            )}
          </PanelHeader>
          {cart.length === 0 ? (
            <Empty icon="cart" text={t('cart.empty')} />
          ) : (
            <>
              <ul className="pop-body list">
                {cart.map(({ product, qty }) => (
                  <li key={product.id} className="row">
                    <Thumb product={product} />
                    <span className="row-info">
                      <span className="row-name">{product.name}</span>
                      <span className="row-price">{money(product.price * qty)}</span>
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
                ))}
              </ul>
              <div className="pop-footer">
                <p className="total">
                  <span>{t('cart.total')}</span>
                  <strong>{money(cartTotal)}</strong>
                </p>
                <button className="btn btn-gradient btn-block" type="button" disabled title={t('cart.soon')}>
                  {t('cart.checkout')}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </Popover>
  );
}
