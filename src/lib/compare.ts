import { SPEC_DEFS } from '../shared/specs';
import type { SpecDef, SpecValue } from '../shared/specs';
import type { Product } from '../shared/types';

export interface CompareRow {
  def: SpecDef;
  values: Array<SpecValue | undefined>;
  /** индексы товаров с лучшим / худшим значением (только если значения различаются) */
  best: number[];
  worst: number[];
  differs: boolean;
}

export interface ProductScore {
  id: string;
  /** итоговая оценка 0–100 по характеристикам с учётом их важности */
  score: number;
  /** по каким характеристикам товар лидирует, самые важные первыми */
  wins: SpecDef[];
  /** оценка на каждую 1000 ₽ */
  value: number;
}

export interface CompareResult {
  rows: CompareRow[];
  scores: ProductScore[];
  bestOverall: string;
  bestValue: string;
  cheapest: string;
  priciest: string;
  /** true, если ни одна характеристика не отличается */
  identical: boolean;
}

/** Число для сравнения: булевы значения считаются как 1/0, текстовые не сравниваются */
const numeric = (value: SpecValue | undefined): number | undefined =>
  typeof value === 'number' ? value : typeof value === 'boolean' ? Number(value) : undefined;

const sameText = (a: SpecValue | undefined, b: SpecValue | undefined): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Умное сравнение товаров ОДНОЙ категории:
 *  - находит лучшее и худшее значение в каждой строке;
 *  - считает итоговую оценку: каждая характеристика нормируется к 0…1 (с учётом «чем меньше, тем лучше»)
 *    и умножается на вес; нет значения у товара — характеристика для него не учитывается;
 *  - определяет «лучший выбор», «выгодную покупку» (оценка на рубль) и самый дешёвый товар.
 */
export function compareProducts(products: Product[]): CompareResult {
  if (products.length < 2) throw new Error('Для сравнения нужно минимум два товара');
  const category = products[0].category;
  if (products.some((p) => p.category !== category)) throw new Error('Сравнивать можно только товары одной категории');

  const defs = SPEC_DEFS[category];
  const rows: CompareRow[] = [];
  const earned = products.map(() => ({ sum: 0, weight: 0 }));
  const wins: Array<SpecDef[]> = products.map(() => []);

  for (const def of defs) {
    const values = products.map((p) => p.specs[def.key]);
    if (values.every((v) => v === undefined)) continue;

    let best: number[] = [];
    let worst: number[] = [];
    let differs = values.some((v) => !sameText(v, values[0]));

    if (def.better !== 'none') {
      const nums = values.map(numeric);
      const present = nums.filter((n): n is number => n !== undefined);
      const min = Math.min(...present);
      const max = Math.max(...present);
      differs = present.length >= 2 && max !== min;

      if (differs) {
        const top = def.better === 'higher' ? max : min;
        const bottom = def.better === 'higher' ? min : max;
        best = nums.flatMap((n, i) => (n === top ? [i] : []));
        worst = nums.flatMap((n, i) => (n === bottom ? [i] : []));
        if (def.weight > 0) {
          nums.forEach((n, i) => {
            if (n === undefined) return;
            const norm = (n - min) / (max - min);
            earned[i].sum += (def.better === 'higher' ? norm : 1 - norm) * def.weight;
            earned[i].weight += def.weight;
          });
          for (const i of best) wins[i].push(def);
        }
      }
    }
    rows.push({ def, values, best, worst, differs });
  }

  const scores: ProductScore[] = products.map((p, i) => {
    const score = earned[i].weight > 0 ? (earned[i].sum / earned[i].weight) * 100 : 0;
    return {
      id: p.id,
      score: Math.round(score),
      wins: wins[i].sort((a, b) => b.weight - a.weight),
      value: p.price > 0 ? score / (p.price / 1000) : score,
    };
  });

  const byPrice = [...products].sort((a, b) => a.price - b.price);
  // при равенстве оценки побеждает более дешёвый товар
  const bestOverall = [...scores].sort(
    (a, b) => b.score - a.score || (products.find((p) => p.id === a.id)?.price ?? 0) - (products.find((p) => p.id === b.id)?.price ?? 0),
  )[0].id;
  const bestValue = [...scores].sort((a, b) => b.value - a.value)[0].id;

  return {
    rows,
    scores,
    bestOverall,
    bestValue,
    cheapest: byPrice[0].id,
    priciest: byPrice[byPrice.length - 1].id,
    identical: rows.every((r) => !r.differs),
  };
}
