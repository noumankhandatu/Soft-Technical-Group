import type { Metadata } from "next";
import Header from "../header";
import TermsHero from "@/components/terms-hero";
import TermsContent from "@/components/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | STG - Soft Technical Group Pakistan",
  description:
    "Terms of Service for STG (Soft Technical Group) - Leading IT solutions provider in Gilgit-Baltistan, Pakistan. Read our terms and conditions for IT services, data center solutions, and technical support.",
  keywords:
    "STG terms of service, IT services terms Pakistan, data center terms conditions, technical support agreement, Gilgit-Baltistan IT terms, government IT services terms",
  openGraph: {
    title: "Terms of Service | STG - Soft Technical Group",
    description: "Terms of Service for STG's IT solutions, data center services, and technical support in Pakistan",
    url: "https://stg.com.pk/terms",
    siteName: "STG - Soft Technical Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | STG - Soft Technical Group",
    description: "Terms of Service for STG's IT solutions and data center services in Pakistan",
  },
  alternates: {
    canonical: "https://stg.com.pk/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TermsHero />
      <TermsContent />
    </div>
  );
}
