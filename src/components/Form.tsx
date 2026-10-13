import { useId, useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { TranslationKey } from '../i18n';
import { useI18n } from '../i18n-context';
import { Icon } from './Icon';

export interface Notice {
  kind: 'error' | 'success';
  key: TranslationKey;
}

/** Поле с «плавающей» подписью; для паролей добавляется кнопка показа */
export function Field({
  label,
  type = 'text',
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  const { t } = useI18n();
  const id = useId();
  const [shown, setShown] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={className ? `field ${className}` : 'field'}>
      <input
        id={id}
        className={isPassword ? 'input has-toggle' : 'input'}
        type={isPassword && shown ? 'text' : type}
        placeholder=" "
        {...props}
      />
      <label htmlFor={id}>{label}</label>
      {isPassword && (
        <button
          className="field-toggle"
          type="button"
          aria-label={shown ? t('field.hide') : t('field.show')}
          aria-pressed={shown}
          onClick={() => setShown((value) => !value)}
        >
          <Icon name={shown ? 'eyeOff' : 'eye'} />
        </button>
      )}
    </div>
  );
}

export function Message({ notice }: { notice: Notice | null }) {
  const { t } = useI18n();
  return (
    <p className="message" role="alert" aria-live="polite" data-kind={notice?.kind}>
      {notice ? t(notice.key) : ''}
    </p>
  );
}
