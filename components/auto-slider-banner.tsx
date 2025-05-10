"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AutoSliderBanner() {
  const handleAboutUsClick = () => {
    const aboutSection = document.getElementById("about-us")
    if (aboutSection) {
      const headerOffset = 100
      const elementPosition = aboutSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleContactUsClick = () => {
    const contactUsSection = document.getElementById("contact-us")
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-100 text-center mb-4">
          FHA SOLUTIONS INC.
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8">Utility Design Built For Today's Demands</p>
        <div className="flex space-x-4">
          <Button onClick={handleAboutUsClick} size="lg" variant="outline">
            ABOUT US
          </Button>
          <Button onClick={handleContactUsClick} size="lg" variant="outline">
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  )
}
