import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FHA SOLUTIONS INC.",
  description:
    "We are a dedicated utility design and engineering firm. With extensive experience in both underground and aerial projects, we pride ourselves on delivering high-quality work efficiently and effectively.",
  openGraph: {
    title: "FHA SOLUTIONS INC.",
    description:
      "We are a dedicated utility design and engineering firm. With extensive experience in both underground and aerial projects, we pride ourselves on delivering high-quality work efficiently and effectively.",
    url: "https://fhasolutions.ca",
    siteName: "FHA SOLUTIONS INC.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FHA SOLUTIONS INC.",
    description:
      "We are a dedicated utility design and engineering firm. With extensive experience in both underground and aerial projects, we pride ourselves on delivering high-quality work efficiently and effectively.",
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-96x96-o3txOS8S99UCLIByNIrZNcCPwWL0iZ.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-vYCeX8z441vcqU46jnWRcjv1FvXzuo.png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="description"
          content="We are a dedicated utility design and engineering firm. With extensive experience in both underground and aerial projects, we pride ourselves on delivering high-quality work efficiently and effectively."
        />
      </head>
      <body className={`${inter.className} bg-[#010101] text-gray-100`}>
        <Header />
        {children}
        <footer className="w-full py-6 px-4 bg-[#010101] text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 FHA SOLUTIONS INC. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
