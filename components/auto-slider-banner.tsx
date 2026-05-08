"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AutoSliderBanner() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 96
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "90vh", minHeight: "580px" }}>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bubble-4ZFwmxhWGy95JIKRnsEMv1zg9RbA8M.png"
          alt="Abstract Background"
          fill
          style={{
            objectFit: "cover",
            transform: "rotate(180deg)",
          }}
          priority
        />
      </div>
      {/* Orange tint overlay - tints the bubble image with brand amber */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "#FF9F0A", mixBlendMode: "multiply", opacity: 0.7 }}
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center px-4 pb-8 md:pb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#FF9F0A] mb-4">
          Utility Design · Engineering · Ontario
        </p>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl text-gray-100 text-center mb-4">
          FHA SOLUTIONS INC.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center mb-8 max-w-3xl">
          Utility design built for <span className="text-[#FF9F0A] italic">today&apos;s demands.</span>
        </p>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
          <Button onClick={() => handleScroll("about-us")} size="lg" variant="outline">
            ABOUT US
          </Button>
          <Button onClick={() => handleScroll("services")} size="lg" variant="outline">
            OUR SERVICES
          </Button>
          <Button onClick={() => handleScroll("performance")} size="lg" variant="outline">
            OUR METRICS
          </Button>
          <Button onClick={() => handleScroll("contact-us")} size="lg" variant="outline">
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  )
}
