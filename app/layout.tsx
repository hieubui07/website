import type { Metadata } from "next";
import React from "react";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import "nes.css/css/nes.min.css";
import Hero from "./components/Hero";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hieu Bui",
  description: "Hieu Bui",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <main className="h-[100vh]">
          <Hero />
        </main>
      </body>
    </html>
  );
}
