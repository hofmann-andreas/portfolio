import { Metadata } from "next";

import { AboutSection } from "@/feature/about/components/about-section";
import { ContactSection } from "@/feature/contact/components/contact-section";
import { ExperienceSection } from "@/feature/experience/components/experience-section";
import { HeroSection } from "@/feature/hero/components/hero";
import { ProjectsSection } from "@/feature/projects/components/projects-section";
import { TechStackSection } from "@/feature/tech-stack/components/stack-section/tech-stack-section";

export const metadata: Metadata = {
  description:
    "Software Developer based in Switzerland, specializing in Next.js, TypeScript, and modern web applications. Currently working on large-scale e-commerce platforms at Interdiscount.",
  alternates: {
    canonical: "https://hofmannandreas.com/",
  },
};

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
