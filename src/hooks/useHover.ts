import { useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement>() {
  const [hovered, setHovered] = useState(false);
  const elRef = useRef<T>(null);

  useEffect(() => {
    const handlers: [keyof HTMLElementEventMap, () => void][] = [
      ["mouseover", () => setHovered(true)],
      ["mouseout", () => setHovered(false)],
    ];

    handlers.forEach(([event, listener]) =>
      elRef.current?.addEventListener(event, listener),
    );

    return () => {
      handlers.forEach(([event, listener]) =>
        elRef.current?.addEventListener(event, listener),
      );
    };
  }, [elRef]);

  return { hovered, ref: elRef };
}
