export type Locale = (typeof locales)[number];

export const locales = ['en', 'id', 'ja'] as const;

export const defaultLocale: Locale = 'id';
