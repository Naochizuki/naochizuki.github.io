import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { Quicksand } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { GoogleAnalytics } from '@next/third-parties/google'
import { getMessages } from 'next-intl/server'
import theme from '@/config/theme'
import '@/app/globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basugandhi Sasangka Murti - Portfolio',
  description: 'Basugandhi Sasangka Murti - Portfolio - Naochizuki',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <GoogleAnalytics gaId="G-V0K7ZYN96D" />
      </head>
      <body className={quicksand.className}>
        <NextIntlClientProvider messages={messages}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
