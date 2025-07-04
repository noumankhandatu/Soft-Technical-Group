import { Award, Building2, Users, Clock } from "lucide-react"

export default function ProjectsStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-stg-orange mb-2">6+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Centers Established</h3>
            <p className="text-gray-600 text-sm">Across multiple government departments</p>
          </div>
          <div className="text-center group animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-stg-orange mb-2">100%</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Success Rate</h3>
            <p className="text-gray-600 text-sm">All projects completed successfully</p>
          </div>
          <div className="text-center group animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-stg-orange mb-2">6+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Government Departments</h3>
            <p className="text-gray-600 text-sm">Served with critical infrastructure</p>
          </div>
          <div className="text-center group animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-stg-orange mb-2">24/7</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Operational Support</h3>
            <p className="text-gray-600 text-sm">Continuous monitoring and maintenance</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-12 text-center text-white animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Next Major Project?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our proven expertise in data center establishment and server customization transform your IT
            infrastructure. Contact us for a comprehensive consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300">
              Download Case Studies
            </button>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16 bg-gray-50 p-12 rounded-2xl animate-fade-in-up animation-delay-1000">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Specialized Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-stg-orange mb-4">SAN Customization</h4>
                <p className="text-gray-600 leading-relaxed">
                  Advanced Storage Area Network design and implementation tailored to specific organizational needs,
                  ensuring optimal performance and scalability.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-stg-orange mb-4">High-End Server Solutions</h4>
                <p className="text-gray-600 leading-relaxed">
                  Custom server configurations and deployments for mission-critical applications, with focus on
                  reliability, performance, and future-proofing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
