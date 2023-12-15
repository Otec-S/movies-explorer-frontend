import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== "null" ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function useSessionStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue !== "null" ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}