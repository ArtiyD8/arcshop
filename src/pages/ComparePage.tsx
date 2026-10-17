import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCatalog } from '../catalog-context';
import { Icon } from '../components/Icon';
import { ProductImage } from '../components/ProductImage';
import { Shell } from '../components/Shell';
import { Stars } from '../components/Stars';
import { useI18n } from '../i18n-context';
import { compareProducts } from '../lib/compare';
import { formatMoney, specText } from '../lib/format';
import { useProductLink } from '../lib/use-product-link';
import { MAX_COMPARE, useShop } from '../shop-context';

/** Сравнение товаров одной категории. Список берётся из ?ids=… (можно делиться ссылкой) или из корзины. */
export function ComparePage() {
  const { t, tf, lang } = useI18n();
  const { byId, status } = useCatalog();
  const { compareIds } = useShop();
  const [params, setParams] = useSearchParams();
  const [onlyDiff, setOnlyDiff] = useState(false);
  const productLink = useProductLink();

  const raw = params.get('ids');
  const ids = raw !== null ? raw.split(',').filter(Boolean) : compareIds;
  const found = ids.flatMap((id) => byId.get(id) ?? []).filter((p, i, all) => all.findIndex((x) => x.id === p.id) === i);
  const category = found[0]?.category;
  const products = found.filter((p) => p.category === category).slice(0, MAX_COMPARE);
  const mixed = products.length < found.length;
  const result = products.length >= 2 ? compareProducts(products) : null;

  const remove = (id: string) =>
    setParams({ ids: products.filter((p) => p.id !== id).map((p) => p.id).join(',') }, { replace: true });
  const nameOf = (id: string): string => byId.get(id)?.name ?? '';

  let verdict: string[] = [];
  if (result) {
    if (result.identical) verdict.push(t('compare.verdict.same'));
    else {
      const top = result.scores.find((s) => s.id === result.bestOverall);
      const wins = (top?.wins ?? []).slice(0, 3).map((d) => d.label[lang].toLowerCase()).join(', ');
      const name = nameOf(result.bestOverall);
      verdict.push(wins ? tf('compare.verdict.best', { name, wins }) : tf('compare.verdict.bestNoWins', { name }));
      if (result.bestValue !== result.bestOverall) verdict.push(tf('compare.verdict.value', { name: nameOf(result.bestValue) }));
    }
    const cheap = byId.get(result.cheapest);
    const pricey = byId.get(result.priciest);
    if (cheap && pricey && cheap.price !== pricey.price) {
      verdict.push(tf('compare.verdict.price', { cheap: cheap.name, pricey: pricey.name, diff: formatMoney(pricey.price - cheap.price, lang) }));
    }
  }
  verdict = verdict.filter(Boolean);

  const rows = result ? result.rows.filter((r) => !onlyDiff || r.differs) : [];

  return (
    <Shell>
      <div className="cmp-page">
        <div className="shead">
          <h1>{t('compare.title')}</h1>
          <Link to="/home" className="btn btn-outline">
            {t('compare.back')}
          </Link>
        </div>

        {status === 'loading' && <p className="catalog-state">{t('shop.loading')}</p>}
        {status !== 'loading' && !result && (
          <div className="empty cmp-empty">
            <Icon name="compare" />
            <p>{t('compare.empty')}</p>
          </div>
        )}

        {result && (
          <>
            {mixed && <p className="cmp-note">{t('compare.mixed')}</p>}

            <div className="cmp-verdict">
              {(
                [
                  ['compare.bestChoice', result.bestOverall],
                  ['compare.bestValue', result.bestValue],
                  ['compare.cheapest', result.cheapest],
                ] as const
              ).map(([label, id], i) => (
                <div key={label} className="vcard" style={{ '--i': i } as React.CSSProperties}>
                  <small>{t(label)}</small>
                  <strong>{nameOf(id)}</strong>
                </div>
              ))}
            </div>
            <ul className="cmp-text">
              {verdict.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <label className="checkbox cmp-toggle">
              <input type="checkbox" checked={onlyDiff} onChange={(e) => setOnlyDiff(e.target.checked)} />
              <span>{t('compare.onlyDiff')}</span>
            </label>

            <div className="cmp-scroll">
              <table className="cmp">
                <thead>
                  <tr>
                    <th scope="col" aria-label={t('compare.title')} />
                    {products.map((p) => (
                      <th key={p.id} scope="col" className="cmp-prod">
                        <button type="button" className="icon-btn cmp-remove" onClick={() => remove(p.id)} aria-label={t('compare.remove')} title={t('compare.remove')}>
                          <Icon name="close" />
                        </button>
                        <span className="cmp-art">
                          <ProductImage product={p} />
                        </span>
                        <Link to={productLink(p.id)} state={{ modal: true }} className="cmp-name">
                          {p.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{t('compare.price')}</th>
                    {products.map((p) => (
                      <td key={p.id} className={p.id === result.cheapest && result.cheapest !== result.priciest ? 'best' : ''}>
                        <strong>{formatMoney(p.price, lang)}</strong>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">{t('compare.rating')}</th>
                    {products.map((p) => (
                      <td key={p.id}>
                        {p.reviewCount > 0 ? (
                          <span className="cmp-rating">
                            <Stars value={p.rating} /> {p.rating.toFixed(1)}
                          </span>
                        ) : (
                          <span className="muted">{t('shop.noRating')}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="cmp-scorerow">
                    <th scope="row">{t('compare.score')}</th>
                    {result.scores.map((s) => (
                      <td key={s.id} className={s.id === result.bestOverall ? 'best' : ''}>
                        <span className="cmp-score">
                          <b>{s.score}</b>
                          <span className="cmp-bar">
                            <i style={{ width: `${s.score}%` }} />
                          </span>
                        </span>
                        {s.wins.length > 0 && (
                          <small className="cmp-leads">
                            {tf('compare.leadsIn', { wins: s.wins.slice(0, 3).map((d) => d.label[lang]).join(', ') })}
                          </small>
                        )}
                      </td>
                    ))}
                  </tr>
                  {rows.map((row) => (
                    <tr key={row.def.key}>
                      <th scope="row">{row.def.label[lang]}</th>
                      {row.values.map((value, i) => {
                        const isBest = row.best.includes(i);
                        return (
                          <td key={products[i].id} className={isBest ? 'best' : ''}>
                            {specText(row.def, value, lang, t)}
                            {isBest && (
                              <span className="best-mark">
                                <Icon name="check" />
                                {t('compare.best')}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              {rows.length === 0 && <p className="catalog-state">{t('compare.nothingDiff')}</p>}
            </div>
          </>
        )}
      </div>
    </Shell>
  );
}
