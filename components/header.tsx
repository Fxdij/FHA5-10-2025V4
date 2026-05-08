"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 96
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "About Us", id: "about-us" },
    { label: "Our Services", id: "services" },
    { label: "Our Metrics", id: "performance" },
    { label: "Contact Us", id: "contact-us" },
  ]

  return (
    <>
      {/* Initial centered hero logo - visible only when not scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-32 pointer-events-none transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)" }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="relative w-32 h-32 -mt-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For%20Boodi%20-%20White%20FHA-99tmwEWUZ5OpQsZSudzsJseuADnTMN.png"
                alt="FHA Solutions Inc."
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky toolbar - appears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0B]/95 backdrop-blur-sm border-b border-[#27272A] translate-y-0"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo on the left */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative w-[72px] h-[72px] flex-shrink-0 hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For%20Boodi%20-%20White%20FHA-99tmwEWUZ5OpQsZSudzsJseuADnTMN.png"
                alt="FHA Solutions Inc."
                fill
                className="object-contain"
              />
            </button>

            {/* Navigation - hidden on small mobile, visible on tablet+ */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FF9F0A] transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu - simple list of links scrollable horizontally */}
            <nav className="md:hidden flex items-center gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-2 py-2 text-xs font-medium text-gray-300 hover:text-[#FF9F0A] transition-colors uppercase whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
