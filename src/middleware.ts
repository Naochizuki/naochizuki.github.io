import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { locales, localePrefix } from '@/navigation'

const nextIntlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'id',

    localePrefix
})

export default function (req: NextRequest) : NextResponse {
    return nextIntlMiddleware(req)
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(id|en|jp)/:path*']
}