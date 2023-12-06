import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    console.log("Stored value in localStorage:", storedValue);
    return storedValue !== "null" && storedValue !== "undefined"
      ? JSON.parse(storedValue)
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
