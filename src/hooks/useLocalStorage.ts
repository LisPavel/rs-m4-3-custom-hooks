import { useCallback, useState } from "react";

const getValueStorage = <T>(
  key: string,
  initialState?: (() => T) | T,
): T | undefined => {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue) {
    return JSON.parse(localStorageValue) as T;
  }
  if (initialState instanceof Function) {
    return initialState();
  }
  return initialState;
};

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [
  T | undefined,
  {
    setItem: (newValue: T) => void;
    removeItem: () => void;
  },
] {
  const [value, setValue] = useState<T | undefined>(() =>
    getValueStorage<T>(key, initialValue),
  );

  const setItem = useCallback(
    (newValue: T) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
    [key],
  );

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
    setValue(undefined);
  }, [key]);

  return [value, { setItem, removeItem }];
}
