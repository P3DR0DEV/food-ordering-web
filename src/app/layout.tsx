import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import { cn } from '@/lib/utils'
import ReactQueryProvider from '@/providers/react-query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Ordering Manager',
  description: 'Food Ordering Manager web platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn('min-h-screen antialiased font-sans grainy', inter.className)}>
        <ReactQueryProvider>
          <Toaster richColors />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
