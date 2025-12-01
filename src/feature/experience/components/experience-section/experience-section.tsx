import { Badge } from "@/components/badge/badge";
import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

import { experiences } from "../../data/experiences";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((experience) => (
          <div
            key={`${experience.role + experience.company}`}
            className="relative border-l-2 border-primary pl-8"
          >
            <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-primary" />

            <Card>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <Heading type="h3" marginBottom="xs">
                      {experience.role}
                    </Heading>

                    <p className="text-primary">{experience.company}</p>
                  </div>
                  <span className="text-muted-foreground">{experience.period}</span>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
                <div>
                  <Heading type="h4" marginBottom="sm">
                    Achievements
                  </Heading>
                  <ul className="list-inside list-disc text-muted-foreground">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Heading type="h4" marginBottom="sm">
                    Stack
                  </Heading>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((tech, index) => (
                      <Badge key={index} size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
