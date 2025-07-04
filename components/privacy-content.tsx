export default function PrivacyContent() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you contact us or request our services, we may collect personal information such as your name, email address, phone number, company name, and project requirements.",
        "Technical Information: We may collect technical information about your IT infrastructure to provide appropriate solutions and support.",
        "Communication Records: We maintain records of our communications with you to provide better service and support.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To provide IT solutions, data center services, technical support, and other services you request.",
        "Communication: To respond to your inquiries, provide updates on your projects, and send important service notifications.",
        "Service Improvement: To improve our services and develop new solutions that better meet your needs.",
        "Legal Compliance: To comply with applicable laws and regulations in Pakistan and Gilgit-Baltistan.",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted partners who assist us in providing services, under strict confidentiality agreements.",
        "We may disclose information when required by law or to protect our rights and the safety of our clients.",
        "All government projects are handled with the highest level of confidentiality and security.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.",
        "Our data centers are built with comprehensive security systems including physical security, access controls, and monitoring.",
        "We regularly update our security practices to address emerging threats and maintain the highest standards.",
        "All sensitive data is encrypted and stored securely in our protected systems.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "We retain your information only as long as necessary to provide services and comply with legal requirements.",
        "Project-related information is maintained for the duration of the service contract and applicable warranty periods.",
        "You may request deletion of your personal information, subject to legal and contractual obligations.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access: You have the right to access the personal information we hold about you.",
        "Correction: You can request correction of any inaccurate or incomplete information.",
        "Deletion: You may request deletion of your personal information, subject to legal requirements.",
        "Portability: You can request a copy of your information in a commonly used format.",
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        "Our website may use cookies to improve user experience and analyze website usage.",
        "You can control cookie settings through your browser preferences.",
        "We do not use cookies to collect personal information without your consent.",
      ],
    },
    {
      title: "Third-Party Services",
      content: [
        "Our website may contain links to third-party websites or services.",
        "We are not responsible for the privacy practices of third-party sites.",
        "We recommend reviewing the privacy policies of any third-party services you use.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
        "We will notify you of any material changes by posting the updated policy on our website.",
        "Your continued use of our services after changes indicates acceptance of the updated policy.",
      ],
    },
    {
      title: "Contact Information",
      content: [
        "If you have questions about this privacy policy or our data practices, please contact us:",
        "Email: info@stg.com.pk",
        "Address: Office #1, First Floor, GITCO Gas Company, Near City Hospital, River View Road, Gilgit",
        "Phone: [Your phone number]",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 animate-fade-in-up">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Soft Technical Group (STG), we are committed to protecting your privacy and ensuring the security of
                your personal information. This Privacy Policy explains how we collect, use, and safeguard your
                information when you use our services or visit our website.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-stg-orange">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About Our Privacy Policy?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
              We're committed to transparency and will be happy to address any concerns you may have.
            </p>
            <button className="bg-stg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
