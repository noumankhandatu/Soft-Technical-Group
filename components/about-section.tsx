"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { Building2, Users, Wrench, Globe } from "lucide-react";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);
  const features = [
    {
      icon: Building2,
      title: "Established 2006",
      description: "Over 17 years of experience in IT services and computer electronics",
    },
    {
      icon: Users,
      title: "Diverse Clientele",
      description: "Serving Government, semi-Government and Private organizations",
    },
    {
      icon: Wrench,
      title: "Comprehensive Services",
      description: "From repairs to data center installation and server customization",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Located in the center of Gilgit, Gilgit-Baltistan for easy accessibility",
    },
  ];

  return (
    <section data-aos="fade-right" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Soft Technical Group</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-glow"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 scroll-animate-left">
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed text-gray-600 mb-6 scroll-animate stagger-1">
                Soft Technical Group established during the year <strong className="text-stg-orange">2006</strong>, aiming to provide IT based
                services and to deliver a vast selection of computer electronics at competitive pricing accompanied by the best service and the right
                advice.
              </p>

              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-2">
                STG provides access to OEM products and custom build systems. We also offer service and repair work to the Government, semi Government
                and Private organizations on monthly and annual basis. These includes but are not limited to laptops, desktops, Servers, Tablets and
                phones etc. We are also capable of serving GPS consoles.
              </p>

              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-3">
                We have good expertise over <strong className="text-stg-orange">Office Automation</strong>,{" "}
                <strong className="text-stg-orange">Data Center Installation</strong>,{" "}
                <strong className="text-stg-orange">Server customization</strong>, its installation and deployment. STG aims to help customers
                optimize their network & Systems, rapidly deploy new technologies and maintain maximum productivity.
              </p>

              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-4">
                We are located in the center of <strong className="text-stg-orange">Gilgit of Gilgit-Baltistan</strong>. Our location is a major
                asset, as it is accessible to the local community as well as tourism to the Area. We offer a wide selection of latest-technology
                computer hardware, custom-built computer systems, computer service, and computer rentals by the hour, and networking services.
              </p>

              <p className="leading-relaxed text-gray-600 scroll-animate stagger-5">
                We are dedicated to providing consistently high client satisfaction by rendering excellent service, carrying items that are not
                locally available, and furnishing a warm, pleasant atmosphere at a competitive price.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="scroll-animate-right">
            <div className="relative group">
              <img
                src="/images/1.jpg"
                alt="Soft Technical Group Office"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stg-orange/20 to-transparent rounded-lg transition-opacity duration-500 group-hover:opacity-75"></div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center card-hover scroll-animate-scale stagger-1">
                    <div className="text-2xl font-bold text-stg-orange animate-pulse-continuous">17+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center card-hover scroll-animate-scale stagger-2">
                    <div className="text-2xl font-bold text-stg-orange animate-pulse-continuous">50+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-stg-orange rounded-full animate-float"></div>
              <div className="absolute top-20 left-4 w-3 h-3 bg-orange-300 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-20 right-8 w-2 h-2 bg-orange-400 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>

        <div className=" mx-auto w-full lg:w-[90%] ">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 card-hover scroll-animate stagger-${
                  index + 6
                }`}
              >
                <div className="w-10 h-10 bg-stg-orange rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-glow">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                  <p className="text-gray-600 text-xs">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
