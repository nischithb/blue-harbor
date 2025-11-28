import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pick<T, K extends keyof T>(object: T, keys: K[]) {
  return Object.fromEntries(keys.map((k) => [k, object[k]])) as Pick<T, K>;
}
