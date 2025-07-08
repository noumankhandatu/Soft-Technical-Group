export default function TermsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-stg-orange font-semibold">Legal Information</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Please read these terms and conditions carefully before using STG's services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
            <span>Last Updated: January 2025</span>
            <span className="hidden sm:block">•</span>
            <span>Effective Date: January 1, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
