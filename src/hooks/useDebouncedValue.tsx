"use client";
import { useState, useEffect } from "react";

export function useDebouncedValue<T>(value: T, delay: number = 1500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
