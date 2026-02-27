"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      storageKey="prototype-theme"
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
