import { AboutSection } from "@/feature/about/about-section";
import { ContactSection } from "@/feature/contact/contact-section";
import { ExperienceSection } from "@/feature/experience/experience-section/experience-section";
import { HeroSection } from "@/feature/introduction/introduction-section";
import { ProjectsSection } from "@/feature/projects/projects-section";
import { StackSection } from "@/feature/stack/stack-section/stack-section";

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
