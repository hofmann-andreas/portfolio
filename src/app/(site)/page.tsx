import { AboutSection } from "@/feature/about/components/about-section";
import { ContactSection } from "@/feature/contact/components/contact-section";
import { ExperienceSection } from "@/feature/experience/components/experience-section";
import { HeroSection } from "@/feature/hero/components/hero";
import { ProjectsSection } from "@/feature/projects/components/projects-section";
import { TechStackSection } from "@/feature/tech-stack/components/stack-section/tech-stack-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
