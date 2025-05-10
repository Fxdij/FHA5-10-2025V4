import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-40 h-40 -mt-4">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For%20Boodi%20-%20White%20FHA-99tmwEWUZ5OpQsZSudzsJseuADnTMN.png"
        alt="FHA Solutions INC."
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
