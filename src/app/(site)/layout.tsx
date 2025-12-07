import { redirect } from "next/navigation";

import { Footer } from "@/feature/footer/components/footer";
import { Header } from "@/feature/header/components/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === "true") {
    redirect("/maintenance");
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
