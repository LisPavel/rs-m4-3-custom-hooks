import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Task2() {
  const [token, { setItem /* removeItem */ }] =
    useLocalStorage<string>("token");

  return (
    <div>
      <p>Твой токен: {token}</p>
      <div>
        {
          <button onClick={() => setItem("new-token")}>Задать токен</button>
          /* 
        <button onClick={() => removeItem()}>
          Удалить токен
        </button> */
        }
      </div>
    </div>
  );
}
