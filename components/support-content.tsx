import { Clock, Shield, Users, Server, Network, Database, AlertTriangle, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function SupportContent() {
  const supportServices = [
    {
      icon: Server,
      title: "Server Support",
      description: "24/7 monitoring and maintenance of server infrastructure",
      features: ["Hardware diagnostics", "Performance optimization", "Security updates", "Backup management"],
    },
    {
      icon: Network,
      title: "Network Support",
      description: "Complete network infrastructure support and troubleshooting",
      features: ["Network monitoring", "Connectivity issues", "Security configuration", "Performance tuning"],
    },
    {
      icon: Database,
      title: "Data Center Support",
      description: "Comprehensive data center operations and maintenance",
      features: ["Infrastructure monitoring", "Environmental controls", "Power management", "Security systems"],
    },
    {
      icon: Shield,
      title: "Security Support",
      description: "Cybersecurity monitoring and incident response",
      features: ["Threat monitoring", "Incident response", "Security audits", "Compliance support"],
    },
  ];

  const supportLevels = [
    {
      level: "Level 1 - Basic Support",
      description: "General inquiries and basic troubleshooting",
      responseTime: "Within 4 hours",
      availability: "Business hours (9 AM - 6 PM)",
      color: "bg-blue-500",
    },
    {
      level: "Level 2 - Priority Support",
      description: "Advanced technical issues and system problems",
      responseTime: "Within 2 hours",
      availability: "Extended hours (8 AM - 10 PM)",
      color: "bg-stg-orange",
    },
    {
      level: "Level 3 - Critical Support",
      description: "Emergency situations and critical system failures",
      responseTime: "Within 30 minutes",
      availability: "24/7 availability",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-20">
      {/* Support Services */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive technical support covering all aspects of your IT infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-stg-orange/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-stg-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Support Levels & Response Times</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Different support levels to match your business needs and urgency requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${level.color} h-2`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{level.level}</h3>
                  <p className="text-gray-600 mb-6">{level.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-stg-orange mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Response Time</p>
                        <p className="text-gray-600">{level.responseTime}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-stg-orange mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Availability</p>
                        <p className="text-gray-600">{level.availability}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Support Available 24/7</h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Critical system failures and emergency situations require immediate attention. Our emergency support team is available around the
                clock to resolve critical issues.
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="tel:+92-321-5570471"
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Emergency Hotline
                </a>
                <a
                  href="mailto:emergency@stg.com.pk"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="h-6 w-6 mr-3" />
                  Emergency Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Support Now</h2>
              <p className="text-xl text-gray-600">Multiple ways to reach our technical support team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <Phone className="h-12 w-12 text-stg-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>General Support:</p>
                  <p className="font-semibold text-stg-orange">+92-321-5570471</p>
                  <p>Emergency Hotline:</p>
                  <p className="font-semibold text-red-600">+92-321-5570471</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <Mail className="h-12 w-12 text-stg-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Technical Support:</p>
                  <p className="font-semibold text-stg-orange">Info.softtg@gmail.com</p>
                  <p>Emergency Issues:</p>
                  <p className="font-semibold text-red-600">emergency@stg.com.pk</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-stg-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">On-Site Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Available in Gilgit-Baltistan</p>
                  <p className="font-semibold">Emergency on-site visits</p>
                  <p>Scheduled maintenance</p>
                  <p className="font-semibold text-stg-orange">Contact for details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
