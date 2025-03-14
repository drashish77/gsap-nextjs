import type { Metadata } from "next";
import { Geist, Itim, Bai_Jamjuree } from 'next/font/google'
import './globals.css'

const itim = Itim({
  variable: '--font-itim-sans',
  subsets: ['latin'],
  weight: '400'
})
const baiJamjuree = Bai_Jamjuree({
  variable: '--font-bj-mono',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${itim.variable} ${baiJamjuree.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
