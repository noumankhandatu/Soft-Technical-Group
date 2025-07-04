"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TrustedClientsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const clients = [
    {
      id: 1,
      name: "Finance Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Complete data center infrastructure for financial operations and budget management systems",
      logo: "/images/clients/finance-department.jpg",
      established: "2023",
      services: "Data Center, Server Installation, Network Infrastructure",
    },
    {
      id: 2,
      name: "Excise & Taxation Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Modern IT infrastructure for tax collection and administration with automated systems",
      logo: "/images/clients/excise-taxation.jpg",
      established: "2022",
      services: "Database Systems, Automation Tools, Backup Solutions",
    },
    {
      id: 3,
      name: "Police Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Secure data center for law enforcement operations and criminal record management",
      logo: "/images/clients/police-department.jpg",
      established: "2021",
      services: "Security Infrastructure, Encrypted Storage, Access Control",
    },
    {
      id: 4,
      name: "Agriculture Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Digital transformation for agricultural data management and farmer support systems",
      logo: "/images/clients/agriculture-department.jpg",
      established: "2024",
      services: "Data Analytics, Cloud Integration, Mobile Solutions",
    },
    {
      id: 5,
      name: "Health Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Healthcare IT infrastructure for patient management and medical record systems",
      logo: "/images/clients/health-department.jpg",
      established: "2023",
      services: "Medical Systems, Patient Records, Network Setup",
    },
    {
      id: 6,
      name: "Karakoram International University",
      subtitle: "Educational Institution",
      description: "Comprehensive IT solutions for academic and administrative operations",
      logo: "/images/clients/karakoram-university.jpg",
      established: "2022",
      services: "Campus Network, Student Systems, Research Infrastructure",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  // Calculate visible slides for responsive design
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3 // lg screens
      if (window.innerWidth >= 768) return 2 // md screens
      return 1 // sm screens
    }
    return 3
  }

  const [visibleSlides, setVisibleSlides] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Trusted by Leading Government Departments
          </h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-lg text-gray-600 mt-4 animate-fade-in-up animation-delay-400">
            Serving critical government infrastructure across Gilgit-Baltistan with excellence
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`,
                width: `${(clients.length * 100) / visibleSlides}%`,
              }}
            >
              {clients.map((client, index) => (
                <div key={client.id} className="flex-shrink-0 px-4" style={{ width: `${100 / clients.length}%` }}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                    {/* Client Header */}
                    <div className="p-6 text-center border-b border-gray-100">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-orange-50 rounded-full p-3 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={client.logo || "/placeholder.svg"}
                            alt={`${client.name} Logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-stg-orange transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="text-stg-orange font-semibold text-sm">{client.subtitle}</p>
                    </div>

                    {/* Client Details */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{client.description}</p>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            Established
                          </span>
                          <span className="text-stg-orange font-bold">{client.established}</span>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                            Services
                          </span>
                          <p className="text-gray-700 text-sm">{client.services}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                            ✓ Active Client
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-gray-200 text-gray-700 hover:bg-white hover:text-stg-orange shadow-lg z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-gray-200 text-gray-700 hover:bg-white hover:text-stg-orange shadow-lg z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-stg-orange scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-stg-orange mb-2">6+</div>
            <div className="text-gray-600 text-sm">Major Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-stg-orange mb-2">100%</div>
            <div className="text-gray-600 text-sm">Client Retention</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-stg-orange mb-2">4</div>
            <div className="text-gray-600 text-sm">Data Centers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-stg-orange mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-stg-orange p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Trusted Government Partners</h3>
            <p className="text-xl mb-6 opacity-90">
              Experience the same level of excellence that has made us the preferred IT partner for leading government
              departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Become Our Client
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
