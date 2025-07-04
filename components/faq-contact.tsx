export default function FAQContact() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in-up">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Our expert team is here to help you with any questions about our IT services, data center solutions, or
            technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-stg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              Contact Our Team
            </button>
            <button className="border-2 border-stg-orange text-stg-orange px-8 py-3 rounded-lg font-semibold hover:bg-stg-orange hover:text-white transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
