import { Shell } from '../components/Shell';
import { useI18n } from '../i18n-context';
import type { TranslationKey } from '../i18n';

/** Заглушка раздела: баннер + сетка из четырёх карточек (как в макете) */
export function SectionPage({ title }: { title: TranslationKey }) {
  const { t } = useI18n();
  return (
    <Shell>
      <div className="section">
        <h1 className="visually-hidden">{t(title)}</h1>
        <div className="banner skeleton" />
        <div className="grid">
          {[0, 1, 2, 3].map((i) => (
            <article key={i} className="card skeleton" aria-label={t('content.empty')} />
          ))}
        </div>
      </div>
    </Shell>
  );
}
