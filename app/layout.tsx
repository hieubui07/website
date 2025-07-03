import type { Metadata } from "next";
import React from "react";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import "nes.css/css/nes.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hieu Bui",
  description: "Hieu Bui",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon-180x180.png",
    shortcut: "/favicon/favicon.ico",
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
