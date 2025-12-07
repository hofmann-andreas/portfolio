import { Section } from "@/components/section";

import { experiences } from "../../data/experiences";
import { Experience } from "../experience/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((experience) => (
          <Experience key={experience.company} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
