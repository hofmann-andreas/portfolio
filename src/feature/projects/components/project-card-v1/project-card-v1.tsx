import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/badge/badge";
import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";

import { ProjectData } from "../../types";

interface ProjectCardV1Props {
  project: ProjectData;
}

export function ProjectCardV1(props: ProjectCardV1Props) {
  const { project } = props;

  return (
    <Card>
      <div className="mb-4 flex items-start justify-between">
        <Heading type="h3" marginBottom="sm">
          {project.title}
        </Heading>
        <div className="flex gap-3">
          <Link
            href={project.github}
            shouldOpenInNewWindow
            aria-label={`View ${project.title} on GitHub`}
          >
            <Icon icon="github" size={20} />
          </Link>
          <Link
            href={project.demo}
            shouldOpenInNewWindow
            aria-label={`View demo of ${project.title}`}
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <p className="mb-6 text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
