import { Shield, DollarSign, Building, RefreshCw } from "lucide-react"

export default function DataCenterProjects() {
  const projects = [
    {
      id: 1,
      title: "Police Department",
      subtitle: "Gilgit-Baltistan",
      description:
        "Three-tier data center establishment for law enforcement operations with advanced security protocols",
      icon: Shield,
      status: "Completed",
      tier: "3-Tier",
      clientLogo: "/images/clients/police-department.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 2,
      title: "Finance Department",
      subtitle: "Gilgit-Baltistan",
      description: "Comprehensive data center for financial operations and management with automation systems",
      icon: DollarSign,
      status: "Completed",
      tier: "3-Tier",
      clientLogo: "/images/clients/finance-department.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 3,
      title: "Excise & Taxation Department",
      subtitle: "Gilgit-Baltistan",
      description: "Specialized data center for tax administration and record management with modern infrastructure",
      icon: Building,
      status: "Completed",
      tier: "3-Tier",
      clientLogo: "/images/clients/excise-taxation.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 4,
      title: "Agriculture Department",
      subtitle: "Gilgit-Baltistan",
      description: "Modern data center for agricultural data management and farmer support systems",
      icon: RefreshCw,
      status: "Completed",
      tier: "Enhanced",
      clientLogo: "/images/clients/agriculture-department.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 5,
      title: "Health Department",
      subtitle: "Gilgit-Baltistan",
      description: "Healthcare IT infrastructure for patient management and medical record systems",
      icon: Building,
      status: "Completed",
      tier: "3-Tier",
      clientLogo: "/images/clients/health-department.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 6,
      title: "Karakoram International University",
      subtitle: "Educational Institution",
      description: "Comprehensive IT solutions for academic and administrative operations",
      icon: RefreshCw,
      status: "Completed",
      tier: "Campus-Wide",
      clientLogo: "/images/clients/karakoram-university.jpg",
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Data Center Projects</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto mb-8 animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            STG recently established <strong className="text-stg-orange">03 three-tier Data Centres</strong> in the
            following offices of the Government of Gilgit-Baltistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                  <span className="bg-stg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.tier}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                {/* Client Logo */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg flex items-center justify-center">
                    <img
                      src={project.clientLogo || "/placeholder.svg"}
                      alt={`${project.title} Client Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-stg-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-stg-orange font-semibold mb-4">{project.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                <button className="w-full bg-stg-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">4</div>
              <div className="text-gray-600">Data Centers</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-700">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">3</div>
              <div className="text-gray-600">Government Departments</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-900">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
