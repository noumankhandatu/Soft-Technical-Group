"use client";

import { useState, useEffect } from "react";
import { Shield, DollarSign, Building, RefreshCw, ChevronLeft, ChevronRight, CheckCircle, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselSlides = [
  {
    id: 1,
    title: "Police Department",
    subtitle: "Gilgit-Baltistan",
    description: "Three-tier data center establishment for law enforcement operations with advanced security protocols",
    icon: Shield,
    status: "Completed",
    tier: "3-Tier",
    clientLogo: "/images/clients/police-department.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2021",
  },
  {
    id: 2,
    title: "Finance Department",
    subtitle: "Gilgit-Baltistan",
    description: "Comprehensive data center for financial operations and management with automation systems",
    icon: DollarSign,
    status: "Completed",
    tier: "3-Tier",
    clientLogo: "/images/clients/finance-department.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2023",
  },
  {
    id: 3,
    title: "Excise & Taxation Department",
    subtitle: "Gilgit-Baltistan",
    description: "Specialized data center for tax administration and record management with modern infrastructure",
    icon: Building,
    status: "Completed",
    tier: "3-Tier",
    clientLogo: "/images/clients/excise-taxation.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2022",
  },
  {
    id: 4,
    title: "Agriculture Department",
    subtitle: "Gilgit-Baltistan",
    description: "Modern data center for agricultural data management and farmer support systems",
    icon: RefreshCw,
    status: "Completed",
    tier: "Enhanced",
    clientLogo: "/images/clients/agriculture-department.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2024",
  },
  {
    id: 5,
    title: "Health Department",
    subtitle: "Gilgit-Baltistan",
    description: "Healthcare IT infrastructure for patient management and medical record systems",
    icon: Building,
    status: "Completed",
    tier: "3-Tier",
    clientLogo: "/images/clients/health-department.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2023",
  },
  {
    id: 6,
    title: "Karakoram International University",
    subtitle: "Educational Institution",
    description: "Comprehensive IT solutions for academic and administrative operations",
    icon: RefreshCw,
    status: "Completed",
    tier: "Campus-Wide",
    clientLogo: "/images/clients/karakoram-university.jpg",
    image: "/placeholder.svg?height=300&width=400",
    year: "2022",
  },
];

export default function DataCenterProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentProject = carouselSlides[currentSlide];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Data Center Projects</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto mb-8 animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Real projects showcasing our expertise in data center infrastructure
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Carousel */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              {carouselSlides.map((slide, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      {/* Client Logo */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg flex items-center justify-center">
                          <img
                            src={slide.clientLogo || "/placeholder.svg"}
                            alt={`${slide.title} Client Logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="text-center text-white">
                        <div className="flex justify-center items-center gap-2 mb-2">
                          <slide.icon className="h-6 w-6 text-stg-orange" />
                          <span className="bg-stg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">{slide.tier}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-orange-200 font-semibold mb-3">{slide.subtitle}</p>
                        <p className="text-sm leading-relaxed opacity-90">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Leading Data Center Infrastructure in Pakistan</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                STG has successfully established state-of-the-art data centers across Gilgit-Baltistan, providing robust IT infrastructure solutions
                for government departments and educational institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise spans from initial design and planning to complete implementation and ongoing maintenance, ensuring 24/7 operational
                excellence and maximum uptime for critical systems.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Project Features</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Three-tier architecture implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Advanced security protocols and access control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">24/7 monitoring and management systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Redundant power and cooling infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Disaster recovery and backup solutions</span>
                </div>
              </div>
            </div>

            {/* Current Project Info */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Currently Viewing</h4>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center">
                  <currentProject.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{currentProject.title}</h5>
                  <p className="text-sm text-gray-600">
                    {currentProject.subtitle} • {currentProject.year}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{currentProject.description}</p>
            </div>

            {/* CTA Button */}
            <div>
              <Button size="lg" className="bg-stg-orange hover:bg-orange-600 text-white px-8 py-3">
                View All Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-center mb-3">
                <Building className="h-8 w-8 text-stg-orange" />
              </div>
              <div className="text-3xl font-bold text-stg-orange mb-2">6</div>
              <div className="text-gray-600">Data Centers</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-700">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-stg-orange" />
              </div>
              <div className="text-3xl font-bold text-stg-orange mb-2">5</div>
              <div className="text-gray-600">Government Departments</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-stg-orange" />
              </div>
              <div className="text-3xl font-bold text-stg-orange mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-900">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-stg-orange" />
              </div>
              <div className="text-3xl font-bold text-stg-orange mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
