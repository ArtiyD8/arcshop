import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';

export function LoginPage() {
  const { t } = useI18n();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    const result = await login(
      String(data.get('identifier') ?? ''),
      String(data.get('password') ?? ''),
      data.get('remember') === 'on',
    );
    setBusy(false);
    if (result.ok) navigate('/home', { replace: true });
    else setNotice({ kind: 'error', key: result.error });
  }

  return (
    <AuthScreen title={t('login.title')} subtitle={t('login.subtitle')}>
      <form className="form" noValidate onSubmit={onSubmit}>
        <Field name="identifier" label={t('login.identifier')} autoComplete="username" />
        <Field name="password" type="password" label={t('login.password')} autoComplete="current-password" />
        <label className="checkbox">
          <input type="checkbox" name="remember" />
          <span>{t('login.remember')}</span>
        </label>
        <Message notice={notice} />
        <div className="form-actions">
          <button className="btn btn-gradient btn-block" type="submit" disabled={busy}>
            {t('login.submit')}
          </button>
        </div>
        <p className="form-hint">
          {t('login.noAccount')} <Link to="/register">{t('sidebar.register')}</Link>
        </p>
      </form>
    </AuthScreen>
  );
}
