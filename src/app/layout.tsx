import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import AuthProvider from "@/providers/AuthProvider"
import ReduxProvider from "@/providers/ReduxProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Login | Admin - Suny-WebDevs",
  description: "This is suny-webdevs admin panel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-slate-300 selection:text-black`}
        >
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </body>
      </ReduxProvider>
    </html>
  )
}
