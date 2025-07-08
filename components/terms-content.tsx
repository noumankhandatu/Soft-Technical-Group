import { FileText, Shield, Users, AlertTriangle, Scale, Phone } from "lucide-react";

export default function TermsContent() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using STG's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our services.",
      ],
    },
    {
      icon: Users,
      title: "2. Service Description",
      content: [
        "STG provides comprehensive IT solutions including data center establishment, server customization, network infrastructure, surveillance systems, and technical support.",
        "Our services are primarily focused on government, semi-government, and private organizations in Pakistan.",
        "We reserve the right to modify, suspend, or discontinue any service at any time without notice.",
      ],
    },
    {
      icon: Shield,
      title: "3. User Responsibilities",
      content: [
        "Users must provide accurate and complete information when requesting services.",
        "You are responsible for maintaining the confidentiality of your account information.",
        "Users must not use our services for any unlawful or prohibited activities.",
        "Any misuse of our services may result in immediate termination of service.",
      ],
    },
    {
      icon: Scale,
      title: "4. Service Level Agreement",
      content: [
        "STG commits to providing 24/7 technical support for critical systems.",
        "We maintain 99.9% uptime for our data center services.",
        "Response times for support requests vary based on service level agreements.",
        "Scheduled maintenance will be communicated in advance when possible.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "5. Limitation of Liability",
      content: [
        "STG shall not be liable for any indirect, incidental, special, or consequential damages.",
        "Our liability is limited to the amount paid for the specific service in question.",
        "We are not responsible for damages caused by factors beyond our reasonable control.",
        "Force majeure events may affect service delivery without liability.",
      ],
    },
    {
      icon: FileText,
      title: "6. Intellectual Property",
      content: [
        "All content, software, and materials provided by STG remain our intellectual property.",
        "Users are granted a limited license to use our services for their intended purpose.",
        "Reproduction or distribution of our materials without permission is prohibited.",
        "Custom solutions developed for clients may have specific ownership terms.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These Terms of Service ("Terms") govern your use of STG's (Soft Technical Group) services, including our data center solutions, IT
              infrastructure services, and technical support. By engaging with our services, you agree to comply with these terms.
            </p>
            <div className="bg-stg-orange/10 border-l-4 border-stg-orange p-4 rounded-r-lg">
              <p className="text-gray-700 font-medium">For questions about these terms, please contact our legal team at legal@stg.com.pk</p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-stg-orange/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-stg-orange" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-stg-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Terms</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Payment Terms</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Payment terms are specified in individual service agreements</li>
                  <li>• Late payments may incur additional charges</li>
                  <li>• Refund policies vary by service type</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Termination</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Either party may terminate services with proper notice</li>
                  <li>• Immediate termination for breach of terms</li>
                  <li>• Data backup and transfer procedures apply</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-stg-orange to-orange-600 rounded-2xl p-8 mt-12 text-white">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-orange-100 mb-6">
                Our legal and customer service teams are here to help clarify any questions about our terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-stg-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Legal Team
                </a>
                <a
                  href="mailto:legal@stg.com.pk"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-stg-orange transition-colors duration-300"
                >
                  Email: legal@stg.com.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
