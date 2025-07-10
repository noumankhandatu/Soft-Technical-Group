import { User, DollarSign, Code, Zap, Network } from "lucide-react";
import Link from "next/link";

export default function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Zulfiqar Hussain",
      position: "Managing Director",
      description: "Leading STG with strategic vision and extensive experience in IT infrastructure and business development.",
      icon: User,
      image: "/team/avatar-design.png",
      expertise: ["Strategic Planning", "Business Development", "IT Infrastructure", "Team Leadership"],
      experience: "5+ Years",
    },
    {
      id: 2,
      name: "Shahab Anjum",
      position: "Manager Finance",
      description: "Managing financial operations and ensuring sound fiscal management across all STG projects and initiatives.",
      icon: DollarSign,
      image: "/team/avatar-design.png",
      expertise: ["Financial Management", "Budget Planning", "Cost Analysis", "Project Finance"],
      experience: "4+ Years",
    },
    {
      id: 3,
      name: "Ehsan Mehmood",
      position: "Software Engineer",
      description: "Developing innovative software solutions and custom applications to meet diverse client requirements.",
      icon: Code,
      image: "/team/avatar-design.png",
      expertise: ["Software Development", "Web Applications", "Database Design", "System Integration"],
      experience: "8+ Years",
    },
    {
      id: 4,
      name: "Jamsheed",
      position: "Electrician",
      description: "Ensuring reliable electrical systems and power infrastructure for all data center and IT installations.",
      icon: Zap,
      image: "/team/avatar-design.png",
      expertise: ["Electrical Systems", "Power Distribution", "Equipment Installation", "Maintenance"],
      experience: "4+ Years",
    },
    {
      id: 5,
      name: "Usman",
      position: "Network Technical",
      description: "Designing and implementing robust network solutions and ensuring optimal connectivity and performance.",
      icon: Network,
      image: "/team/avatar-design.png",
      expertise: ["Network Design", "System Administration", "Technical Support", "Infrastructure"],
      experience: "7+ Years",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Meet Our Team</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Member Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center">
                    <member.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-stg-orange px-3 py-1 rounded-full text-sm font-semibold">{member.experience}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-200 text-sm font-semibold">{member.position}</p>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-orange-100 text-stg-orange px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                {/* <Link href={"/contact"}>
                  <button className="w-full bg-stg-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 group-hover:transform group-hover:-translate-y-1">
                    Connect with {member.name.split(" ")[0]}
                  </button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
