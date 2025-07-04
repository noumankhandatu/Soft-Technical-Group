import { Award, Users, Lightbulb, Target } from "lucide-react"

export default function CEOStory() {
  const achievements = [
    {
      icon: Award,
      title: "17+ Years Experience",
      description: "Leading IT innovation in Gilgit-Baltistan",
    },
    {
      icon: Users,
      title: "4 Data Centers",
      description: "Successfully established across the region",
    },
    {
      icon: Lightbulb,
      title: "Visionary Leadership",
      description: "Pioneering digital transformation",
    },
    {
      icon: Target,
      title: "Regional Pioneer",
      description: "First automation systems company",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Leadership Story</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 animate-fade-in-up animation-delay-400">
            The visionary behind STG's remarkable journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - CEO Image */}
          <div className="animate-fade-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-stg-orange/20 to-orange-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="/images/zahid-ceo.jpg"
                  alt="Zahid - CEO & Founder of Soft Technical Group"
                  className="w-full h-[600px] object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800">Zahid</h3>
                    <p className="text-stg-orange font-semibold">Chief Executive Officer</p>
                    <p className="text-gray-600 text-sm mt-1">Founder & Visionary Leader</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-stg-orange rounded-full animate-float opacity-80"></div>
              <div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-300 rounded-full animate-float opacity-60"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Right Column - CEO Story */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="prose prose-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-stg-orange transition-colors duration-300">
                From Vision to Reality
              </h3>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                In 2006, when the concept of professional IT services was still emerging in Gilgit-Baltistan,
                <strong className="text-stg-orange"> Zahid</strong> had a revolutionary vision. He saw the untapped
                potential of technology in transforming how businesses and government organizations operate in the
                region.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Starting with a small team and big dreams, Zahid founded{" "}
                <strong className="text-stg-orange">Soft Technical Group</strong>
                with a mission to bridge the digital divide. His deep understanding of both technology and local needs
                became the cornerstone of STG's success story.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Under his leadership, STG became the{" "}
                <strong className="text-stg-orange">first and only service-based company</strong>
                in the region to focus on automation systems and standard data centers. His strategic partnerships with
                government departments have resulted in <strong className="text-stg-orange">4 tier data centers</strong>
                that now serve as the backbone of digital infrastructure in Gilgit-Baltistan.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Today, Zahid continues to lead STG with the same passion and innovation that started it all. His
                commitment to excellence and customer satisfaction has made STG a trusted name across government,
                semi-government, and private sectors.{" "}
                <strong className="text-stg-orange">
                  "Excellence is not a destination; it is a continuous journey that never ends"
                </strong>{" "}
                - a philosophy that drives every decision at STG.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-orange-100"
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-stg-orange transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="bg-stg-orange p-8 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl text-white/20 font-serif">"</div>
              <blockquote className="text-xl font-medium italic mb-4 relative z-10">
                "Our success is built on the foundation of trust, innovation, and an unwavering commitment to our
                clients' success. Every challenge is an opportunity to grow and excel."
              </blockquote>
              <cite className="text-orange-100 font-semibold">- Zahid, CEO & Founder</cite>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">2006</div>
              <div className="text-gray-600">Company Founded</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-700">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-900">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-stg-orange mb-2">17+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
