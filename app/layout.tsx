import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Samson Adeyomoye | GIS Analyst & Geospatial Developer",
  description: "Portfolio of Samson Adeyomoye - GIS Analyst, Geospatial Developer, and Remote Sensing Enthusiast",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.className} ${geistMono.className}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
