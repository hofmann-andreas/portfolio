import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Person, WebSite } from "schema-dts";

import { JsonLd } from "@/components/json-ld/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://hofmannandreas.com"),
  title: "Andreas Hofmann – Software Developer",
  description:
    "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
  authors: [{ name: "Andreas Hofmann" }],
  manifest: "https://hofmannandreas.com/next-assets/manifest.json",
  icons: {
    icon: "https://hofmannandreas.com/next-assets/icons/favicon.ico",
    apple: "https://hofmannandreas.com/next-assets/icons/apple-icon.png",
  },
  openGraph: {
    title: "Andreas Hofmann – Software Developer",
    description:
      "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
    url: "https://hofmannandreas.com",
    siteName: "Andreas Hofmann Portfolio",
    locale: "en_CH",
    type: "website",
    images: ["https://hofmannandreas.com/next-assets/icons/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Hofmann – Software Developer",
    description:
      "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
    images: ["https://hofmannandreas.com/next-assets/icons/og.png"],
  },
};

const websiteJsonLd: WebSite = {
  "@type": "WebSite",
  name: "Andreas Hofmann – Portfolio",
  url: "https://hofmannandreas.com",
};

const personJsonLd: Person = {
  "@type": "Person",
  name: "Andreas Hofmann",
  jobTitle: "Software Developer",
  url: "https://hofmannandreas.com",
  sameAs: ["https://github.com/hofmann-andreas", "https://www.linkedin.com/in/hofmann-andreas"],
  worksFor: {
    "@type": "Organization",
    name: "Interdiscount",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd id="person-jsonld" data={personJsonLd} />
        <JsonLd id="website-jsonld" data={websiteJsonLd} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
