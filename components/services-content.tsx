export default function ServicesContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Services Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">Our Services</h2>
            <div className="w-24 h-1 bg-stg-orange mx-auto mb-8 animate-fade-in-up animation-delay-200"></div>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in-up animation-delay-400">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              At Soft Technical Group (STG), we operate with a{" "}
              <strong className="text-stg-orange">dedicated team of specialists</strong> committed to delivering
              best-in-class IT solutions and unmatched technical support. Our skilled technicians are always ready to
              assist, guide, and resolve any challenges you face — quickly, efficiently, and professionally.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              As a dynamic and experienced company, STG focuses on delivering{" "}
              <strong className="text-stg-orange">fully optimized networking solutions</strong> and comprehensive IT
              services tailored to meet the unique needs of our clients. We aim to become your{" "}
              <strong className="text-stg-orange">single point of accountability</strong>, ensuring you gain
              value-driven results without unnecessary costs.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              At STG, we combine <strong className="text-stg-orange">innovation, expertise, and dedication</strong> to
              deliver IT environments that empower businesses and organizations to thrive. Whether you are looking to
              set up a state-of-the-art data center, upgrade your communication systems, or develop custom applications,
              STG is your trusted technology partner.
            </p>
          </div>

          {/* Core Expertise Header */}
          <div className="text-center mb-12 animate-fade-in-up animation-delay-600">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Expertise Includes:</h3>
            <div className="w-16 h-1 bg-stg-orange mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
