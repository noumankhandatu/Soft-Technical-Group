import { Award, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function DataCenterExpertise() {
  const expertise = [
    {
      icon: Award,
      title: "Regional Leadership",
      description: "The only service-based company in the region focusing on automation systems and standard data centers",
    },
    {
      icon: Users,
      title: "Government Trust",
      description: "Trusted partner for critical government infrastructure across Gilgit-Baltistan",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Pioneering green energy and energy-efficient data center solutions",
    },
    {
      icon: Shield,
      title: "Complete Security",
      description: "Comprehensive security systems including fire protection and access control",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Why Choose STG for Data Centers?</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-stg-orange transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-12 text-center text-white animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Your Data Center?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert team design and implement a world-class data center solution tailored to your specific needs. From planning to maintenance,
            we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"/contact"}
              className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
