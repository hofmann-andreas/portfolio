import { BackToTop } from "@/components/back-to-top/back-to-top";
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
      {/* Page-wide ambient glow — ties hero atmosphere into the rest of the page */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-primary/10 blur-[160px] dark:bg-primary/5" />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full bg-violet-500/9 blur-[140px] dark:bg-violet-500/4" />
        <div className="absolute -bottom-48 left-1/3 h-[400px] w-[400px] rounded-full bg-amber-400/9 blur-[130px] dark:bg-amber-400/4" />
      </div>
      <ScrollProgress />
      <TabTitle />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
