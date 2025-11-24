import "./globals.css";

import type { Metadata } from "next";

import { Footer } from "@/feature/layout/footer";
import { Header } from "@/feature/layout/header";

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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
