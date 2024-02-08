import { useState } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

export function useWindowScroll(): [
  Partial<ScrollPosition>,
  (scroll: Partial<ScrollPosition>) => void,
] {
  const [scroll, setScroll] = useState<Partial<ScrollPosition>>({ x: 0, y: 0 });

  return [scroll, setScroll];
}
