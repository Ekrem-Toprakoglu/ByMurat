import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CookieBanner } from '../components/cookie-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'BY MURAT Friseursalon — Damen | Herren | Kids',
  description: 'BY MURAT Friseursalon — Exklusive Haarfarben, Balayage & Styling. Inhaber: Sükrü Murat Ayan.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
