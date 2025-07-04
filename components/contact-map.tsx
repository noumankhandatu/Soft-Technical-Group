"use client"

export default function ContactMap() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="h-full flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <div className="w-16 h-1 bg-stg-orange mx-auto"></div>
          </div>

          {/* Map Container */}
          <div className="flex-1 min-h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-full">
              {/* Embedded Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789!2d74.3333333!3d35.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU1JzAwLjAiTiA3NMKwMjAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STG Office Location"
                className="rounded-2xl"
              ></iframe>

              {/* Map Overlay with Office Info */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">STG Office</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Office #1, First Floor</p>
                      <p>GITCO Gas Company</p>
                      <p>Near City Hospital</p>
                      <p>River View Road, Gilgit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="absolute bottom-6 right-6">
                <button className="bg-stg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-600 text-sm">Mon-Fri: 9AM-6PM</p>
                <p className="text-gray-600 text-sm">Sat: 9AM-2PM</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone Support</h4>
                <p className="text-gray-600 text-sm">24/7 Available</p>
                <p className="text-gray-600 text-sm">Emergency Support</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-stg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9m-6 0V7"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Parking</h4>
                <p className="text-gray-600 text-sm">Free Parking</p>
                <p className="text-gray-600 text-sm">Available On-Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
