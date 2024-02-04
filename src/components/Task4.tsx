import React from "react";
import { useViewportSize } from "../hooks/useViewportSize";

export function Task4() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
