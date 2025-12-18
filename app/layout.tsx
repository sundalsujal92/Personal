import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sujal Kumar - Full Stack Developer",
  description:
    "Portfolio of Sujal Kumar, Full Stack Developer specializing in Web technologies.",
  generator: "Next.js",

  icons: {
    icon: "/download.jpg",
    shortcut: "/download.jpg",
    apple: "/download.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
