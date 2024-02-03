import { useState } from "react";

export function useLocalStorage<T>(value: T) {
  const [state, setState] = useState<T>(value);
}
