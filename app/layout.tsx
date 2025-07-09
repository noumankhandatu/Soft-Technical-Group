import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import ScrollAnimationProvider from "../components/scroll-animation-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://stg.com.pk"),
  title: {
    default: "STG - Soft Technical Group | Leading IT Solutions & Data Centers in Gilgit-Baltistan Pakistan",
    template: "%s | STG - Soft Technical Group Pakistan",
  },
  description:
    "STG (Soft Technical Group) - Premier IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Specializing in data center establishment, server customization, network infrastructure, government IT services, and 24/7 technical support. 4 tier data centers established.",

  keywords: [
    "STG",
    "Soft Technical Group",
    "IT services Pakistan",
    "data center Gilgit",
    "network solutions Gilgit-Baltistan",
    "government IT services",
    "server installation Pakistan",
    "technical support Gilgit",
    "automation systems Pakistan",
    "enterprise networking Gilgit",
    "SAN customization",
    "high-end servers",
    "surveillance systems Pakistan",
    "computer electronics Gilgit",
    "software development Pakistan",
    "OEM software solutions",
    "GPS equipment Pakistan",
    "communication systems Gilgit",
    "IT infrastructure Pakistan",
    "data center establishment",
    "server customization Gilgit",
    "network optimization Pakistan",
    "IT consulting Gilgit-Baltistan",
    "technology solutions Pakistan",
    "digital transformation Gilgit",
    "IT support services",
    "computer repair Gilgit",
    "networking equipment Pakistan",
    "enterprise solutions Gilgit",
    "IT maintenance Pakistan",
    "system integration Gilgit-Baltistan",
  ],
  authors: [{ name: "Soft Technical Group (STG)" }],
  creator: "STG - Soft Technical Group",
  publisher: "Soft Technical Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "IT Services and Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stg.com.pk",
    siteName: "STG - Soft Technical Group",
    title: "STG - Leading IT Solutions & Data Centers in Pakistan | Soft Technical Group",
    description:
      "Premier IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Data center establishment, server customization, network infrastructure, and government IT services. 4 tier data centers established.",
    images: [
      {
        url: "/images/stg-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STG - Soft Technical Group - IT Solutions Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STG - Leading IT Solutions & Data Centers in Pakistan",
    description:
      "Premier IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Data center establishment, server customization, network infrastructure.",
    images: ["/images/stg-twitter-card.jpg"],
    creator: "@STGPakistan",
    site: "@STGPakistan",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://stg.com.pk",
    languages: {
      "en-US": "https://stg.com.pk",
      "ur-PK": "https://stg.com.pk/ur",
    },
  },
  other: {
    "geo.region": "PK-GB",
    "geo.placename": "Gilgit, Gilgit-Baltistan, Pakistan",
    "geo.position": "35.9166667;74.3333333",
    ICBM: "35.9166667, 74.3333333",
  },
  generator: "v0.dev",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Soft Technical Group (STG)",
              alternateName: ["STG", "Soft Technical Group Pakistan"],
              url: "https://stg.com.pk",
              logo: "https://stg.com.pk/images/stg-logo.png",
              description:
                "Premier IT solutions provider in Gilgit-Baltistan Pakistan since 2006. Specializing in data center establishment, server customization, network infrastructure, and government IT services.",
              foundingDate: "2006",
              founder: {
                "@type": "Person",
                name: "Zahid",
                jobTitle: "Chief Executive Officer",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office #1, First Floor, GITCO Gas Company, Near City Hospital, River View Road",
                addressLocality: "Gilgit",
                addressRegion: "Gilgit-Baltistan",
                postalCode: "15100",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.9166667,
                longitude: 74.3333333,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+923215570471",
                  contactType: "customer service",
                  availableLanguage: ["English", "Urdu"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "18:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+923215570471",
                  contactType: "technical support",
                  availableLanguage: ["English", "Urdu"],
                  hoursAvailable: "24/7",
                },
              ],
              email: "Info.softtg@gmail.com",
              sameAs: ["https://www.facebook.com/STGPakistan", "https://www.linkedin.com/company/stg-pakistan", "https://twitter.com/STGPakistan"],
              areaServed: {
                "@type": "State",
                name: "Gilgit-Baltistan",
                containedInPlace: {
                  "@type": "Country",
                  name: "Pakistan",
                },
              },
              serviceType: [
                "Data Center Establishment",
                "Server Customization",
                "Network Infrastructure",
                "IT Consulting",
                "Technical Support",
                "Software Development",
                "Surveillance Systems",
                "Government IT Services",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Data Center Establishment",
                      description: "Complete data center setup with three-tier architecture",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Server Customization",
                      description: "High-end server configuration and SAN customization",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Network Infrastructure",
                      description: "Enterprise networking solutions and optimization",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Organization",
                    name: "Finance Department, Government of Gilgit-Baltistan",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "STG has been instrumental in modernizing our financial operations. Their data center solution has significantly improved our efficiency and data security.",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://stg.com.pk/#organization",
              name: "Soft Technical Group (STG)",
              image: "https://stg.com.pk/images/stg-office.jpg",
              telephone: "+923215570471",
              email: "Info.softtg@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office #1, First Floor, GITCO Gas Company, Near City Hospital, River View Road",
                addressLocality: "Gilgit",
                addressRegion: "Gilgit-Baltistan",
                postalCode: "15100",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.9166667,
                longitude: 74.3333333,
              },
              url: "https://stg.com.pk",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Bank Transfer", "Check"],
              currenciesAccepted: "PKR",
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#F0803C" />
        <meta name="msapplication-TileColor" content="#F0803C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="STG Pakistan" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ScrollAnimationProvider>
          {children}
          <Footer />
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
