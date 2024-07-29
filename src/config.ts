import { Pathnames, LocalePrefix } from 'next-intl/routing'

export const defaultLocale = 'id' as const
export const locales = ['id', 'en', 'ja'] as const

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    id: '/pathname',
    en: '/pathnames',
    ja: '/pathnames',
  },
}

export const localePrefix: LocalePrefix<typeof locales> = 'always'
