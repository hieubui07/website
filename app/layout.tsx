import type { Metadata } from "next";
import React from "react";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import "nes.css/css/nes.min.css";
import Hero from "./components/Hero";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const svgIcon = `data:image/svg+xml,${encodeURIComponent(`
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 70 90 
      L 100 70 L 100 35
      L 45 70 L 45 135
      L 70 160 L 70 120 
      L 130 80 L 130 45
      L 155 70 L 155 132
      L 100 170 L 100 135
      L 130 115"       
      fill="none" 
      stroke="#4CAF50" 
      stroke-width="10" 
      stroke-linejoin="round" 
      stroke-linecap="round"/>  
  </svg>
`)}`;

export const metadata: Metadata = {
  title: "Hieu Bui",
  description: "Hieu Bui",
  icons: {
    icon: svgIcon,
    apple: svgIcon,
    shortcut: svgIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pressStart2P.className} bg-black`}>
        <main className="h-[100vh] w-full">
          <Hero />
        </main>
      </body>
    </html>
  );
}
