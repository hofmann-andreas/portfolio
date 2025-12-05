import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Developer",
  description: "My portfolio created with Next.js, TypeScript and Tailwind CSS.",
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
      </head>
      <body className="bg-app text-foreground">{children}</body>
    </html>
  );
}
