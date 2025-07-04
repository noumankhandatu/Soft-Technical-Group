import { Network, Database, Shield, Cog, Cloud, Smartphone } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Network,
      title: "Enterprise Networking",
      description: "Robust network infrastructure design and implementation",
    },
    {
      icon: Database,
      title: "Data Center Design",
      description: "Scalable data center solutions for modern businesses",
    },
    {
      icon: Shield,
      title: "Security Enhancement",
      description: "Comprehensive cybersecurity and protection systems",
    },
    {
      icon: Cog,
      title: "Business Automation",
      description: "Streamlined operations through intelligent automation",
    },
    {
      icon: Cloud,
      title: "Software Integration",
      description: "Seamless integration of business applications",
    },
    {
      icon: Smartphone,
      title: "Communication Systems",
      description: "Modern communication and collaboration platforms",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Solutions</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-2xl text-stg-orange font-semibold mt-6 animate-fade-in-up animation-delay-400">
            Smart, Scalable Solutions for Every Challenge
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-gray-700">
                At Soft Technical Group, we design and implement{" "}
                <strong className="text-stg-orange">intelligent IT solutions</strong> tailored to your unique needs.
                Whether you're modernizing your infrastructure, enhancing security, or automating business operations,
                our <strong className="text-stg-orange">scalable and cost-effective strategies</strong> ensure lasting
                results.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                From enterprise networking and data center design to software integration and communication systems, our
                solutions are built with <strong className="text-stg-orange">performance</strong>,{" "}
                <strong className="text-stg-orange">sustainability</strong>, and{" "}
                <strong className="text-stg-orange">future-readiness</strong> in mind.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                We don't just solve problems — we build <strong className="text-stg-orange">smart ecosystems</strong>{" "}
                that help your organization grow and thrive in the digital age.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="STG Solutions - Smart Technology"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stg-orange/30 to-transparent rounded-lg"></div>

              {/* Solutions Highlight */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg animate-fade-in-up animation-delay-600">
                  <h3 className="text-stg-orange font-bold text-lg mb-2">Smart Ecosystems</h3>
                  <p className="text-gray-700 text-sm">
                    Building intelligent solutions that grow with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg border border-orange-100 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-stg-orange rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-stg-orange transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-400">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-stg-orange mb-2">100+</div>
              <div className="text-gray-600">Solutions Deployed</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-stg-orange mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-stg-orange mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-1000">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-stg-orange mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
