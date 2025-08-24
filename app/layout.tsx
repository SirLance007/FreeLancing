import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'myITreturn - Tax filing made easy | File ITR in 10 minutes',
  description: 'File your Income tax return online with myITreturn. E-filing with myitreturn is easy, secure and fast. Upload Form-16 and file within 15 minutes. Starting at ₹199.',
  keywords: 'income tax return, ITR filing, tax filing, Form-16, e-filing, tax return, income tax',
  authors: [{ name: 'myITreturn' }],
  creator: 'myITreturn',
  publisher: 'myITreturn',
  robots: 'index, follow',
  openGraph: {
    title: 'myITreturn - Tax filing made easy',
    description: 'File your Income tax return online with myITreturn. E-filing with myitreturn is easy, secure and fast.',
    url: 'https://myitreturn.com',
    siteName: 'myITreturn',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'myITreturn - Tax filing made easy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'myITreturn - Tax filing made easy',
    description: 'File your Income tax return online with myITreturn. E-filing with myitreturn is easy, secure and fast.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
