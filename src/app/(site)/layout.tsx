import { Metadata } from "next";

import { Footer } from "@/feature/footer/components/footer";
import { Header } from "@/feature/header/components/header";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
