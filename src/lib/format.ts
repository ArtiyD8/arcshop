import type { Lang, TranslationKey } from '../i18n';
import type { L10n, SpecDef, SpecValue } from '../shared/specs';

export const pick = (value: L10n, lang: Lang): string => value[lang];

export function formatMoney(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(value);
}

/** Значение характеристики в виде строки: «12 ГБ», «Да», «Arc A17» */
export function specText(
  def: SpecDef,
  value: SpecValue | undefined,
  lang: Lang,
  t: (key: TranslationKey) => string,
): string {
  if (value === undefined) return '—';
  if (typeof value === 'boolean') return value ? t('spec.yes') : t('spec.no');
  if (typeof value === 'number') {
    const number = new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { maximumFractionDigits: 2 }).format(value);
    return def.unit ? `${number} ${pick(def.unit, lang)}` : number;
  }
  return pick(value, lang);
}

export const formatDate = (iso: string, lang: Lang): string =>
  new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { dateStyle: 'medium' }).format(new Date(iso));

/** Подстановка {name} в строку перевода */
export const fill = (template: string, params: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (_m, key: string) => String(params[key] ?? ''));
