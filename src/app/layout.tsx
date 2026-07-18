import type { Metadata } from "next";
import { Manrope, Inter, Cormorant_Garamond } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import Analytics from "@/components/Analytics";
import { profile } from "@/data/profile";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://kaushal-portfolio-main.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Automation Consultant & Business Operations Strategist`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Kaushal Agrawal helps companies scale through AI automation, business operations, strategy, and digital transformation. Based in Munich, Germany. Founder of NexWerk AI.",
  keywords: [
    "AI Automation Consultant Germany",
    "AI Consultant Munich",
    "Business Process Automation Consultant",
    "Digital Transformation Consultant Germany",
    "Business Operations Strategist",
    "n8n Workflow Automation Consultant",
    "NexWerk AI",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — AI Automation Consultant & Business Operations Strategist`,
    description:
      "Turning business complexity into intelligent, automated systems. AI automation, business operations, strategy, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Automation Consultant`,
    description: profile.subhead,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressCountry: "DE",
    },
    sameAs: [profile.linkedin, profile.github, profile.nexwerk],
    knowsLanguage: profile.languages.map((l) => l.name),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${profile.nexwerk}/#organization`,
    name: profile.founderOf,
    url: profile.nexwerk,
    founder: { "@id": `${siteUrl}/#person` },
    description:
      "NexWerk AI designs and implements AI agents, workflow automation, and digital systems for SMEs and industrial businesses.",
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — AI Automation Consulting`,
    url: siteUrl,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: ["Germany", "Bavaria", "European Union"],
    description: profile.subhead,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Munich",
      addressCountry: "DE",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: profile.name,
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const jsonLdBlocks = [personJsonLd, organizationJsonLd, professionalServiceJsonLd, websiteJsonLd];

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {jsonLdBlocks.map((block) => (
          <script
            key={block["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
            suppressHydrationWarning
          />
        ))}
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
