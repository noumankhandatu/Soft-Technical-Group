import type { Metadata } from "next";
import Header from "../header";
import SupportHero from "@/components/support-hero";
import SupportContent from "@/components/support-content";

export const metadata: Metadata = {
  title: "Technical Support | STG - 24/7 IT Support Pakistan",
  description:
    "Get 24/7 technical support from STG (Soft Technical Group) - Leading IT support provider in Gilgit-Baltistan, Pakistan. Data center support, server maintenance, network troubleshooting, and emergency IT services.",
  keywords:
    "STG technical support, 24/7 IT support Pakistan, data center support Gilgit, server maintenance Pakistan, network troubleshooting, emergency IT services, government IT support",
  openGraph: {
    title: "24/7 Technical Support | STG - Soft Technical Group",
    description: "Professional 24/7 technical support for data centers, servers, and IT infrastructure in Pakistan",
    url: "https://stg.com.pk/support",
    siteName: "STG - Soft Technical Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Technical Support | STG Pakistan",
    description: "Professional technical support for data centers and IT infrastructure in Pakistan",
  },
  alternates: {
    canonical: "https://stg.com.pk/support",
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SupportHero />
      <SupportContent />
    </div>
  );
}
