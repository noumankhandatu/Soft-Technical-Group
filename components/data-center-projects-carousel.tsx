"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Server, Network, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Network Infrastructure",
    subtitle: "Professional Cable Management",
    description: "Structured cabling and network infrastructure implementation for optimal performance",
    image: "/images/1.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-600 to-stg-orange",
    icon: Network,
  },
  {
    id: 2,
    title: "Server Room Setup",
    subtitle: "Enterprise-Grade Infrastructure",
    description: "Complete server room installation with proper cooling and power management",
    image: "/images/3.jpg",
    bgColor: "bg-gradient-to-r from-orange-600 via-stg-orange to-orange-700",
    icon: Server,
  },
  {
    id: 3,
    title: "Data Center Operations",
    subtitle: "24/7 Monitoring & Management",
    description: "Comprehensive data center management with advanced monitoring systems",
    image: "/images/it-services.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-500 to-orange-600",
    icon: Database,
  },
];

export default function DataCenterProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Data Center Projects</h2> */}
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 animate-fade-in-up animation-delay-400">
            Real projects showcasing our expertise in data center infrastructure
          </p>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
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

                {/* Floating particles effect */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${4 + Math.random() * 2}s`,
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
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm hover-scale"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm hover-scale"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                  index === currentSlide ? "bg-white scale-125 animate-glow" : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Project Badge */}
          <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-white font-bold text-lg">Live Projects</span>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-orange-50 p-6 rounded-lg animate-fade-in-up animation-delay-400">
            <div className="text-3xl font-bold text-stg-orange mb-2">4</div>
            <div className="text-gray-600">Data Centers Built</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg animate-fade-in-up animation-delay-600">
            <div className="text-3xl font-bold text-stg-orange mb-2">100%</div>
            <div className="text-gray-600">Project Success Rate</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg animate-fade-in-up animation-delay-800">
            <div className="text-3xl font-bold text-stg-orange mb-2">24/7</div>
            <div className="text-gray-600">Monitoring & Support</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg animate-fade-in-up animation-delay-1000">
            <div className="text-3xl font-bold text-stg-orange mb-2">3</div>
            <div className="text-gray-600">Government Departments</div>
          </div>
        </div>
      </div>
    </section>
  );
}
