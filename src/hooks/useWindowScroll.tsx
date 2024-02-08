import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface ScrollPosition {
  x: number;
  y: number;
}

export function useWindowScroll(): [
  ScrollPosition,
  (scroll: Partial<ScrollPosition>) => void,
] {
  const [scroll, setScroll] = useState<ScrollPosition>({ x: 0, y: 0 });

  const scrollTo = useCallback(
    (position: Partial<ScrollPosition>) => {
      const newScrollPosition = { ...scroll, ...position };
      window.scrollTo(newScrollPosition.x, newScrollPosition.y);
    },
    [scroll],
  );

  const handleScroll = useCallback(() => {
    const newScrollPosition: ScrollPosition = {
      x: window.scrollX,
      y: window.scrollY,
    };

    setScroll(newScrollPosition);
  }, []);

  useWindowEvent("scroll", handleScroll);

  return [scroll, scrollTo];
}
