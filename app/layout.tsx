import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import { CartProvider } from "@/context/cart-context"
import CartSheet from "@/components/cart-sheet"

// Import fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

// Simulate a Devanagari font for Marathi text
const marathi = localFont({
  src: "../public/fonts/marathi-font.woff2",
  variable: "--font-marathi",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Suruchi's Kitchen and Caterings - Authentic Home-Style Cooking in Dhanori, Pune",
  description:
    "Experience authentic home-style vegetarian and non-vegetarian delicacies at Suruchi's Kitchen and Caterings, Kohinoor Vivacity, Dhanori, Pune.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} ${marathi.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            <CartSheet />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
