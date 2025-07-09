import { Clock, Phone, Mail, MessageCircle } from "lucide-react";

export default function SupportHero() {
  return (
    <section className="bg-gradient-to-br from-stg-orange via-orange-600 to-red-600 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-semibold">24/7 Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Technical Support
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional 24/7 technical support for all your IT infrastructure needs
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Phone className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-orange-100 mb-4">24/7 Emergency Support</p>
              <a href="tel:+92-321-5570471" className="text-white font-semibold hover:text-orange-200">
                +92-321-5570471
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-orange-100 mb-4">Technical Issues & Queries</p>
              <a href="mailto:Info.softtg@gmail.com" className="text-white font-semibold hover:text-orange-200">
                Info.softtg@gmail.com
              </a>
            </div>

            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-orange-100 mb-4">Instant Technical Assistance</p>
              <button className="text-white font-semibold hover:text-orange-200">Start Chat</button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
