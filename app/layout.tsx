import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FHA Solutions Inc. — Utility Design Built for Today's Demands",
  description:
    "Toronto-based utility design and engineering firm. Prime Designer for Rogers Communications across Ontario. End-to-end fibre, telecom, and joint-use design with PEng-stamped deliverables.",
  openGraph: {
    title: "FHA Solutions Inc. — Utility Design Built for Today's Demands",
    description:
      "Toronto-based utility design and engineering firm. Prime Designer for Rogers Communications across Ontario. End-to-end fibre, telecom, and joint-use design with PEng-stamped deliverables.",
    url: "https://fhasolutions.ca",
    siteName: "FHA Solutions Inc.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FHA Solutions Inc. — Utility Design Built for Today's Demands",
    description:
      "Toronto-based utility design and engineering firm. Prime Designer for Rogers Communications across Ontario.",
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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#010101] text-gray-100`}>
        <Header />
        {children}
        <footer className="w-full py-8 px-4 bg-[#010101] text-gray-400 border-t border-[#27272A]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <p className="text-sm">&copy; {new Date().getFullYear()} FHA Solutions Inc. All rights reserved.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs uppercase tracking-wider">
                <span>1200 Bay St., Unit 1201, Toronto</span>
                <span>(647) 492-7193</span>
                <span>general@fhasolutions.ca</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
