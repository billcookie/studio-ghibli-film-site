import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ghibliography',
  description: 'Ghibliography: Unleash the Magic: Dive into the world of Studio Ghibli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
