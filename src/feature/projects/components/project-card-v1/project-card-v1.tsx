import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/badge/badge";
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
    <div className="group overflow-hidden rounded border border-border bg-card">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-56 shrink-0 overflow-hidden md:h-auto md:w-2/5">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between gap-6 p-8 md:w-3/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <Heading type="h3">{project.title}</Heading>
              <div className="flex shrink-0 gap-3">
                <Link
                  href={project.github}
                  shouldOpenInNewWindow
                  aria-label={`View code of ${project.title} on GitHub`}
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
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
