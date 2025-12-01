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
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-muted-foreground">
            Hi, I&apos;m Andreas Hofmann, a passionate software developer specializing in modern web
            development with Next.js and TypeScript. I love building elegant, performant, and
            user-friendly applications.
          </p>
          <p className="mb-4 text-muted-foreground">
            With years of experience in the industry, I&apos;ve worked on diverse projects ranging
            from e-commerce platforms to complex web applications. I&apos;m always eager to learn
            new technologies and best practices to deliver exceptional solutions.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not coding, you can find me exploring the latest web technologies,
            contributing to open-source projects, or sharing my knowledge with the developer
            community.
          </p>
        </div>
        <Card>
          <Heading type="h3" marginBottom="md">
            What I Do
          </Heading>
          <div className="space-y-4">
            {points.map((point) => (
              <div className="flex items-start gap-4" key={point.title}>
                <div className="mt-2 min-h-2 min-w-2 rounded-full bg-primary" />
                <div>
                  <Heading type="h4" marginBottom="sm">
                    {point.title}
                  </Heading>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
