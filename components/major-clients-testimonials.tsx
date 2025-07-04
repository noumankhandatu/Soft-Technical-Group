import { Quote, Star } from "lucide-react"

export default function MajorClientsTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "STG has been instrumental in modernizing our financial operations. Their data center solution has significantly improved our efficiency and data security.",
      author: "Finance Department",
      position: "Government of Gilgit-Baltistan",
      rating: 5,
      logo: "/images/clients/finance-department.jpg",
    },
    {
      id: 2,
      quote:
        "The professionalism and expertise shown by STG team in establishing our secure data center exceeded our expectations. Highly recommended for critical infrastructure.",
      author: "Police Department",
      position: "Government of Gilgit-Baltistan",
      rating: 5,
      logo: "/images/clients/police-department.jpg",
    },
    {
      id: 3,
      quote:
        "STG's comprehensive IT solutions have transformed our tax administration processes. Their ongoing support ensures smooth operations 24/7.",
      author: "Excise & Taxation Department",
      position: "Government of Gilgit-Baltistan",
      rating: 5,
      logo: "/images/clients/excise-taxation.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Client Testimonials</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 animate-fade-in-up animation-delay-400">
            What our valued clients say about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-orange-50 rounded-full p-2 flex items-center justify-center">
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.author} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <Quote className="h-8 w-8 text-stg-orange" />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic text-center">"{testimonial.quote}"</p>

              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-1">{testimonial.author}</h4>
                <p className="text-stg-orange text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-12 text-center text-white animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the same level of excellence and professionalism that has made us the trusted IT partner for
            leading organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Become Our Client
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
