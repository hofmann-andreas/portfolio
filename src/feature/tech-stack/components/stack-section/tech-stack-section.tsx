import { Code2, Database, Wrench } from "lucide-react";

import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

import { TechStackData } from "../../types";

export function TechStackSection() {
  const techStack: Array<TechStackData> = [
    {
      category: "Frontend",
      icon: <Code2 size={20} className="text-primary" />,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "SWR",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Backend",
      icon: <Database size={20} className="text-primary" />,
      technologies: ["Node.js", "Express.js", "Sequelize", "Java", "MySQL"],
    },
    {
      category: "Tooling & Workflows",
      icon: <Wrench size={20} className="text-primary" />,
      technologies: ["Git", "ArgoCD", "Firebase", "Vercel", "Playwright", "Jest"],
    },
  ];

  return (
    <Section id="stack" title="Tech Stack">
      <div className="flex flex-col gap-8">
        <p className="text-muted-foreground">
          Technologies I use regularly in production and professional projects.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map(({ category, icon, technologies }) => {
            return (
              <div key={category}>
                <div className="mb-6 flex items-center gap-3 border-b border-primary/20 pb-3">
                  <div className="rounded-lg bg-primary/10 p-2">{icon}</div>
                  <Heading type="h3">{category}</Heading>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((technology) => (
                    <div
                      key={technology}
                      className="cursor-default rounded-lg border border-border bg-card px-4 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <span className="text-muted-foreground">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
