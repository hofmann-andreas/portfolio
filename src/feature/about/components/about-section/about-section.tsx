import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

export function AboutSection() {
  const points = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React and Next.js",
    },
    {
      title: "Full-Stack Development",
      description: "Creating end-to-end solutions with modern backend technologies",
    },
    {
      title: "Performance Optimization",
      description: "Ensuring applications are fast, efficient, and scalable",
    },
  ];

  return (
    <Section id="about" title="About Me" align="center">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-muted-foreground">
        <p>
          I'm a software developer specializing in modern frontend development with a strong focus
          on Next.js, TypeScript, and React.
        </p>
        <p>
          At Interdiscount, I work on a high-traffic e-commerce platform where I help build new
          features, migrate legacy architectures, and ensure production stability. I have hands-on
          experience with frontend migrations, performance improvements, and maintaining complex
          applications in real-world environments.
        </p>
        <p>
          While my main strength is frontend engineering, I also bring solid full-stack knowledge.
          I've worked with Node.js, Express, REST APIs, and relational databases, which allows me to
          collaborate effectively across backend and frontend boundaries.
        </p>
        <p>
          I value clean code, maintainability, and pragmatic solutions, and I enjoy working in agile
          teams where quality and ownership matter.
        </p>
      </div>
    </Section>
  );
}
