import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';
import type { Lang, TranslationKey } from '../i18n';
import type { ThemeMode } from '../theme';
import { useTheme } from '../theme-context';

/** Сегментированный переключатель на радио-кнопках */
function Segmented<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="segmented" role="radiogroup">
      {options.map((option) => (
        <label key={option.value} className="segment">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: TranslationKey; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <section className="settings-section">
      <h2>{t(title)}</h2>
      {children}
    </section>
  );
}

export function SettingsPage() {
  const { t, lang, setLang } = useI18n();
  const { user, logout, changePassword } = useAuth();
  const navigate = useNavigate();
  const { mode: theme, setMode: onTheme } = useTheme();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    const result = await changePassword(
      String(data.get('current') ?? ''),
      String(data.get('next') ?? ''),
      String(data.get('next2') ?? ''),
    );
    setBusy(false);
    if (result.ok) {
      form.reset();
      setNotice({ kind: 'success', key: 'settings.passwordChanged' });
    } else {
      setNotice({ kind: 'error', key: result.error });
    }
  }

  return (
    <AuthScreen title={t('settings.title')} variant="single">
      <div className="settings">
        <Section title="settings.account">
          <p className="account-line">
            <strong>{user?.login}</strong> · {user?.email}
          </p>
        </Section>

        <Section title="settings.language">
          <Segmented<Lang>
            name="lang"
            value={lang}
            onChange={setLang}
            options={[
              { value: 'ru', label: 'Русский' },
              { value: 'en', label: 'English' },
            ]}
          />
        </Section>

        <Section title="settings.theme">
          <Segmented<ThemeMode>
            name="theme"
            value={theme}
            onChange={onTheme}
            options={[
              { value: 'system', label: t('settings.theme.system') },
              { value: 'dark', label: t('settings.theme.dark') },
              { value: 'light', label: t('settings.theme.light') },
            ]}
          />
        </Section>

        <Section title="settings.password">
          <form className="form" noValidate onSubmit={onSubmit}>
            <Field name="current" type="password" label={t('settings.currentPassword')} autoComplete="current-password" />
            <Field name="next" type="password" label={t('settings.newPassword')} autoComplete="new-password" />
            <Field name="next2" type="password" label={t('settings.newPassword2')} autoComplete="new-password" />
            <Message notice={notice} />
            <div className="form-actions">
              <button className="btn btn-gradient" type="submit" disabled={busy}>
                {t('settings.changePassword')}
              </button>
            </div>
          </form>
        </Section>

        <div className="logout-row">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => {
              logout();
              navigate('/home', { replace: true });
            }}
          >
            {t('settings.logout')}
          </button>
        </div>
      </div>
    </AuthScreen>
  );
}
