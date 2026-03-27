import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nijananda Gurukulam | School in Gothatar, Nautandham',
  description: 'Nijananda Gurukulam is a premier educational institution in Gothatar, Nautandham, dedicated to nurturing young minds with traditional values and modern education.',
  keywords: ['school', 'education', 'Gothatar', 'Nautandham', 'Nijananda Gurukulam', 'admission', 'Nepal'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* HEADER (GLOBAL) */}
        <Navbar />

        {children}

        {/* FOOTER (GLOBAL) */}
        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
