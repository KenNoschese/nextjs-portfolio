import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import localFont from 'next/font/local'

const recoleta = localFont({
  src: '../public/Fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf', 
  variable: '--font-recoleta',
})

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recoleta.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
