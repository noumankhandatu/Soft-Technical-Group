"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2, Server, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "4 Tier Data Centers",
    subtitle: "Successfully Established in Gilgit-Baltistan",
    description: "Leading the digital transformation with state-of-the-art data center infrastructure",
    image: "https://stg.com.pk/wp-content/uploads/2025/04/8.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-600 to-stg-orange",
    icon: Building2,
  },
  {
    id: 2,
    title: "Government Solutions",
    subtitle: "Trusted Partner for Public Sector",
    description: "Delivering critical IT infrastructure for government departments across the region",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-orange-600 via-stg-orange to-orange-700",
    icon: Shield,
  },
  {
    id: 3,
    title: "SAN & Server Expertise",
    subtitle: "Customization & High-End Solutions",
    description: "Specialized in Storage Area Networks and enterprise server customization",
    image: "/images/security-system.png",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-500 to-orange-600",
    icon: Server,
  },
];

export default function ProjectsHero() {
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

            {/* Overlay - reduced opacity to show background image */}
            <div className="absolute inset-0 bg-black/10"></div>
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

      {/* Achievement Badge */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
        <span className="text-white font-bold text-lg">4 Data Centers</span>
      </div>
    </div>
  );
}
