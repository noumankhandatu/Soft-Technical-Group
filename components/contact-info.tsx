import { MapPin, Phone, Mail, Clock, Building, Users } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Office #1, First Floor", "GITCO Gas Company", "Near City Hospital", "River View Road, Gilgit"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+92-XXX-XXXXXXX", "+92-XXX-XXXXXXX", "Landline: XXX-XXXXXXX"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@stg.com.pk", "support@stg.com.pk", "sales@stg.com.pk"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const quickStats = [
    { icon: Building, number: "4", label: "Data Centers Built" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "24/7", label: "Support Available" },
    { icon: Phone, number: "17+", label: "Years Experience" },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Get In Touch</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 animate-fade-in-up animation-delay-400">
            Ready to start your next project? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <contact.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-stg-orange transition-colors duration-300">
                {contact.title}
              </h3>
              <div className="space-y-2">
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-stg-orange mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
