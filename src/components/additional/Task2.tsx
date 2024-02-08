import React from "react";
import { useToggle } from "../../hooks/useToggle";

export function AdditionalTask2() {
  // const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);
  const [value, toggle] = useToggle(false);

  return (
    <>
      <div>{value.toString()}</div>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>true</button>
      <button onClick={() => toggle(false)}>false</button>
      {/* <button onClick={() => toggle()}>{value}</button> */}
      {/* <button onClick={() => toggle("blue")}>blue</button> */}
    </>
  );
}
