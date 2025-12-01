import { Badge } from "@/components/badge/badge";
import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

import { techStack } from "../../data/tech-stack";

export function StackSection() {
  return (
    <Section id="stack" title="Tech Stack">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map(({ category, technologies }) => {
          return (
            <Card key={category}>
              <Heading type="h3" marginBottom="md">
                {category}
              </Heading>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
