import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter, Source_Serif_4 } from "next/font/google";
import { cn } from "../lib/utils/utils";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const ptSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png", // regular favicon
  },
  title: "Hieu Bui",
  description: "Software designer and developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" />
        <meta
          name="theme-color"
          content="#fff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(10, 10, 10)"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={cn(inter.variable, ptSerif.variable)}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
