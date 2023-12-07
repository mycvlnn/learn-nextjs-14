import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capichi',
  description: 'Capichi food order',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>header component</div>
        </header>
        {children}
        <footer>Footer component</footer>
      </body>
    </html>
  )
}
