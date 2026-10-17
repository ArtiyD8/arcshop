import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useCatalog } from '../catalog-context';
import { useI18n } from '../i18n-context';
import { apiPost } from '../lib/api';
import { formatDate, specText } from '../lib/format';
import { useApiData } from '../lib/use-api';
import { SPEC_DEFS } from '../shared/specs';
import type { Product, Question, Review, ReviewBlock, ReviewSummary } from '../shared/types';
import { Message } from './Form';
import type { Notice } from './Form';
import { Icon } from './Icon';
import { StarPicker, Stars } from './Stars';

const initial = (name: string): string => name.trim().charAt(0).toUpperCase();

/* ---------- Характеристики ---------- */
export function SpecsTab({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  return (
    <dl className="specs">
      {SPEC_DEFS[product.category]
        .filter((def) => product.specs[def.key] !== undefined)
        .map((def) => (
          <div key={def.key} className="spec-row">
            <dt>{def.label[lang]}</dt>
            <dd>{specText(def, product.specs[def.key], lang, t)}</dd>
          </div>
        ))}
    </dl>
  );
}

/* ---------- Отзывы ---------- */
interface ReviewsData {
  reviews: Review[];
  summary: ReviewSummary;
  blocked: ReviewBlock;
}

export function ReviewsTab({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  const { refresh } = useCatalog();
  const { data, reload } = useApiData<ReviewsData>(`/products/${product.id}/reviews`);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  if (!data) return <p className="tab-muted">{t('shop.loading')}</p>;
  if (!data.ok) return <p className="tab-muted">{t(data.error)}</p>;
  const { reviews, summary, blocked } = data;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    const result = await apiPost(`/products/${product.id}/reviews`, { rating, text });
    setBusy(false);
    if (result.ok) {
      setRating(0);
      setText('');
      setNotice({ kind: 'success', key: 'reviews.thanks' });
      reload();
      refresh(); // обновить рейтинг в карточках
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  return (
    <div className="reviews">
      {summary.count > 0 && (
        <div className="rv-summary">
          <div className="rv-score">
            <strong>{summary.rating.toFixed(1)}</strong>
            <Stars value={summary.rating} />
            <small>{summary.count}</small>
          </div>
          <ul className="rv-bars">
            {[5, 4, 3, 2, 1].map((n) => (
              <li key={n}>
                <span>{n}</span>
                <span className="rv-bar">
                  <i style={{ width: `${(summary.distribution[n - 1] / summary.count) * 100}%` }} />
                </span>
                <small>{summary.distribution[n - 1]}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* форма доступна только покупателю; сервер проверяет это независимо от интерфейса */}
      {blocked === null ? (
        <form className="rv-form" onSubmit={onSubmit}>
          <h4>{t('reviews.write')}</h4>
          <StarPicker value={rating} onChange={setRating} />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
            rows={3}
            placeholder={t('reviews.placeholder')}
            aria-label={t('reviews.placeholder')}
          />
          <Message notice={notice} />
          <button className="btn btn-gradient" type="submit" disabled={busy || rating === 0 || text.trim().length < 3}>
            {t('reviews.submit')}
          </button>
        </form>
      ) : (
        <p className="tab-note">
          <Icon name="lock" />
          <span>
            {t(`reviews.block.${blocked}` as const)}
            {blocked === 'login' && (
              <>
                {' '}
                <Link to="/login">{t('sidebar.login')}</Link>
              </>
            )}
          </span>
        </p>
      )}
      {blocked === 'reviewed' && notice?.kind === 'success' && <Message notice={notice} />}

      {reviews.length === 0 ? (
        <p className="tab-muted">{t('reviews.empty')}</p>
      ) : (
        <ul className="rv-list">
          {reviews.map((review) => (
            <li key={review.id} className={review.isMine ? 'rv-item mine' : 'rv-item'}>
              <span className="avatar-sm">{initial(review.authorName)}</span>
              <div>
                <p className="rv-head">
                  <strong>{review.authorName}</strong>
                  {review.isMine && <em className="tag tag-me">{t('reviews.yours')}</em>}
                  <span className="tag tag-ok">
                    <Icon name="check" />
                    {t('reviews.verified')}
                  </span>
                  <small>{formatDate(review.createdAt, lang)}</small>
                </p>
                <Stars value={review.rating} />
                <p className="rv-text">{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Вопросы по товару ---------- */
export function QuestionsTab({ product, focusKey }: { product: Product; focusKey: number }) {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const { refresh } = useCatalog();
  const { data, reload } = useApiData<{ questions: Question[] }>(`/products/${product.id}/questions`);
  const [text, setText] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);
  const [answering, setAnswering] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const askRef = useRef<HTMLTextAreaElement>(null);

  // кнопка «Задать вопрос» в шапке окна переводит фокус в поле вопроса
  useEffect(() => {
    if (focusKey > 0) askRef.current?.focus();
  }, [focusKey]);

  async function onAsk(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    const result = await apiPost(`/products/${product.id}/questions`, { text });
    setBusy(false);
    if (result.ok) {
      setText('');
      setNotice({ kind: 'success', key: 'questions.sent' });
      reload();
      refresh();
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  async function onAnswer(event: FormEvent, questionId: string) {
    event.preventDefault();
    const result = await apiPost(`/questions/${questionId}/answers`, { text: answer });
    if (result.ok) {
      setAnswer('');
      setAnswering(null);
      reload();
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  if (!data) return <p className="tab-muted">{t('shop.loading')}</p>;
  if (!data.ok) return <p className="tab-muted">{t(data.error)}</p>;

  return (
    <div className="qa">
      {user ? (
        <form className="qa-form" onSubmit={onAsk}>
          <h4>{t('questions.ask')}</h4>
          <textarea
            ref={askRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
            rows={2}
            placeholder={t('questions.placeholder')}
            aria-label={t('questions.ask')}
          />
          <Message notice={notice} />
          <button className="btn btn-gradient" type="submit" disabled={busy || text.trim().length < 5}>
            {t('questions.submit')}
          </button>
        </form>
      ) : (
        <p className="tab-note">
          <Icon name="ask" />
          <span>
            {t('questions.login')} <Link to="/login">{t('sidebar.login')}</Link>
          </span>
        </p>
      )}

      {data.questions.length === 0 ? (
        <p className="tab-muted">{t('questions.empty')}</p>
      ) : (
        <ul className="qa-list">
          {data.questions.map((q) => (
            <li key={q.id} className="qa-item">
              <p className="qa-q">
                <span className="qa-mark">?</span>
                <span>
                  <strong>{q.authorName}</strong> <small>{formatDate(q.createdAt, lang)}</small>
                  <br />
                  {q.text}
                </span>
              </p>
              {q.answers.map((a) => (
                <p key={a.id} className="qa-a">
                  <span className="avatar-sm">{initial(a.authorName)}</span>
                  <span>
                    <strong>{a.authorName}</strong>
                    {a.isShop && <em className="tag tag-shop">{t('questions.shop')}</em>}
                    {a.isBuyer && <em className="tag tag-ok">{t('questions.buyer')}</em>}
                    <small> {formatDate(a.createdAt, lang)}</small>
                    <br />
                    {a.text}
                  </span>
                </p>
              ))}
              {user &&
                (answering === q.id ? (
                  <form className="qa-reply" onSubmit={(e) => void onAnswer(e, q.id)}>
                    <input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      maxLength={500}
                      placeholder={t('questions.answerPlaceholder')}
                      aria-label={t('questions.answerPlaceholder')}
                      autoFocus
                    />
                    <button className="chip-btn" type="submit" disabled={answer.trim().length < 2}>
                      {t('questions.send')}
                    </button>
                  </form>
                ) : (
                  <button className="link-btn" type="button" onClick={() => setAnswering(q.id)}>
                    {t('questions.answer')}
                  </button>
                ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
