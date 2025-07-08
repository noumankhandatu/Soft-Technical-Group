import { Database, Server, HardDrive, Laptop, Gamepad2, Camera, Cpu, Wifi, Code, Shield, MapPin, Radio } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Database,
      title: "Storage Solutions",
      description: "Secure, Scalable, and Efficient Storage for Your Data",
      features: ["Cloud Storage", "Backup Solutions", "Data Recovery", "Archive Systems"],
    },
    {
      icon: Server,
      title: "Server Systems & Applications",
      description: "Powerful Servers Designed to Meet Your Business Needs",
      features: ["Enterprise Servers", "Application Hosting", "Database Management", "Server Maintenance"],
    },
    {
      icon: HardDrive,
      title: "Server Consoles & Racks",
      description: "Optimized Organization and Performance for Your IT Infrastructure",
      features: ["Rack Installation", "Cable Management", "Cooling Solutions", "Power Distribution"],
    },
    {
      icon: Laptop,
      title: "Laptops & PCs of All Brands",
      description: "High-Performance Devices to Boost Productivity",
      features: ["Business Laptops", "Workstations", "All-in-One PCs", "Tablet Solutions"],
    },
    {
      icon: Gamepad2,
      title: "Custom-Built Gaming Machines",
      description: "Tailored for Maximum Performance and Immersive Experience",
      features: ["High-End Graphics", "Custom Cooling", "RGB Lighting", "Performance Tuning"],
    },
    {
      icon: Camera,
      title: "Surveillance Systems",
      description: "State-of-the-Art Security Solutions for Peace of Mind",
      features: ["CCTV Systems", "Biometric Access", "Motion Detection", "Remote Monitoring"],
    },
    {
      icon: Cpu,
      title: "Computer Electronics",
      description: "Top-Quality Components and Accessories for Every Need",
      features: ["Hardware Components", "Peripherals", "Accessories", "Replacement Parts"],
    },
    {
      icon: Wifi,
      title: "Networking Solutions",
      description: "Reliable, Fast, and Secure Networking Solutions",
      features: ["Wired Networks", "Wireless Setup", "Network Security", "Performance Optimization"],
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom Solutions Built to Drive Efficiency",
      features: ["Desktop Applications", "Web Development", "Mobile Apps", "System Integration"],
    },
    {
      icon: Shield,
      title: "OEM Software Solutions",
      description: "Genuine Software for Maximum Compatibility and Performance",
      features: ["Licensed Software", "Enterprise Solutions", "Software Licensing", "Compliance Management"],
    },
    {
      icon: MapPin,
      title: "GPS & GIS Equipment",
      description: "Precision Tracking and Mapping Solutions for Your Business",
      features: ["GPS Devices", "Mapping Software", "Fleet Tracking", "Geographic Analysis"],
    },
    {
      icon: Radio,
      title: "Communication Systems",
      description: "Clear, Reliable Communication for Every Environment",
      features: ["PBAX Systems", "Walkie-Talkies", "Pagers", "Intercom Solutions"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in-up border border-orange-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-stg-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-stg-orange transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-stg-orange rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-stg-orange font-semibold hover:text-orange-600 transition-colors duration-300 text-sm">
                  Learn More →
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
