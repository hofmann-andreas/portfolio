import { AboutSection } from "@/feature/about/about-section";
import { ContactSection } from "@/feature/contact/contact-section";
import { IntroductionSection } from "@/feature/introduction/introduction-section";
import { ProjectsSection } from "@/feature/projects/projects-section";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
