import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLdSchema from "@/components/JsonLdSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: { other: { 'msvalidate.01': '4238BAC83D0A84184DB5C8AEF5C3CE14' } },
  title: "AI-Readiness für die Mannheimer Gastronomie | AI Shift Drift",
  description:
    "4 kostenlose KI-Scanner für Gastronomiebetriebe in Mannheim. Sichtbarkeit, Reputation, Agent-Readiness und Sicherheit, kostenlos prüfen.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.ki-gastronomie.com/staedte/mannheim",
  },  openGraph: {
    title: "AI-Readiness für die Mannheimer Gastronomie | AI Shift Drift",
    description:
      "4 kostenlose KI-Scanner für Gastronomiebetriebe in Mannheim. Sichtbarkeit, Reputation, Agent-Readiness und Sicherheit, kostenlos prüfen.",
    locale: "de_DE",
    url: "https://www.ki-gastronomie.com/staedte/mannheim",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <JsonLdSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Shift Drift",
              "alternateName": "ASD",
              "url": "https://www.ki-gastronomie.com",
              "logo": "https://www.ki-gastronomie.com/logo.png",
              "description": "Kostenlose KI-Readiness-Scanner f\u00fcr deutsche Restaurants und KMUs. Pr\u00fcft ob KI-Systeme dein Unternehmen finden, empfehlen und ob es nutzbar f\u00fcr KI-Agenten ist.",
              "foundingDate": "2026",
              "foundingLocation": {
                "@type": "Place",
                "addressLocality": "Mannheim",
                "addressCountry": "DE"
              },
              "legalName": "Pachyon UG",
              "sameAs": [
                "https://github.com/perspectivetwist",
                "https://www.crunchbase.com/organization/ai-shift-drift"
              ]
            })
          }}
        />
        <AnnouncementBanner />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
