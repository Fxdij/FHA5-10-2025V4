import { Logo } from "@/components/logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-64 bg-gradient-to-b from-black via-black to-transparent pointer-events-none">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-center items-center h-full">
          <Logo />
        </div>
      </div>
    </header>
  )
}
