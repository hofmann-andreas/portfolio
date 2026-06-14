import { Section } from "@/components/section";

import { experiences } from "../../data/experiences";
import { Experience } from "../experience/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" eyebrow="02 ——— Work" alternate>
      <div className="relative pl-1">
        {/* Vertical timeline line — fades out at the bottom */}
        <div
          className="absolute top-3 bottom-0 left-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-border), var(--color-border) 80%, transparent)",
          }}
          aria-hidden="true"
        />
        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
