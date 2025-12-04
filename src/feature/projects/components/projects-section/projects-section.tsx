import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";
import { Section } from "@/components/section";

import { projects } from "../../data/projects";

export function ProjectsSection() {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Featured Projects">
      {hasProjects ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.github} shouldOpenInNewWindow>
                    <Icon icon="github" size={20} />
                    Code
                  </Link>
                  <Link
                    href={project.demo}
                    shouldOpenInNewWindow
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon icon={ExternalLink} size={20} />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-12 flex flex-col items-center justify-center">
          <div className="flex max-w-2xl flex-col gap-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>

            <Heading type="h3">Coming Soon!</Heading>
            <p className="text-muted-foreground">
              I&apos;m currently working on some exciting projects that will be showcased here soon.
              Stay tuned for updates on my latest work in web development and innovative solutions.
            </p>
            <p className="text-muted-foreground">
              In the meantime, feel free to check out my experience and tech stack, or get in touch
              if you&apos;d like to discuss potential collaborations.
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}
