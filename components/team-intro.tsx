export default function TeamIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Team</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-2xl shadow-lg animate-fade-in-up animation-delay-400">
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              At STG, <strong className="text-stg-orange">our team is our greatest asset</strong>. We are a group of{" "}
              <strong className="text-stg-orange">
                experienced engineers, developers, IT specialists, and project managers
              </strong>{" "}
              who share a common goal: delivering innovative, reliable, and impactful technology solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-center mt-6">
              With a <strong className="text-stg-orange">collaborative spirit</strong> and a deep understanding of
              modern IT environments, our team ensures every project is executed with{" "}
              <strong className="text-stg-orange">precision and professionalism</strong>. From planning to
              implementation and support, we work hand-in-hand with our clients because{" "}
              <strong className="text-stg-orange">your success is our mission</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
