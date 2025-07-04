import type { Metadata } from "next";
import Header from "../header";
import ProjectsHero from "../../components/projects-hero";
import ProjectsOverview from "../../components/projects-overview";
import TrustedClientsCarousel from "../../components/trusted-clients-carousel";
import ProjectsGrid from "../../components/projects-grid";
import ProjectsStats from "../../components/projects-stats";

export const metadata: Metadata = {
  title: "Major IT Projects Pakistan | STG - Government Data Centers & Enterprise Solutions Gilgit",
  description:
    "STG major IT projects in Pakistan. 4 tier data centers for government departments. Finance, Police, Excise & Taxation, Agriculture, Health departments. Enterprise IT solutions Gilgit-Baltistan.",
  keywords: [
    "major IT projects Pakistan",
    "government data centers",
    "enterprise IT solutions Gilgit",
    "government IT projects",
    "finance department data center",
    "police department IT",
    "taxation department Pakistan",
    "agriculture IT solutions",
    "health department data center",
    "university IT infrastructure",
    "government IT services Pakistan",
    "enterprise projects Gilgit-Baltistan",
    "IT infrastructure projects",
  ],
  openGraph: {
    title: "Major IT Projects Pakistan | STG - Government Data Centers & Enterprise Solutions",
    description:
      "STG major IT projects in Pakistan. 4 tier data centers for government departments including Finance, Police, Excise & Taxation, Agriculture, and Health departments.",
    url: "https://stg.com.pk/major-projects",
    images: [
      {
        url: "/images/stg-projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "STG Major IT Projects Pakistan - Government Data Centers",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk/major-projects",
  },
};

export default function MajorProjectsPage() {
  return (
    <>
      {/* Structured Data for Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Major IT Projects Pakistan",
            description:
              "Comprehensive showcase of major IT infrastructure projects completed by STG in Gilgit-Baltistan Pakistan, including government data centers and enterprise solutions.",
            creator: {
              "@type": "Organization",
              "@id": "https://stg.com.pk/#organization",
            },
            about: [
              {
                "@type": "Project",
                name: "Government Data Centers",
                description: "4 tier data centers established for various government departments",
              },
              {
                "@type": "Project",
                name: "Enterprise IT Solutions",
                description: "Complete IT infrastructure for educational and private institutions",
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ProjectsHero />
          <ProjectsOverview />
          <ProjectsGrid />
          <ProjectsStats />
        </main>
      </div>
    </>
  );
}
