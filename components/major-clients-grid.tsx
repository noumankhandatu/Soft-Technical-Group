import { Building2, Shield, DollarSign, Leaf, Heart, GraduationCap } from "lucide-react"

export default function MajorClientsGrid() {
  const clients = [
    {
      id: 1,
      name: "Finance Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Complete data center infrastructure for financial operations and budget management systems",
      logo: "/images/clients/finance-department.jpg",
      icon: DollarSign,
      services: ["Data Center Setup", "Server Installation", "Network Infrastructure", "Security Systems"],
      year: "2023",
      status: "Active",
    },
    {
      id: 2,
      name: "Excise & Taxation Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Modern IT infrastructure for tax collection and administration with automated systems",
      logo: "/images/clients/excise-taxation.jpg",
      icon: Building2,
      services: ["Database Systems", "Automation Tools", "Backup Solutions", "Technical Support"],
      year: "2022",
      status: "Active",
    },
    {
      id: 3,
      name: "Police Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Secure data center for law enforcement operations and criminal record management",
      logo: "/images/clients/police-department.jpg",
      icon: Shield,
      services: ["Security Infrastructure", "Encrypted Storage", "Access Control", "Surveillance Systems"],
      year: "2021",
      status: "Active",
    },
    {
      id: 4,
      name: "Agriculture Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Digital transformation for agricultural data management and farmer support systems",
      logo: "/images/clients/agriculture-department.jpg",
      icon: Leaf,
      services: ["Data Analytics", "Cloud Integration", "Mobile Solutions", "Training Programs"],
      year: "2024",
      status: "Active",
    },
    {
      id: 5,
      name: "Health Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Healthcare IT infrastructure for patient management and medical record systems",
      logo: "/images/clients/health-department.jpg",
      icon: Heart,
      services: ["Medical Systems", "Patient Records", "Network Setup", "Data Security"],
      year: "2023",
      status: "Active",
    },
    {
      id: 6,
      name: "Karakoram International University",
      subtitle: "Educational Institution",
      description: "Comprehensive IT solutions for academic and administrative operations",
      logo: "/images/clients/karakoram-university.jpg",
      icon: GraduationCap,
      services: ["Campus Network", "Student Systems", "Research Infrastructure", "E-Learning Platform"],
      year: "2022",
      status: "Active",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Major Clients</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 animate-fade-in-up animation-delay-400">
            Trusted by leading government departments and institutions across Gilgit-Baltistan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up border border-orange-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Client Header */}
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-white rounded-full p-3 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center">
                    <client.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-stg-orange transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-stg-orange font-semibold mb-4">{client.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{client.description}</p>

                {/* Client Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Since</h4>
                    <p className="text-stg-orange font-bold">{client.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Status</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {client.status}
                    </span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Services Provided
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-orange-100 text-stg-orange px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-stg-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-600">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">6+</div>
              <div className="text-gray-600">Major Clients</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-700">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">100%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-stg-orange mb-2">4</div>
              <div className="text-gray-600">Data Centers</div>
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
