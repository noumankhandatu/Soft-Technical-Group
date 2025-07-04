"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "IT Solutions & Services",
    description: "Comprehensive IT services for Government, semi-Government and Private organizations",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange to-orange-600",
  },
  {
    id: 2,
    title: "Data Center Installation",
    description: "Professional data center setup and server customization services",
    image: "https://stg.com.pk/wp-content/uploads/2025/04/8.jpg",
    bgColor: "bg-gradient-to-r from-orange-600 to-stg-orange",
  },
  {
    id: 3,
    title: "Security Systems",
    description: "State-of-the-art surveillance and security solutions for complete peace of mind",
    image: "https://stg.com.pk/wp-content/uploads/2020/07/home-security-system-copy.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange/90 to-orange-700/90",
  },
  {
    id: 4,
    title: "Network Optimization",
    description: "Helping customers optimize their network & systems for maximum productivity",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-orange-700/90 to-stg-orange/90",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0 opacity-100" : index < currentSlide ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
          }`}
        >
          <div className="w-full h-full relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Overlay - reduced opacity to show background image */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content remains the same */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm hover-scale animate-pulse-continuous"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm hover-scale animate-pulse-continuous"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover-scale ${
              index === currentSlide ? "bg-white scale-125 animate-glow" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
