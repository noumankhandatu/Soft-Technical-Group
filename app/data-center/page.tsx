import type { Metadata } from "next"
import Header from "../header"
import DataCenterHero from "../../components/data-center-hero"
import DataCenterMission from "../../components/data-center-mission"
import DataCenterProjectsCarousel from "../../components/data-center-projects-carousel"
import DataCenterFeatures from "../../components/data-center-features"
import DataCenterProjects from "../../components/data-center-projects"
import DataCenterExpertise from "../../components/data-center-expertise"

export const metadata: Metadata = {
  title: "Data Center Pakistan | STG - Tier 3 Data Center Establishment & Management Gilgit-Baltistan",
  description:
    "STG - Leading data center establishment in Pakistan. 4 tier data centers built in Gilgit-Baltistan. Complete data center design, construction, management, and maintenance services. Government data center solutions.",
  keywords: [
    "data center Pakistan",
    "data center Gilgit",
    "tier data center Pakistan",
    "data center establishment",
    "data center design Pakistan",
    "server room setup Gilgit",
    "data center construction",
    "data center management",
    "government data center Pakistan",
    "enterprise data center Gilgit",
    "data center infrastructure",
    "server installation Pakistan",
    "data center security",
    "data center maintenance Gilgit-Baltistan",
  ],
  openGraph: {
    title: "Data Center Pakistan | STG - Tier 3 Data Center Establishment",
    description:
      "Leading data center establishment in Pakistan. 4 tier data centers built in Gilgit-Baltistan. Complete data center design, construction, and management services.",
    url: "https://stg.com.pk/data-center",
    images: [
      {
        url: "/images/stg-datacenter-og.jpg",
        width: 1200,
        height: 630,
        alt: "STG Data Center Pakistan - Tier 3 Data Center Establishment",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk/data-center",
  },
}

export default function DataCenterPage() {
  return (
    <>
      {/* Structured Data for Data Center Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Data Center Establishment Pakistan",
            provider: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
            description:
              "Complete data center establishment services including design, construction, management, and maintenance. 4 tier data centers successfully built in Gilgit-Baltistan Pakistan.",
            serviceType: "Data Center Services",
            category: "Information Technology Infrastructure",
            areaServed: {
              "@type": "State",
              name: "Gilgit-Baltistan",
              containedInPlace: {
                "@type": "Country",
                name: "Pakistan",
              },
            },
            offers: {
              "@type": "Offer",
              description: "Professional data center establishment and management services",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <DataCenterHero />
          <DataCenterMission />
          <DataCenterProjectsCarousel />
          <DataCenterFeatures />
          <DataCenterProjects />
          <DataCenterExpertise />
        </main>
      </div>
    </>
  )
}
