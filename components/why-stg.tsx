import { CheckCircle, Users, Clock, Trophy } from "lucide-react"

export default function WhySTG() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Single-point accountability",
      description: "One trusted partner for all your IT needs, simplifying management and ensuring consistent results.",
    },
    {
      icon: Users,
      title: "Tailored IT solutions",
      description: "Custom-designed solutions that perfectly match your business requirements and growth objectives.",
    },
    {
      icon: Clock,
      title: "24/7 technical support",
      description: "Round-the-clock assistance ensuring your systems run smoothly without interruption.",
    },
    {
      icon: Trophy,
      title: "Proven success across multiple industries",
      description: "Extensive experience serving diverse sectors with consistently excellent results.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Why Choose STG?</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-stg-orange transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-12 text-center text-white animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert team design and implement the perfect IT solution for your business. Get started with a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-400">
            <div className="text-4xl font-bold text-stg-orange mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="text-4xl font-bold text-stg-orange mb-2">17+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="text-4xl font-bold text-stg-orange mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in-up animation-delay-1000">
            <div className="text-4xl font-bold text-stg-orange mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
