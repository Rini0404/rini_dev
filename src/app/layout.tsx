// 'use client'
import { Navbar } from "../components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rini ",
  description: "Portfolio",
  icons: {
    icon: [ '/favicon.ico?=4' ],
    apple: [ 'apple-touch-icon?=4' ],
    shortcut: [ 'shortcut icon' ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/ico.ico"></link>
      </head>

      <body className={inter.className}>
        <Navbar />
        {/* <Dots /> */}
        {children}
      </body>
    </html>
  );
}
