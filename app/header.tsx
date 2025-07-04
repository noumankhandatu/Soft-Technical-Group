"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Major Projects", href: "/major-projects" },
    { name: "Data Center", href: "/data-center" },
    { name: "Major Clients", href: "/major-clients" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full shadow-sm border-b transition-all duration-500 sticky top-0 z-50 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and company name */}
          <div className="flex items-center space-x-4 animate-fade-in-left">
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center text-white font-bold text-xl hover-scale animate-glow">
                STG
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-800 group-hover:text-stg-orange transition-colors duration-300">
                  Soft Technical Group
                </h1>
                <p className="text-sm text-stg-orange font-medium animate-pulse-continuous">Developing the future...</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 animate-fade-in-down">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group hover-lift animate-fade-in-down stagger-${index + 1} ${
                  isActive(item.href) ? "text-stg-orange font-bold" : "text-gray-700 hover:text-stg-orange"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-stg-orange transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                <span className="absolute inset-0 bg-stg-orange/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden bg-transparent border-gray-300 hover-scale animate-fade-in-right"
              >
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] animate-slide-in-right">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b animate-fade-in-up">
                  <div className="w-10 h-10 bg-stg-orange rounded-lg flex items-center justify-center text-white font-bold animate-bounce-in">
                    STG
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-800">Soft Technical Group</h2>
                    <p className="text-sm text-stg-orange">Developing the future...</p>
                  </div>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 hover-lift animate-fade-in-left stagger-${index + 1} ${
                      isActive(item.href)
                        ? "text-stg-orange bg-orange-50 border-l-4 border-stg-orange font-bold"
                        : "text-gray-800 hover:text-stg-orange hover:bg-orange-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
