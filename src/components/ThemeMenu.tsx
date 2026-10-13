import { useI18n } from '../i18n-context';
import type { Lang } from '../i18n';
import type { ThemeMode } from '../theme';
import { useTheme } from '../theme-context';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { PanelHeader, Popover } from './Popover';

const THEMES: Array<{ mode: ThemeMode; icon: IconName; label: 'settings.theme.system' | 'settings.theme.dark' | 'settings.theme.light' }> = [
  { mode: 'system', icon: 'monitor', label: 'settings.theme.system' },
  { mode: 'light', icon: 'sun', label: 'settings.theme.light' },
  { mode: 'dark', icon: 'moon', label: 'settings.theme.dark' },
];

const LANGS: Array<{ lang: Lang; label: string }> = [
  { lang: 'ru', label: 'Русский' },
  { lang: 'en', label: 'English' },
];

/** Тема и язык доступны всем, в том числе без входа в аккаунт */
export function ThemeMenu() {
  const { t, lang, setLang } = useI18n();
  const { mode, setMode } = useTheme();
  const current = THEMES.find((item) => item.mode === mode) ?? THEMES[0];

  return (
    <Popover label={t('appearance.title')} icon={current.icon}>
      {() => (
        <>
          <PanelHeader title={t('appearance.title')} />
          <div className="pop-body menu">
            <p className="menu-title">{t('settings.theme')}</p>
            {THEMES.map((item) => (
              <button
                key={item.mode}
                type="button"
                className="menu-item"
                role="menuitemradio"
                aria-checked={item.mode === mode}
                onClick={() => setMode(item.mode)}
              >
                <Icon name={item.icon} />
                <span>{t(item.label)}</span>
                {item.mode === mode && <Icon name="check" />}
              </button>
            ))}
            <p className="menu-title">{t('settings.language')}</p>
            {LANGS.map((item) => (
              <button
                key={item.lang}
                type="button"
                className="menu-item"
                role="menuitemradio"
                aria-checked={item.lang === lang}
                onClick={() => setLang(item.lang)}
              >
                <span className="menu-lang">{item.lang.toUpperCase()}</span>
                <span>{item.label}</span>
                {item.lang === lang && <Icon name="check" />}
              </button>
            ))}
          </div>
        </>
      )}
    </Popover>
  );
}
