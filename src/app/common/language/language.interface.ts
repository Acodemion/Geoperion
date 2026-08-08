export const Locales = ["EN", "RU", "DE"] as const

// make union type from array of locales
export type Locale = typeof Locales[number]
