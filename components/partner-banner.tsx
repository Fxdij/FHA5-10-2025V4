"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnerBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const animationInterval = setInterval(scrollAnimation, 30)

    return () => {
      clearInterval(animationInterval)
    }
  }, [])

  const clients = [
    {
      id: 1,
      name: "Wirecomm",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wirecomm-logo-366-NLyWoP6OgynNCCbVBm76qoiiIhonAe.png",
      width: 200,
      height: 80,
    },
    {
      id: 2,
      name: "Rogers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea6564dd9356222fe7b4247cdd343639-Op5cDDpECjLz6H4cvBw5GcaMovl9QR.png",
      width: 240,
      height: 80,
    },
    {
      id: 3,
      name: "Powerline Plus",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plp-logo-EHZb8Bn6VA3ftR62pYRj6ColeDQWO5.png",
      width: 220,
      height: 80,
    },
    {
      id: 4,
      name: "Bell",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bell_logo.svg-MldaSpR63PcmwxLnnq2GUEGaRGxKDZ.png",
      width: 160,
      height: 80,
    },
  ]

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <div className="w-full overflow-hidden bg-[#010101] py-8">
      <div
        ref={scrollRef}
        className="flex items-center space-x-16 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedClients.map((client, index) => (
          <div key={`${client.id}-${index}`} className="flex-shrink-0 px-8">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
