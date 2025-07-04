import { Users, Target, Award, Heart, Lightbulb, Shield } from "lucide-react"

export default function TeamValues() {
  const values = [
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working together as one unified team to achieve exceptional results",
    },
    {
      icon: Target,
      title: "Precision & Professionalism",
      description: "Every project executed with meticulous attention to detail and expertise",
    },
    {
      icon: Award,
      title: "Innovation & Reliability",
      description: "Delivering cutting-edge solutions that clients can depend on",
    },
    {
      icon: Heart,
      title: "Client Success Focus",
      description: "Your success is our mission - we're invested in your achievements",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Staying ahead with modern IT environments and emerging technologies",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Maintaining the highest standards in every aspect of our work",
    },
  ]

  const stats = [
    { number: "50+", label: "Combined Years Experience", description: "Collective expertise across all team members" },
    { number: "100+", label: "Projects Completed", description: "Successful implementations and satisfied clients" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance when you need it" },
    { number: "5", label: "Core Specialists", description: "Dedicated professionals in key technical areas" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Team Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Values</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-stg-orange transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 6) * 150}ms` }}
            >
              <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                <div className="text-4xl font-bold text-stg-orange mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-12 text-center text-white animate-fade-in-up animation-delay-1000">
          <h3 className="text-3xl font-bold mb-4">Ready to Work with Our Expert Team?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experienced professionals help you achieve your technology goals. From planning to implementation,
            we're here to ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-16 bg-gray-50 p-12 rounded-2xl animate-fade-in-up animation-delay-1200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Growing Team</h3>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for technology and commitment to
              excellence. If you're ready to make an impact and grow your career with a dynamic team, we'd love to hear
              from you.
            </p>
            <button className="bg-stg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
