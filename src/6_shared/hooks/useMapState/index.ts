import { useState, useCallback } from "react";

export function useMapState<K, V>(initial: Map<K, V>) {
  const [map, setMap] = useState(() => new Map(initial));

  const set = useCallback((key: K, value: V) => {
    setMap((prev) => {
      const next = new Map(prev);
      next.set(key, value);
      return next;
    });
  }, []);

  const remove = useCallback((key: K) => {
    setMap((prev) => {
      const next = new Map(prev);
      next.delete(key);
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setMap(new Map());
  }, []);

  return { map, set, remove, clear, setMap };
}
