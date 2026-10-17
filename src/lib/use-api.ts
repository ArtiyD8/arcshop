import { useCallback, useEffect, useState } from 'react';
import { apiGet } from './api';
import type { ApiResult } from './api';

/** Загружает данные с API и умеет перезагружать их после изменений (новый отзыв, вопрос и т.п.) */
export function useApiData<T extends object>(path: string): { data: ApiResult<T> | null; reload: () => void } {
  const [state, setState] = useState<{ path: string; result: ApiResult<T> | null }>({ path: '', result: null });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void apiGet<T>(path).then((result) => {
      if (!cancelled) setState({ path, result });
    });
    return () => {
      cancelled = true;
    };
  }, [path, tick]);

  const reload = useCallback(() => setTick((value) => value + 1), []);
  return { data: state.path === path ? state.result : null, reload };
}
