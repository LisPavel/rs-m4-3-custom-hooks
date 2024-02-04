import { useEffect } from "react";

export function useWindowEvent(
  type: keyof WindowEventMap,
  listener: EventListenerOrEventListenerObject,
  options: AddEventListenerOptions,
) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
