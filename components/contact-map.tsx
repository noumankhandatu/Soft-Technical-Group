"use client";

export default function ContactMap() {
  return (
    <section className="py-16  to-white">
      <div className="container mx-auto px-4">
        <div className="h-full flex flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789!2d74.3333333!3d35.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU1JzAwLjAiTiA3NMKwMjAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100vh" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="STG Office Location"
            className="rounded-2xl"
          ></iframe>

          {/* Location Details */}
          {/* <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
