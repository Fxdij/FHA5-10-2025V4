"use client"

import Image from "next/image"
import { useState } from "react"

interface ServiceCardProps {
  name: string
  image: string
  hoverImage: string
  description: string
}

export function ServiceCard({ name, image, hoverImage, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-[#010101] rounded-lg overflow-hidden flex flex-col service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square service-image-container">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover service-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          loading="lazy"
        />
        <Image
          src={hoverImage || "/placeholder.svg"}
          alt={`${name} Hover`}
          fill
          className="object-cover service-image-hover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-100 text-center mb-4">{name}</h3>
        <p className="text-sm text-gray-300 text-center">{description}</p>
      </div>
    </div>
  )
}
