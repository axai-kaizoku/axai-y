import "@/styles/globals.css"

import { Montserrat, Space_Grotesk } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import type { Viewport, Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { cn } from "@/lib/utils"
import { ScreenSize } from "@/components/screen-size"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" })
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
})

export const metadata: Metadata = {
  title: "Akshay Yelle - Developer Portfolio",
  description: "Yo 🤘🏻",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export const viewport: Viewport = {
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-dvh overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased",
        GeistSans.className,
        montserrat.variable,
        space_grotesk.variable
      )}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="px-8 md:px-10">{children}</main>
          <ScreenSize />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
