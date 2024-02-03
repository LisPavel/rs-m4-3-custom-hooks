import { useRef, useState } from "react";

export function useHover<T extends HTMLElement>() {
  const [hovered, setHovered] = useState(false);
  const elRef = useRef<T>(null);

  return { hovered, ref: elRef };
}
