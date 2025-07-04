import { Building, RefreshCw, Shield, DollarSign } from "lucide-react";

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "Finance Department Data Center",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Establishment of comprehensive data center infrastructure for the Finance Department with complete automation systems.",
      icon: DollarSign,
      status: "Completed",
      image: "/images/clients/finance-department.jpg",
    },
    {
      id: 2,
      title: "Health Department Data Center",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Healthcare IT infrastructure for patient management and medical record systems with secure data handling.",
      icon: Building,
      status: "Completed",
      image: "/images/clients/health-department.jpg",
    },
    {
      id: 3,
      title: "Excise & Taxation Department Data Center",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Complete data center establishment for efficient tax administration and record management with modern automation.",
      icon: Building,
      status: "Completed",
      image: "/images/clients/excise-taxation.jpg",
    },
    {
      id: 4,
      title: "Police Department Data Center",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Secure data center setup for law enforcement operations and criminal record management with advanced security protocols.",
      icon: Shield,
      status: "Completed",
      image: "/images/clients/police-department.jpg",
    },
    {
      id: 5,
      title: "Karakoram International University",
      subtitle: "Educational Institution",
      description: "Comprehensive IT solutions for academic and administrative operations with modern learning infrastructure.",
      icon: RefreshCw,
      status: "Completed",
      image: "/images/clients/karakoram-university.jpg",
    },
    {
      id: 6,
      title: "Agriculture Department Data Center",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Modern data center infrastructure for agricultural data management and farmer support systems.",
      icon: RefreshCw,
      status: "Completed",
      image: "/images/clients/agriculture-department.jpg",
    },
    {
      id: 7,
      title: "Water Management Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Smart water data systems to optimize irrigation and water usage efficiency through real-time monitoring.",
      icon: Shield,
      status: "Completed",
      image: "/images/clients/finance-department.jpg",
    },
    {
      id: 8,
      title: "Water & Power Department",
      subtitle: "Government of Gilgit-Baltistan",
      description: "Deployment of reliable data infrastructure for power distribution, usage analytics, and resource optimization.",
      icon: DollarSign,
      status: "Completed",
      image: "/images/clients/pwd.jpeg",
    },
    {
      id: 9,
      title: "Apex & Co",
      subtitle: "Gilgit-Baltistan",
      description: "Complete IT infrastructure and office automation for Apex & Co to support their business operations.",
      icon: Building,
      status: "Completed",
      image: "/images/clients/apex_co_private_limited_logo.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Major Projects</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{project.status}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-orange-200 text-sm">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                {/* Project Info */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
