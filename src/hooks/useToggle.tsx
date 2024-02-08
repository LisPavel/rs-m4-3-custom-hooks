import { useState } from "react";

export function useToggle(
  initialValue?: boolean,
): [boolean, (value?: boolean) => void] {
  const [value, setValue] = useState(initialValue ?? false);

  function toggleValue(value?: boolean) {
    setValue((prevState) => (typeof value === "boolean" ? value : !prevState));
  }

  return [value, toggleValue];
}
