import React from "react";
import { useToggle } from "../../hooks/useToggle";

const colors = ["red", "blue", "cyan", "teal"] as const;

export function AdditionalTask2() {
  const [value, toggle] = useToggle(colors);

  return (
    <>
      <div>{value.toString()}</div>
      <button onClick={() => toggle()}>Toggle</button>
      {colors.map((c) => (
        <button key={c} onClick={() => toggle(c)}>
          {c}
        </button>
      ))}
    </>
  );
}
