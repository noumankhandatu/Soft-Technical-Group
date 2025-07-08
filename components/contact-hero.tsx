"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Contact Us",
    subtitle: "We'd Love to Hear From You",
    description: "Get in touch with our team — we're here to help with all your IT needs",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-600 to-stg-orange",
    icon: Phone,
  },
  {
    id: 2,
    title: "Visit Our Office",
    subtitle: "Located in the Heart of Gilgit",
    description: "Find us at GITCO Gas Company building, near City Hospital on River View Road",
    image: "https://stg.com.pk/wp-content/uploads/2020/04/IMG_0046-scaled.jpg",
    bgColor: "bg-gradient-to-r from-orange-600 via-stg-orange to-orange-700",
    icon: MapPin,
  },
  {
    id: 3,
    title: "24/7 Support",
    subtitle: "Always Here When You Need Us",
    description: "Round-the-clock technical support and consultation services available",
    image: "https://stg.com.pk/wp-content/uploads/2025/04/8.jpg",
    bgColor: "bg-gradient-to-r from-stg-orange via-orange-500 to-orange-600",
    icon: Clock,
  },
  {
    id: 4,
    title: "Get Started Today",
    subtitle: "Your Technology Partner",
    description: "Let's discuss your project requirements and find the perfect solution",
    image: "https://stg.com.pk/wp-content/uploads/2020/07/home-security-system-copy.jpg",
    bgColor: "bg-gradient-to-r from-orange-700 via-stg-orange to-orange-500",
    icon: Mail,
  },
];

export default function ContactHero() {
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

            <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
              <div className="text-center text-white max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex justify-center mb-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <slide.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200 drop-shadow-lg">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100 animate-fade-in-up animation-delay-400 drop-shadow-md">
                  {slide.subtitle}
                </h2>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up animation-delay-600 drop-shadow-md">{slide.description}</p>
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
                  <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3">
                    Get In Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-3 bg-transparent"
                  >
                    Call Now
                  </Button>
                </div> */}
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

      {/* Contact Badge */}
      <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
        <span className="text-white font-bold text-lg">Let's Connect</span>
      </div>
    </div>
  );
}
