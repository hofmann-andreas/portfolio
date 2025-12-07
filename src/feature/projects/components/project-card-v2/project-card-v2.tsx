import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/badge/badge";
import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";

import { ProjectData } from "../../types";

interface ProjectCardV2Props {
  project: ProjectData;
}

export const ProjectCardV2 = (props: ProjectCardV2Props) => {
  const { project } = props;

  return (
    <div
      key={project.title}
      className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          width={1000}
          height={20}
        />
      </div>
      <div className="p-6">
        <Heading type="h3" marginBottom="sm">
          {project.title}
        </Heading>
        <p className="mb-4 text-muted-foreground">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} size="sm">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.github}
            shouldOpenInNewWindow
            aria-label={`View code of ${project.title} on GitHub`}
          >
            <Icon icon="github" size={20} />
            Code
          </Link>
          <Link
            href={project.demo}
            shouldOpenInNewWindow
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label={`View demo of ${project.title}`}
          >
            <Icon icon={ExternalLink} size={20} />
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
};
