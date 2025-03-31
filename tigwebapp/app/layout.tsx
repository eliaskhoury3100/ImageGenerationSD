import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VLM Research Image Generator",
  description: "Generate images for Vision-Language Model research and education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container mx-auto py-4 px-4">
                <h1 className="text-2xl font-bold">VLM Research Image Generator</h1>
                <p className="text-muted-foreground">Educational tool for trustworthy machine learning research</p>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

