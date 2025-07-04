import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const services = [
    "Data Center Solutions",
    "Server Systems",
    "Networking Solutions",
    "Software Development",
    "Surveillance Systems",
    "Technical Support",
  ]

  const quickLinks = [
    { name: "About Us", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Major Projects", href: "/major-projects" },
    { name: "Data Center", href: "/data-center" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact Us", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Support", href: "/support" },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-stg-orange/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 scroll-animate stagger-1">
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 hover-scale animate-glow">
                STG
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-stg-orange transition-colors duration-300">
                  Soft Technical Group
                </h3>
                <p className="text-stg-orange text-sm animate-pulse-continuous">Developing the future...</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading IT solutions provider in Gilgit-Baltistan, specializing in data centers, networking, and
              comprehensive technical support since 2006.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-stg-orange transition-all duration-300 hover-scale icon-bounce"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-stg-orange transition-all duration-300 hover-scale icon-bounce"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-stg-orange transition-all duration-300 hover-scale icon-bounce"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="scroll-animate stagger-2">
            <h4 className="text-lg font-semibold mb-6 text-stg-orange">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className={`scroll-animate stagger-${index + 1}`}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-stg-orange transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="scroll-animate stagger-3">
            <h4 className="text-lg font-semibold mb-6 text-stg-orange">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className={`scroll-animate stagger-${index + 1}`}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-stg-orange transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index} className={`scroll-animate stagger-${index + 7}`}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-stg-orange transition-all duration-300 text-sm hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-animate stagger-4">
            <h4 className="text-lg font-semibold mb-6 text-stg-orange">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group scroll-animate stagger-1">
                <MapPin className="h-5 w-5 text-stg-orange mt-1 flex-shrink-0 group-hover:animate-bounce" />
                <div className="text-gray-300 text-sm">
                  <p>Office #1, First Floor</p>
                  <p>GITCO Gas Company</p>
                  <p>Near City Hospital</p>
                  <p>River View Road, Gilgit</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group scroll-animate stagger-2">
                <Phone className="h-5 w-5 text-stg-orange flex-shrink-0 group-hover:animate-bounce" />
                <div className="text-gray-300 text-sm">
                  <p>+92-XXX-XXXXXXX</p>
                  <p>+92-XXX-XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group scroll-animate stagger-3">
                <Mail className="h-5 w-5 text-stg-orange flex-shrink-0 group-hover:animate-bounce" />
                <div className="text-gray-300 text-sm">
                  <p>info@stg.com.pk</p>
                  <p>support@stg.com.pk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group scroll-animate stagger-4">
                <Clock className="h-5 w-5 text-stg-orange mt-1 flex-shrink-0 group-hover:animate-bounce" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p className="text-stg-orange animate-pulse-continuous">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center scroll-animate">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 scroll-animate-left">
              © 2025 Soft Technical Group — Built with passion & powered by innovation.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400 scroll-animate-right">
              <span className="hover:text-stg-orange transition-colors duration-300">Established 2006</span>
              <span>•</span>
              <span className="hover:text-stg-orange transition-colors duration-300">17+ Years Experience</span>
              <span>•</span>
              <span className="hover:text-stg-orange transition-colors duration-300 animate-pulse-continuous">
                4 Data Centers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
