export default function FAQHero() {
  return (
    <section className="py-16 bg-gradient-to-r from-stg-orange to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Find answers to common questions about our IT services, data centers, and support
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-lg opacity-80">
              Can't find what you're looking for? Contact our team for personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
