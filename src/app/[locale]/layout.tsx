import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { Quicksand } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import theme from '@/config/theme'
import '@/app/globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basugandhi Sasangka Murti - Portfolio',
  description: 'Basugandhi Sasangka Murti - Portfolio',
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
        <title>Basugandhi Sasangka Murti - Portfolio</title>
        <link rel="shortcut icon" href="../favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={quicksand.className}>
        <NextIntlClientProvider messages={messages}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
