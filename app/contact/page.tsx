import type { Metadata } from "next"
import Header from "../header"
import ContactHero from "../../components/contact-hero"
import ContactInfo from "../../components/contact-info"
import ContactForm from "../../components/contact-form"
import ContactMap from "../../components/contact-map"

export const metadata: Metadata = {
  title: "Contact STG Pakistan | IT Support Gilgit-Baltistan | Soft Technical Group Office",
  description:
    "Contact STG (Soft Technical Group) in Gilgit, Pakistan. Office: GITCO Gas Company, River View Road. Phone: +92-XXX-XXXXXXX. Email: info@stg.com.pk. 24/7 IT support available.",
  keywords: [
    "contact STG Pakistan",
    "IT support Gilgit",
    "STG office Gilgit",
    "technical support Pakistan",
    "IT help Gilgit-Baltistan",
    "STG phone number",
    "STG email",
    "IT consultation Pakistan",
    "emergency IT support",
    "24/7 technical support",
    "IT services contact",
    "STG address Gilgit",
  ],
  openGraph: {
    title: "Contact STG Pakistan | IT Support Gilgit-Baltistan",
    description:
      "Contact STG (Soft Technical Group) in Gilgit, Pakistan. 24/7 IT support available. Office: GITCO Gas Company, River View Road.",
    url: "https://stg.com.pk/contact",
    images: [
      {
        url: "/images/stg-contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact STG Pakistan - IT Support Gilgit-Baltistan",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact STG Pakistan",
            description: "Contact information for Soft Technical Group (STG) in Gilgit-Baltistan Pakistan",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ContactHero />
          <ContactInfo />
          <div className="grid lg:grid-cols-2 gap-0">
            <ContactForm />
            <ContactMap />
          </div>
        </main>
      </div>
    </>
  )
}
