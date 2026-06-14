import { Section } from "@/components/section";

import { experiences } from "../../data/experiences";
import { Experience } from "../experience/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div>
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
