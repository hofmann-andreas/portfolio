import { AboutSection } from "@/feature/about/components/about-section";
import { ContactSection } from "@/feature/contact/components/contact-section";
import { ExperienceSection } from "@/feature/experience/components/experience-section";
import { HeroSection } from "@/feature/hero/components/hero";
import { ProjectsSection } from "@/feature/projects/components/projects-section";
import { StackSection } from "@/feature/stack/components/stack-section/stack-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
