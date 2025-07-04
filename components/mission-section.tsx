import { Shield, Users, Wrench, Heart } from "lucide-react";

export default function MissionSection() {
  const missionPoints = [
    {
      icon: Shield,
      title: "Quality Products",
      description: "Brand-name products and reliable computer & network solutions",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Professional and reliable technical support services",
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Unparalleled customer service through principled application",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Providing the Area with comprehensive IT solutions",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Mission</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                To provide the Area with <strong className="text-stg-orange">quality brand-name products</strong>, computer & network solutions,{" "}
                <strong className="text-stg-orange">reliable and professional technical support</strong>, and{" "}
                <strong className="text-stg-orange">unparalleled customer service</strong> through the application of the principles.
              </p>
            </div>

            {/* Mission Points Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-all duration-300 hover:transform hover:-translate-y-1 animate-fade-in-up"
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
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img
                src="https://stg.com.pk/wp-content/uploads/slider/cache/fe8adccc4f49d50483fad7d32efba9a4/3.jpg"
                alt="STG Mission - Quality Service"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stg-orange/30 to-transparent rounded-lg"></div>

              {/* Mission Values Overlay */}
              <div className="absolute top-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg animate-fade-in-up animation-delay-600">
                  <h3 className="text-stg-orange font-bold text-lg mb-2">Our Commitment</h3>
                  <p className="text-gray-700 text-sm">Delivering excellence through quality, reliability, and unmatched customer service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
