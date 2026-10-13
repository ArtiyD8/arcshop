import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { Field, Message } from '../components/Form';
import type { Notice } from '../components/Form';
import { AuthScreen } from '../components/Shell';
import { useI18n } from '../i18n-context';

export function RegisterPage() {
  const { t } = useI18n();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (name: string): string => String(data.get(name) ?? '');
    setBusy(true);
    const result = await register({
      firstName: get('firstName'),
      lastName: get('lastName'),
      phone: get('phone'),
      login: get('login'),
      email: get('email'),
      password: get('password'),
      password2: get('password2'),
    });
    setBusy(false);
    if (result.ok) navigate('/home', { replace: true });
    else setNotice({ kind: 'error', key: result.error });
  }

  return (
    <AuthScreen title={t('register.title')} subtitle={t('register.subtitle')}>
      <form className="form form-grid" noValidate onSubmit={onSubmit}>
        <Field name="firstName" label={t('register.firstName')} autoComplete="given-name" />
        <Field name="lastName" label={t('register.lastName')} autoComplete="family-name" />
        <Field name="phone" type="tel" label={t('register.phone')} autoComplete="tel" />
        <Field name="login" label={t('register.login')} autoComplete="username" />
        <Field className="span-2" name="email" type="email" label={t('register.email')} autoComplete="email" />
        <Field name="password" type="password" label={t('register.password')} autoComplete="new-password" />
        <Field name="password2" type="password" label={t('register.password2')} autoComplete="new-password" />
        <div className="span-2">
          <Message notice={notice} />
        </div>
        <div className="form-actions span-2">
          <button className="btn btn-gradient btn-block" type="submit" disabled={busy}>
            {t('register.submit')}
          </button>
        </div>
        <p className="form-hint span-2">
          {t('register.haveAccount')} <Link to="/login">{t('sidebar.login')}</Link>
        </p>
      </form>
    </AuthScreen>
  );
}
