import { JsonLd } from "@/components/json-ld/json-ld";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import type { Metadata } from "next";

const description =
  "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hofmannandreas.com"),
  title: "Andreas Hofmann – Software Developer",
  description: description,
  authors: [{ name: "Andreas Hofmann" }],
  manifest: "/next-assets/manifest.json",
  icons: {
    icon: "/next-assets/icons/favicon.ico",
    apple: "/next-assets/icons/apple-icon.png",
  },
  openGraph: {
    title: "Andreas Hofmann – Software Developer",
    description: description,
    url: "/",
    siteName: "Andreas Hofmann Portfolio",
    locale: "en_CH",
    type: "website",
    images: ["/next-assets/icons/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Hofmann – Software Developer",
    description: description,
    images: ["/next-assets/icons/og.png"],
  },
};

const websiteJsonLd = {
  "@type": "WebSite",
  name: "Andreas Hofmann – Portfolio",
  url: "https://hofmannandreas.com",
};

const personJsonLd = {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <JsonLd id="person-jsonld" data={personJsonLd} />
        <JsonLd id="website-jsonld" data={websiteJsonLd} />
      </head>
      <body className="bg-app text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
