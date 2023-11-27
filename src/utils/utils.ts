import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type HtmlProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T]
export type ClassMap<T extends string> = Partial<Record<T, string>>
export type ArrayOr<T> = T | T[]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<A extends any[]>(func: (...args: A) => any, wait: number) {
  let timeout: number
  return (...args: A) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => func(...args), wait)
  }
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function toArray<T>(arr: T | T[]) {
  return Array.isArray(arr) ? arr : [arr]
}

