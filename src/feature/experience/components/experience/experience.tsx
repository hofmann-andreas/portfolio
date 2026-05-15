import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/badge/badge";
import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";

import { ExperienceData } from "../../types";

interface ExperienceProps {
  experience: ExperienceData;
}

export function Experience(props: ExperienceProps) {
  const { experience } = props;

  return (
    <div className="relative border-l-2 border-primary pl-8">
      <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-primary" />

      <Card>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <Heading type="h3">{experience.role}</Heading>
                {experience.isCurrent && (
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Current
                  </span>
                )}
              </div>
              <p className="text-primary">{experience.company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{experience.period}</span>
          </div>

          <p className="text-muted-foreground">{experience.description}</p>

          <div>
            <Heading type="h4" marginBottom="sm">
              Focus Areas
            </Heading>
            <ul className="flex flex-col gap-1.5">
              {experience.focusAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <Icon icon={ChevronRight} size={16} className="mt-1 shrink-0 text-primary" />
                  {area}
                </li>
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
  );
}
