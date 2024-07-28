import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'id' as const;
export const locales = ['en', 'id', 'ja'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    id: '/pathname',
    ja: '/pathnames',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
