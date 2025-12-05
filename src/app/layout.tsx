import { JsonLd } from "@/components/json-ld/json-ld";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hofmannandreas.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Andreas Hofmann – Software Developer",
    template: "%s | Andreas Hofmann",
  },
  description:
    "Portfolio of Andreas Hofmann, a software developer focused on Next.js, React and TypeScript.",
  openGraph: {
    type: "website",
    url: "https://hofmannandreas.com",
    title: "Andreas Hofmann – Software Developer",
    description:
      "Portfolio of Andreas Hofmann, a software developer focused on Next.js, React and TypeScript.",
    siteName: "Andreas Hofmann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Hofmann – Software Developer",
    description:
      "Portfolio of Andreas Hofmann, a software developer focused on Next.js, React and TypeScript.",
  },
  authors: [{ name: "Andreas Hofmann" }],
  icons: {
    icon: "/icon1.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Andreas Hofmann – Portfolio",
  url: "https://hofmannandreas.com",
};

const personJsonLd = {
  "@type": "Person",
  name: "Andreas Hofmann",
  url: "https://hofmannandreas.com",
  jobTitle: "Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Interdiscount",
  },
  sameAs: ["https://github.com/hofmann-andreas", "https://www.linkedin.com/in/hofmann-andreas"],
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
      <body className="bg-app text-foreground">{children}</body>
    </html>
  );
}
