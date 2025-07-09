import {
  Building2,
  Search,
  MapPin,
  DollarSign,
  Leaf,
  Zap,
  Hammer,
  Users,
  Calculator,
  Eye,
  HardHat,
  Layers,
  Thermometer,
  Shield,
  Wifi,
  Lock,
  Cpu,
  Settings,
  Wrench,
} from "lucide-react";

export default function DataCenterFeatures() {
  const featureCategories = [
    {
      title: "Data Centre Management Features",
      icon: Settings,
      features: [
        { icon: Building2, name: "Data Centre Design", description: "Comprehensive design solutions" },
        { icon: Search, name: "Infrastructure Analysis & Planning", description: "Detailed infrastructure assessment" },
        { icon: MapPin, name: "Site Evaluations", description: "Professional site assessment" },
        { icon: DollarSign, name: "Budget Studies", description: "Cost analysis and planning" },
        { icon: Leaf, name: "Green Energy Data Centres", description: "Sustainable energy solutions" },
        { icon: Zap, name: "Energy Efficient Data Centres", description: "Optimized power consumption" },
      ],
    },
    {
      title: "Data Centre Construction",
      icon: Hammer,
      features: [
        { icon: Users, name: "Project Management", description: "End-to-end project oversight" },
        { icon: Calculator, name: "Estimating and Budgets", description: "Accurate cost estimation" },
        { icon: Eye, name: "Site Supervision", description: "Professional site management" },
        { icon: HardHat, name: "General Construction", description: "Complete construction services" },
        { icon: Layers, name: "Raised Flooring", description: "Professional flooring installation" },
        { icon: Cpu, name: "Earthing", description: "Proper grounding systems" },
      ],
    },
    {
      title: "Mechanical & Environmental Systems",
      icon: Thermometer,
      features: [
        { icon: Thermometer, name: "Environment Management System", description: "Climate control solutions" },
        { icon: Thermometer, name: "Room Temperature Management", description: "Precise temperature control" },
        { icon: Shield, name: "Fire Protection Systems", description: "Advanced fire safety" },
        { icon: Wifi, name: "Communications Infrastructure", description: "Network connectivity solutions" },
      ],
    },
    // {
    //   title: "Consulting & Security",
    //   icon: Lock,
    //   features: [
    //     { icon: Lock, name: "Data Centre Consulting", description: "Expert advisory services" },
    //     { icon: Shield, name: "Data Centre Security", description: "Comprehensive security solutions" },
    //   ],
    // },
    // {
    //   title: "Electrical Systems",
    //   icon: Zap,
    //   features: [
    //     { icon: Zap, name: "Electrical Designing", description: "Professional electrical design" },
    //     { icon: Settings, name: "Electrical Load Management", description: "Power distribution optimization" },
    //     { icon: Cpu, name: "Earthing of Electrical Equipment", description: "Equipment grounding" },
    //     { icon: Wrench, name: "Preventative Maintenance", description: "Proactive maintenance services" },
    //   ],
    // },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Data Centre Management Features</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-stg-orange rounded-full flex items-center justify-center">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-orange-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-stg-orange rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-stg-orange transition-colors duration-300">
                          {feature.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
