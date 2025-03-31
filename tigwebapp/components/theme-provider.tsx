"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or <div className="bg-white min-h-screen" /> if you want fallback UI
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}