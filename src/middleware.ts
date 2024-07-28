import createMiddleware from 'next-intl/middleware';
import { localePrefix, defaultLocale, locales, pathnames } from '@/config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ['/', '/(en|id|ja)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
