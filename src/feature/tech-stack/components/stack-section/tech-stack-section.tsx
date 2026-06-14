import { Section } from "@/components/section";

import { TechStackData } from "../../types";

export function TechStackSection() {
  const techStack: Array<TechStackData> = [
    {
      category: "Frontend",
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
      technologies: ["Node.js", "Express.js", "Sequelize", "MySQL"],
    },
    {
      category: "Tooling",
      technologies: ["Git", "ArgoCD", "Vercel", "Playwright", "Jest"],
    },
  ];

  return (
    <Section id="stack" title="Tech Stack">
      <div className="flex flex-col divide-y divide-border">
        {techStack.map(({ category, technologies }) => (
          <div key={category} className="flex flex-col gap-4 py-6 md:flex-row md:gap-16">
            <div className="w-44 shrink-0">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {category}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {technologies.map((technology) => (
                <span key={technology} className="text-foreground/80">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
