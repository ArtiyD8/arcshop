import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';
import { Deco } from './Deco';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { ChatPanel, CartPanel, FavoritesPanel } from './ShopPanels';
import { ThemeMenu } from './ThemeMenu';

interface NavItem {
  path: string;
  label: TranslationKey;
  icon: IconName;
}

/** Эндпоинты — английские технические названия */
export const NAV: NavItem[] = [
  { path: '/home', label: 'nav.home', icon: 'home' },
  { path: '/smartphones', label: 'nav.smartphones', icon: 'smartphone' },
  { path: '/laptops', label: 'nav.laptops', icon: 'laptop' },
  { path: '/peripherals', label: 'nav.peripherals', icon: 'headphones' },
  { path: '/accessories', label: 'nav.accessories', icon: 'bag' },
  { path: '/drivers-software', label: 'nav.drivers', icon: 'book' },
];

function SidebarFooter() {
  const { user } = useAuth();
  const { t } = useI18n();

  if (!user) {
    return (
      <div className="sidebar-footer sidebar-guest">
        <Link to="/login" className="btn btn-gradient">
          {t('sidebar.login')}
        </Link>
        <Link to="/register" className="btn btn-gradient">
          {t('sidebar.register')}
        </Link>
      </div>
    );
  }
  return (
    <div className="sidebar-footer user-card">
      <span className="avatar">
        <Icon name="user" />
      </span>
      <span className="user-info">
        <span className="user-name">{user.login}</span>
        <span className="user-email">{user.email}</span>
      </span>
      <Link to="/settings" className="settings-link" aria-label={t('sidebar.settings')}>
        <Icon name="settings" />
      </Link>
    </div>
  );
}

function Topbar({ onMenu }: { onMenu: () => void }) {
  const { t } = useI18n();
  return (
    <header className="topbar">
      <button className="burger" type="button" aria-label={t('nav.menu')} onClick={onMenu}>
        <Icon name="menu" />
      </button>
      <Link to="/home" className="logo">
        ARC<span>SHOP</span>
      </Link>
      <label className="search">
        <Icon name="search" />
        <input type="search" placeholder={t('header.search')} aria-label={t('header.search')} />
      </label>
      <div className="actions">
        <ThemeMenu />
        <ChatPanel />
        <FavoritesPanel />
        <CartPanel />
      </div>
    </header>
  );
}

/** Основной каркас: сайдбар + шапка + контент */
export function Shell({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  // Shell монтируется заново на каждой странице, поэтому меню закрывается при переходе само
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? 'app menu-open' : 'app'}>
      <Deco />
      <aside className="sidebar" id="sidebar">
        <nav className="nav">
          {NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              <Icon name={item.icon} />
              <span>{t(item.label)}</span>
            </NavLink>
          ))}
        </nav>
        <SidebarFooter />
      </aside>
      <div className="backdrop" onClick={() => setMenuOpen(false)} />
      <div className="main">
        <Topbar onMenu={() => setMenuOpen((open) => !open)} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

/** Экраны входа/регистрации (split) и настроек (single): карточка по центру, «Назад» и тема сверху */
export function AuthScreen({
  title,
  subtitle,
  variant = 'split',
  children,
}: {
  title: string;
  subtitle?: string;
  variant?: 'split' | 'single';
  children: ReactNode;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();

  // React Router хранит в history.state порядковый номер записи (idx).
  // idx 0 — первая запись истории: возвращаться некуда, поэтому идём на главную.
  const goBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) navigate(-1);
    else navigate('/home', { replace: true });
  };

  return (
    <div className="auth-screen">
      <Deco />
      <div className="auth-top">
        <button className="back-btn" type="button" onClick={goBack}>
          <Icon name="back" />
          <span>{t('common.back')}</span>
        </button>
        <div className="actions">
          <ThemeMenu />
        </div>
      </div>
      <section className={variant === 'split' ? 'auth-card auth-split' : 'auth-card auth-single'}>
        {variant === 'split' && (
          <aside className="auth-aside">
            <Link to="/home" className="logo">
              ARC<span>SHOP</span>
            </Link>
            <div className="auth-pitch">
              <h2>{t('auth.tagline')}</h2>
              <ul>
                <li>
                  <Icon name="smartphone" />
                  <span>{t('auth.feature1')}</span>
                </li>
                <li>
                  <Icon name="headphones" />
                  <span>{t('auth.feature2')}</span>
                </li>
                <li>
                  <Icon name="book" />
                  <span>{t('auth.feature3')}</span>
                </li>
              </ul>
            </div>
          </aside>
        )}
        <div className="auth-main">
          <div className="auth-inner">
            <h1>{title}</h1>
            {subtitle && <p className="auth-subtitle">{subtitle}</p>}
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
