import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Millsberry - Main',
  description: 'Welcome to Millsberry, a virtual town experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="SHORTCUT ICON" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 