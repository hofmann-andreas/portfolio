import { ScrollProgress } from "@/components/scroll-progress/scroll-progress";
import { TabTitle } from "@/components/tab-title/tab-title";
import { Footer } from "@/feature/footer/components/footer";
import { Header } from "@/feature/header/components/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollProgress />
      <TabTitle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
