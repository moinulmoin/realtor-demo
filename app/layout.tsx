import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  style: ['normal', 'italic']
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Alicia Espinal — REALTOR® | Jacksonville, FL',
  description: 'Clear guidance, honest advice, and smooth closings. I help buyers and sellers across Jacksonville move with confidence — every step of the way.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
