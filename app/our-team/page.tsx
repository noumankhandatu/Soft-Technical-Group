import type { Metadata } from "next";
import Header from "../header";
import TeamHero from "../../components/team-hero";
import TeamIntro from "../../components/team-intro";
// import CEOStory from "../../components/ceo-story";
import TeamMembers from "../../components/team-members";
import TeamValues from "../../components/team-values";

export const metadata: Metadata = {
  title: "Our Team Pakistan | STG - Expert IT Professionals & Engineers Gilgit-Baltistan",
  description:
    "Meet STG's expert team in Pakistan. Experienced IT professionals, engineers, developers, and project managers. Led by CEO Zahid with 17+ years experience. Professional IT team Gilgit-Baltistan.",
  keywords: [
    "IT team Pakistan",
    "IT professionals Gilgit",
    "software engineers Pakistan",
    "network engineers Gilgit-Baltistan",
    "IT experts Pakistan",
    "technical team Gilgit",
    "project managers Pakistan",
    "IT specialists Gilgit-Baltistan",
    "experienced IT professionals",
    "technology experts Pakistan",
    "IT consultants Gilgit",
    "technical experts Pakistan",
  ],
  openGraph: {
    title: "Our Team Pakistan | STG - Expert IT Professionals & Engineers",
    description:
      "Meet STG's expert team in Pakistan. Experienced IT professionals, engineers, developers, and project managers led by CEO Zahid with 17+ years experience.",
    url: "https://stg.com.pk/our-team",
    images: [
      {
        url: "/images/stg-team-og.jpg",
        width: 1200,
        height: 630,
        alt: "STG Team Pakistan - Expert IT Professionals & Engineers",
      },
    ],
  },
  alternates: {
    canonical: "https://stg.com.pk/our-team",
  },
};

export default function OurTeamPage() {
  return (
    <>
      {/* Structured Data for Team */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://stg.com.pk/#organization",
            employee: [
              {
                "@type": "Person",
                name: "Zahid",
                jobTitle: "Chief Executive Officer",
                description: "Visionary leader with 17+ years experience in IT infrastructure and business development",
                worksFor: {
                  "@type": "Organization",
                  "@id": "https://stg.com.pk/#organization",
                },
              },
              {
                "@type": "Person",
                name: "Shahab Anjum",
                jobTitle: "Manager Finance",
                description: "Managing financial operations and ensuring sound fiscal management across all STG projects",
                worksFor: {
                  "@type": "Organization",
                  "@id": "https://stg.com.pk/#organization",
                },
              },
              {
                "@type": "Person",
                name: "Ehsan Mehmood",
                jobTitle: "Software Engineer",
                description: "Developing innovative software solutions and custom applications",
                worksFor: {
                  "@type": "Organization",
                  "@id": "https://stg.com.pk/#organization",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <TeamHero />
          <TeamIntro />
          {/* <CEOStory /> */}
          <TeamMembers />
          <TeamValues />
        </main>
      </div>
    </>
  );
}
