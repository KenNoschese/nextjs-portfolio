import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = localFont({
  src: '../public/Fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf', 
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: "Portfolio",
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} antialiased bg-[#171717] text-white selection:bg-cyan-500/30`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
