import { useState } from 'react';
import { useI18n } from '../i18n-context';

/** Звёзды рейтинга (дробные значения закрашиваются частично) */
export function Stars({ value }: { value: number }) {
  return <span className="stars" style={{ '--v': value } as React.CSSProperties} role="img" aria-label={`${value} / 5`} />;
}

/** Выбор оценки 1–5 для формы отзыва */
export function StarPicker({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  const { t } = useI18n();
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <div className="star-picker" role="radiogroup" aria-label={t('reviews.rating')} onPointerLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={n === value}
          aria-label={`${n}`}
          className={n <= shown ? 'on' : ''}
          onPointerEnter={() => setHover(n)}
          onClick={() => onChange(n)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
          </svg>
        </button>
      ))}
    </div>
  );
}
