import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luan Araujo - Software Engineer',
  description: 'Software Engineer specialized in microservices, cloud, and scalability. Expert in Python, JavaScript, and cloud technologies.',
  keywords: 'Software Engineer, Full Stack Developer, Cloud Computing, Microservices, Python, JavaScript, React, AWS',
  authors: [{ name: 'Luan Araujo' }],
  creator: 'Luan Araujo',
  publisher: 'Luan Araujo',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://github.com/peregrinno',
    title: 'Luan Araujo - Software Engineer',
    description: 'Software Engineer specialized in microservices, cloud, and scalability',
    siteName: 'Luan Araujo Portfolio',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Luan Araujo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luan Araujo - Software Engineer',
    description: 'Software Engineer specialized in microservices, cloud, and scalability',
    images: ['/favicon/android-chrome-512x512.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0B0B1A" />
        <meta name="msapplication-TileColor" content="#0B0B1A" />
      </head>
      <body className={`${inter.className} bg-[#0B0B1A] text-white`}>{children}</body>
    </html>
  )
}