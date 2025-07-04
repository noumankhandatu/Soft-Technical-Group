export default function DataCenterMission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Data Center</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-2xl shadow-lg animate-fade-in-up animation-delay-400">
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              To provide the Area with <strong className="text-stg-orange">quality brand-name products</strong>,
              computer and networking solutions,{" "}
              <strong className="text-stg-orange">reliable and professional technical support</strong>, and{" "}
              <strong className="text-stg-orange">unparalleled customer service</strong> through the application of the
              principles, and to earn a fair profit for our employee-owners and stakeholders by embracing sound,{" "}
              <strong className="text-stg-orange">ethical business practices</strong>.
            </p>
          </div>

          <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
            <div className="bg-stg-orange p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Regional Excellence</h3>
              <p className="text-xl opacity-90">
                STG is the <strong>only service-based company</strong> in the region that focuses on establishing{" "}
                <strong>automation systems</strong> and <strong>standard data centres</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
