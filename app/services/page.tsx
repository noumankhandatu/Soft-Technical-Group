import type { Metadata } from "next";
import Header from "../header";
import ServicesContent from "../../components/services-content";
import ServicesGrid from "../../components/services-grid";
import WhySTG from "../../components/why-stg";

export const metadata: Metadata = {
  title: "IT Services Pakistan | STG - Network Solutions, Server Systems & Technical Support Gilgit",
  description:
    "Comprehensive IT services by STG in Gilgit-Baltistan Pakistan. Storage solutions, server systems, networking, software development, surveillance systems, and 24/7 technical support. Government and enterprise IT services.",
  keywords: [
    "IT services Pakistan",
    "network solutions Gilgit",
    "server systems Pakistan",
    "technical support Gilgit-Baltistan",
    "storage solutions Pakistan",
    "surveillance systems Gilgit",
    "software development Pakistan",
    "computer electronics Gilgit",
    "networking solutions Pakistan",
    "enterprise IT services",
    "government IT support",
    "OEM software Pakistan",
    "GPS equipment Gilgit",
    "communication systems Pakistan",
    "IT consulting Gilgit-Baltistan",
  ],
  openGraph: {
    title: "IT Services Pakistan | STG - Network Solutions & Technical Support",
    description:
      "Comprehensive IT services by STG in Gilgit-Baltistan Pakistan. Storage solutions, server systems, networking, software development, and 24/7 technical support.",
    url: "https://stg.com.pk/services",
    images: [
      {
        url: "/images/stg-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "STG IT Services Pakistan - Network Solutions & Technical Support",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT Services Pakistan",
            provider: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
            description:
              "Comprehensive IT services including storage solutions, server systems, networking, software development, surveillance systems, and 24/7 technical support in Gilgit-Baltistan Pakistan.",
            serviceType: "Information Technology Services",
            areaServed: {
              "@type": "State",
              name: "Gilgit-Baltistan",
              containedInPlace: {
                "@type": "Country",
                name: "Pakistan",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "IT Services Catalog",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Storage Solutions",
                    description: "Secure, scalable, and efficient storage for your data",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Server Systems & Applications",
                    description: "Powerful servers designed to meet your business needs",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Networking Solutions",
                    description: "Reliable, fast, and secure networking solutions",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full scale-[1.2]">
              <iframe
                className="w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/MM4JybO9Yxw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playlist=MM4JybO9Yxw"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-[60px] font-bold">Soft Technical Group</h1>
              <p className="text-white text-lg text-center max-w-4xl mt-4">
                Empowering businesses with innovative software solutions, Soft Technical Group delivers cutting-edge web and mobile applications
                tailored to your needs. From strategy to execution, we help you thrive in the digital world.
              </p>
            </div>
          </div>

          <ServicesContent />
          <ServicesGrid />
          <WhySTG />
        </main>
      </div>
    </>
  );
}
