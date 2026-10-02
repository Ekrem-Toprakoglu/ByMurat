import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CookieBanner } from '../components/cookie-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'BY MURAT Friseursalon — Damen | Herren | Kids',
  description: 'BY MURAT Friseursalon — Exklusive Haarfarben, Balayage & Styling. Inhaber: Sükrü Murat Ayan.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
