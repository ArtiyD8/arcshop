import { describe, expect, it } from 'vitest';
import type { Product } from '../shared/types';
import { compareProducts } from './compare';

const base = { brand: 'T', description: { ru: '', en: '' }, colors: ['#000', '#fff'] as [string, string], rating: 0, reviewCount: 0, questionCount: 0 };
const phone = (id: string, price: number, specs: Product['specs']): Product => ({ ...base, id, name: id, category: 'smartphones', price, specs });

describe('compareProducts', () => {
  const a = phone('a', 60000, { ram: 12, storage: 256, battery: 5000, weight: 190, nfc: true });
  const b = phone('b', 30000, { ram: 8, storage: 128, battery: 5200, weight: 200, nfc: true });

  it('находит лучшие и худшие значения с учётом направления', () => {
    const { rows } = compareProducts([a, b]);
    const get = (key: string) => rows.find((r) => r.def.key === key);
    expect(get('ram')?.best).toEqual([0]);
    expect(get('battery')?.best).toEqual([1]);
    expect(get('weight')?.best).toEqual([0]); // легче — лучше
    expect(get('weight')?.worst).toEqual([1]);
    expect(get('nfc')?.differs).toBe(false); // одинаковые значения не подсвечиваются
  });

  it('считает «лучший выбор», «выгодную покупку» и самый дешёвый', () => {
    const result = compareProducts([a, b]);
    expect(result.bestOverall).toBe('a');
    expect(result.cheapest).toBe('b');
    expect(result.priciest).toBe('a');
    expect(result.bestValue).toBe('b');
    expect(result.scores.find((s) => s.id === 'a')?.wins.length).toBeGreaterThan(0);
  });

  it('не штрафует товар за характеристику, которой у него нет', () => {
    const noBattery = phone('c', 30000, { ram: 12, storage: 256, weight: 190 });
    const result = compareProducts([a, noBattery]);
    const row = result.rows.find((r) => r.def.key === 'battery');
    expect(row?.best).toEqual([]); // сравнивать не с чем
    expect(result.scores.find((s) => s.id === 'c')?.score).toBeGreaterThanOrEqual(0);
  });

  it('определяет полностью одинаковые товары', () => {
    const twin = phone('twin', 60000, a.specs);
    expect(compareProducts([a, twin]).identical).toBe(true);
  });

  it('отказывается сравнивать разные категории и один товар', () => {
    const laptop: Product = { ...a, id: 'l', category: 'laptops' };
    expect(() => compareProducts([a, laptop])).toThrow();
    expect(() => compareProducts([a])).toThrow();
  });
});
