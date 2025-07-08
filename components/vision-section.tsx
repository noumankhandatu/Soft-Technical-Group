"use client";

import { Target, Users, TrendingUp, Award } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";
export default function VisionSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);

  const visionPoints = [
    {
      icon: Target,
      title: "Service Excellence",
      description: "Creating a service-based company focused on exceeding customer expectations",
    },
    {
      icon: Users,
      title: "Customer Growth",
      description: "Increasing our customer base through superior performance",
    },
    {
      icon: TrendingUp,
      title: "Word-of-Mouth",
      description: "Building reputation through satisfied customer referrals",
    },
    {
      icon: Award,
      title: "Superior Performance",
      description: "Delivering exceptional results that speak for themselves",
    },
  ];

  return (
    <section data-aos="fade-right" className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Vision</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <img
                src="https://stg.com.pk/wp-content/uploads/slider/cache/b73a73b7e0500ae489d4db7f86d14cf9/8.jpg"
                alt="STG Vision - Future Technology"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stg-orange/30 to-transparent rounded-lg"></div>

              {/* Vision Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg animate-fade-in-up animation-delay-600">
                  <div className="text-stg-orange text-4xl mb-2">"</div>
                  <p className="text-gray-700 font-medium italic">Excellence is not a destination; it is a continuous journey that never ends.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Vision Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                To create a <strong className="text-stg-orange">service-based company</strong> whose goal is to exceed customer's expectations. To
                increase the number of customers serviced through <strong className="text-stg-orange">superior performance</strong> and{" "}
                <strong className="text-stg-orange">word-of-mouth referrals</strong>.
              </p>
            </div>

            {/* Vision Points Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-stg-orange transition-colors duration-300">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
          </div>
        </div>
        <div className=" mx-auto w-full lg:w-[100%] ">
          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <div className="bg-stg-orange p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2">Ready to Experience Excellence?</h3>
              <p className="mb-4 opacity-90">Join hundreds of satisfied customers who trust STG for their IT solutions.</p>
              <Link
                href={"/contact"}
                className="bg-white text-stg-orange px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-400">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">95%</div>
              <div className="text-gray-600">Referral Rate</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-1000">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
