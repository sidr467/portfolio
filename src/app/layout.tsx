import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Siddharth Rathod",
  description: "Portfolio by Siddharth Rathod",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-6 lg:gap-12`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
