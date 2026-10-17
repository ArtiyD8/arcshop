import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { apiGet } from './lib/api';
import type { Product } from './shared/types';

interface CatalogValue {
  products: Product[];
  byId: Map<string, Product>;
  status: 'loading' | 'ready' | 'error';
  /** перечитать каталог (после нового отзыва или вопроса меняются рейтинг и счётчики) */
  refresh: () => void;
}

const CatalogContext = createContext<CatalogValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<CatalogValue['status']>('loading');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void apiGet<{ products: Product[] }>('/products').then((result) => {
      if (cancelled) return;
      if (result.ok) {
        setProducts(result.products);
        setStatus('ready');
      } else {
        setStatus('error');
      }
    });
    return () => {
      cancelled = true;
    };
  }, [tick]);

  const refresh = useCallback(() => setTick((value) => value + 1), []);
  const value = useMemo<CatalogValue>(
    () => ({ products, byId: new Map(products.map((p) => [p.id, p])), status, refresh }),
    [products, status, refresh],
  );
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): CatalogValue {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error('useCatalog must be used inside <CatalogProvider>');
  return ctx;
}
