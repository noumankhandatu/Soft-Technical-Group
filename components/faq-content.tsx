"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "General Services",
      faqs: [
        {
          question: "What services does STG provide?",
          answer:
            "STG provides comprehensive IT solutions including data center establishment, server customization, networking solutions, software development, surveillance systems, computer electronics, and 24/7 technical support.",
        },
        {
          question: "Do you serve both government and private organizations?",
          answer:
            "Yes, we serve Government, semi-Government, and Private organizations. We have successfully established data centers for various government departments in Gilgit-Baltistan.",
        },
        {
          question: "What makes STG unique in the region?",
          answer:
            "STG is the only service-based company in the region that focuses on establishing automation systems and standard data centers. We have successfully established 4 tier data centers in Gilgit-Baltistan.",
        },
      ],
    },
    {
      title: "Data Center Services",
      faqs: [
        {
          question: "What type of data centers do you build?",
          answer:
            "We specialize in three-tier data centers with complete infrastructure including raised flooring, environmental management systems, fire protection, electrical systems, and security solutions.",
        },
        {
          question: "Do you provide ongoing maintenance for data centers?",
          answer:
            "Yes, we provide comprehensive maintenance services including preventative maintenance, 24/7 monitoring, and technical support to ensure optimal performance of your data center.",
        },
        {
          question: "Can you customize data center solutions?",
          answer:
            "We provide customized data center solutions based on your specific requirements, including SAN customization and high-end server configurations.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "Do you offer 24/7 technical support?",
          answer:
            "Yes, we provide round-the-clock technical support to ensure your systems run smoothly without interruption. Our skilled technicians are always ready to assist.",
        },
        {
          question: "What types of equipment do you service?",
          answer:
            "We service laptops, desktops, servers, tablets, phones, GPS consoles, and various computer electronics. We also provide repair services on monthly and annual basis.",
        },
        {
          question: "Do you provide on-site support?",
          answer:
            "Yes, we provide on-site technical support and can visit your location for installations, maintenance, and troubleshooting as needed.",
        },
      ],
    },
    {
      title: "Software & Development",
      faqs: [
        {
          question: "Do you develop custom software applications?",
          answer:
            "Yes, we develop both desktop and web applications tailored to your specific business needs. We also provide system integration services.",
        },
        {
          question: "Do you provide OEM software solutions?",
          answer:
            "Yes, we offer genuine OEM software solutions for maximum compatibility and performance, ensuring proper licensing and compliance.",
        },
        {
          question: "Can you integrate existing systems?",
          answer:
            "We specialize in system integration and can help connect your existing systems with new solutions for seamless operations.",
        },
      ],
    },
    {
      title: "Pricing & Contracts",
      faqs: [
        {
          question: "How do you structure your pricing?",
          answer:
            "We offer competitive pricing with transparent cost structures. We provide detailed quotes based on your specific requirements and offer both project-based and ongoing service contracts.",
        },
        {
          question: "Do you offer service contracts?",
          answer:
            "Yes, we offer monthly and annual service contracts for ongoing maintenance and support, ensuring consistent service delivery and cost predictability.",
        },
        {
          question: "Can I get a free consultation?",
          answer:
            "Yes, we provide free initial consultations to understand your requirements and recommend the best solutions for your needs.",
        },
      ],
    },
  ]

  let itemIndex = 0

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-stg-orange">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const currentIndex = itemIndex++
                  const isOpen = openItems.includes(currentIndex)

                  return (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-stg-orange flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-stg-orange flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
