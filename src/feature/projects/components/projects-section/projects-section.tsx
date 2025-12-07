import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

import { projects } from "../../data/projects";
import { ProjectListV1 } from "../project-list-v1";

export function ProjectsSection() {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Featured Projects">
      {hasProjects ? (
        <ProjectListV1 />
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
