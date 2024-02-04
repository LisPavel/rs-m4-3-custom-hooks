import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface ViewportSize {
  width: number;
  height: number;
}

export function useViewportSize(): ViewportSize {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const listener = useCallback(
    () =>
      setViewportSize({ height: window.innerHeight, width: window.innerWidth }),
    [],
  );
  useWindowEvent("resize", listener);
  return viewportSize;
}
