import { notFound } from "next/navigation"
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['id', 'en', 'jp']

export default getRequestConfig( async ({ locale }) => {
    const baseLocale = new Intl.Locale(locale).baseName

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(baseLocale)) notFound()

    return {
        messages: (await import(`./lang/${baseLocale}.json`)).default
    }
})