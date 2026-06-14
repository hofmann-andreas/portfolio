import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Person, WebPage, WebSite } from "schema-dts";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["WONK", "opsz", "SOFT"],
});

import { JsonLd } from "@/components/json-ld/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://hofmannandreas.com/"),
  title: "Andreas Hofmann – Software Developer",
  description:
    "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
  authors: [{ name: "Andreas Hofmann" }],
  openGraph: {
    title: "Andreas Hofmann – Software Developer",
    description:
      "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
    url: "https://hofmannandreas.com/",
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
  "@id": "https://hofmannandreas.com/#website",
  name: "Andreas Hofmann – Portfolio",
  url: "https://hofmannandreas.com/",
  publisher: {
    "@id": "https://hofmannandreas.com/#person",
  },
};

const personJsonLd: Person = {
  "@type": "Person",
  "@id": "https://hofmannandreas.com/#person",
  name: "Andreas Hofmann",
  jobTitle: "Software Developer",
  url: "https://hofmannandreas.com/",
  sameAs: ["https://github.com/hofmann-andreas", "https://www.linkedin.com/in/hofmann-andreas"],
  worksFor: {
    "@type": "Organization",
    name: "Interdiscount",
  },
};

const homePageJsonLd: WebPage = {
  "@type": "WebPage",
  "@id": "https://hofmannandreas.com/#homepage",
  url: "https://hofmannandreas.com/",
  name: "Andreas Hofmann – Software Developer",
  isPartOf: {
    "@id": "https://hofmannandreas.com/#website",
  },
  about: {
    "@id": "https://hofmannandreas.com/#person",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd, homePageJsonLd],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.className=t==='light'?'':'dark';})()`,
          }}
        />
        <JsonLd id="schema-graph" data={jsonLdGraph} />
      </head>
      <body className={`${jakarta.variable} ${fraunces.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
