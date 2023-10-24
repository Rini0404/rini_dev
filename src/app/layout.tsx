'use client'
import { Navbar } from '../components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  React.useEffect(() => {
    const handleMouseMove = (e:any) => {
      const xPos = e.clientX / window.innerWidth;
      const yPos = e.clientY / window.innerHeight;
      document.body.style.backgroundImage = `radial-gradient(circle closest-side at ${xPos * 100}% ${yPos * 100}%, rgba(255,255,255,0.2), rgba(12, 18, 35, 0.15))`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
