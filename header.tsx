"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Major Projects", href: "/major-projects" },
    { name: "Data Center", href: "/data-center" },
    { name: "Major Clients", href: "/major-clients" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b">
      {/* Top bar with company info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📧 Info.softtg@gmail.com</span>
              <span>📞 +92-321-5570471</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Follow us:</span>
              <div className="flex space-x-2">
                <Link href="#" className="hover:text-blue-200">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-blue-200">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-blue-200">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and company name */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">STG</div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-900">Soft Technical Group</h1>
                <p className="text-sm text-blue-600 font-medium">Developing the future...</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">STG</div>
                  <div>
                    <h2 className="font-bold text-gray-900">Soft Technical Group</h2>
                    <p className="text-sm text-blue-600">Developing the future...</p>
                  </div>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 Info.softtg@gmail.com</p>
                    <p>📞 +92-321-5570471</p>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </Link>
                    <Link href="#" className="text-blue-600 hover:text-blue-800">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-blue-600 hover:text-blue-800">
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
