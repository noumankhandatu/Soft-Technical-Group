"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Building2, Shield, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Trusted by Government",
    subtitle: "Leading Departments Choose STG",
    description: "Serving critical government infrastructure across Gilgit-Baltistan with excellence",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-600 to-stg-orange",
    icon: Building2,
  },
  {
    id: 2,
    title: "Security & Trust",
    subtitle: "Mission-Critical Operations",
    description: "Trusted partner for law enforcement and security department IT infrastructure",
    image: "https://stg.com.pk/wp-content/uploads/2025/04/8.jpg",
    bgColor: "bg-gradient-to-r from-orange-600 via-stg-orange to-orange-700",
    icon: Shield,
  },
  {
    id: 3,
    title: "Educational Excellence",
    subtitle: "Academic Institution Partner",
    description: "Supporting educational institutions with modern IT infrastructure and solutions",
    image: "https://stg.com.pk/wp-content/uploads/2020/07/home-security-system-copy.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-500 to-orange-600",
    icon: Users,
  },
  {
    id: 4,
    title: "Award-Winning Service",
    subtitle: "Recognized Excellence",
    description: "Consistently delivering exceptional results that exceed client expectations",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-orange-700 via-stg-orange to-orange-500",
    icon: Award,
  },
]

export default function MajorClientsHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="w-full h-full relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
              <div className="text-center text-white max-w-5xl mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex justify-center mb-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <slide.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-200 drop-shadow-lg">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100 animate-fade-in-up animation-delay-400 drop-shadow-md">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-600 drop-shadow-md">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
                  <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3">
                    View Our Clients
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-3 bg-transparent"
                  >
                    Become a Client
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Client Count Badge */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
        <span className="text-white font-bold text-lg">6+ Major Clients</span>
      </div>
    </div>
  )
}
