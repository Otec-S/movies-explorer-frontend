import { useState, useEffect } from "react";

// //проверка входящего значения на ноль и строку "undefined"
// function isDefined(storedValue) {
//   return storedValue !== "null" && storedValue !== "undefined";
// }

// //кастомный хук для хранения стейта в localStorage
// export function useLocalStorageState(key, initialValue) {
//   const [state, setState] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return isDefined(storedValue) ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
