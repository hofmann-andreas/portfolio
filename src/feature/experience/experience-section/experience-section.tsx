import { Section } from "@/components/section";

import { Experience, ExperienceProps } from "../experience/experience";

export function ExperienceSection() {
  const experiences: Array<ExperienceProps> = [
    {
      description: "Sample Experience",
      role: "Developer",
      period: "2020 - Present",
      location: "Tech Corp",
      stack: ["Next.js", "TypeScript"],
      company: "Tech Corp",
    },
  ];
  return (
    <Section id="experience" title="Experience">
      {experiences.map((experience) => (
        <Experience key={experience.role + experience.company} {...experience} />
      ))}
    </Section>
  );
}
