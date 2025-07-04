import { Building2, Users, Award, Zap } from "lucide-react"

export default function ProjectsOverview() {
  const highlights = [
    {
      icon: Building2,
      title: "4 Tier Data Centers",
      description: "Successfully established across Gilgit-Baltistan",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with proven expertise",
    },
    {
      icon: Award,
      title: "Government Trust",
      description: "Trusted partner for critical infrastructure",
    },
    {
      icon: Zap,
      title: "SAN & Server Expertise",
      description: "Specialized in high-end server customization",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Major Projects</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto mb-8 animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            We have a good team of experts and have successfully established{" "}
            <strong className="text-stg-orange">4 tier Data Centers</strong> in Gilgit-Baltistan. Have expertise on
            customization of <strong className="text-stg-orange">SAN and hi-end servers</strong>.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="w-20 h-20 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-stg-orange transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Main Description */}
        <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-2xl animate-fade-in-up animation-delay-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Leading Data Center Infrastructure in Gilgit-Baltistan
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our major projects represent a significant milestone in the digital transformation of Gilgit-Baltistan's
              government infrastructure. Through our expertise in data center establishment and server customization, we
              have successfully delivered critical IT infrastructure that supports the region's administrative and
              operational needs. Each project demonstrates our commitment to excellence and our ability to handle
              complex, mission-critical installations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
