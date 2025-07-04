import type { Metadata } from "next";
import Header from "./header";
import Carousel from "../components/carousel";
import AboutSection from "../components/about-section";
import VisionSection from "../components/vision-section";
import MissionSection from "../components/mission-section";
import SuccessSection from "../components/success-section";
import SolutionsSection from "../components/solutions-section";

export const metadata: Metadata = {
  title: "STG - Premier IT Solutions & Data Centers in Gilgit-Baltistan Pakistan | Soft Technical Group",
  description:
    "STG (Soft Technical Group) - Leading IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Data center establishment, server customization, network infrastructure, government IT services. 4 tier data centers established. 24/7 technical support.",
  keywords: [
    "STG Pakistan",
    "Soft Technical Group Gilgit",
    "IT services Gilgit-Baltistan",
    "data center Pakistan",
    "network solutions Gilgit",
    "government IT services Pakistan",
    "server installation Gilgit",
    "technical support Pakistan",
    "automation systems Gilgit-Baltistan",
    "enterprise networking Pakistan",
    "IT infrastructure Gilgit",
    "computer services Pakistan",
    "technology solutions Gilgit-Baltistan",
  ],
  openGraph: {
    title: "STG - Premier IT Solutions & Data Centers in Pakistan | Soft Technical Group",
    description:
      "Leading IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Data center establishment, server customization, network infrastructure, and government IT services.",
    url: "https://stg.com.pk",
    images: [
      {
        url: "/images/stg-home-og.jpg",
        width: 1200,
        height: 630,
        alt: "STG - Soft Technical Group - Premier IT Solutions Pakistan",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://stg.com.pk/#webpage",
            url: "https://stg.com.pk",
            name: "STG - Premier IT Solutions & Data Centers in Pakistan",
            description:
              "Leading IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Data center establishment, server customization, network infrastructure, and government IT services.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://stg.com.pk/#website",
            },
            about: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
            mainEntity: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://stg.com.pk",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Carousel />
          <AboutSection />
          <VisionSection />
          <MissionSection />
          <SuccessSection />
        </main>
      </div>
    </>
  );
}
