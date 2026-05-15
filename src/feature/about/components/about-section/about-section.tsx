import { AnimatedCounter } from "@/components/animated-counter/animated-counter";
import { Section } from "@/components/section";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "15+", label: "Technologies" },
];

export function AboutSection() {
  return (
    <Section id="about" title="About Me" align="center">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-muted-foreground">
        <p>
          I&apos;m a software developer specializing in modern frontend development with a strong
          focus on Next.js, TypeScript, and React.
        </p>
        <p>
          At Interdiscount, I work on a high-traffic e-commerce platform — building new features,
          migrating legacy architectures, and ensuring production stability. I have hands-on
          experience with frontend migrations, performance improvements, and maintaining complex
          applications in real-world environments.
        </p>
        <p>
          While my main strength is frontend engineering, I also bring solid full-stack knowledge
          with Node.js, Express, REST APIs, and relational databases — allowing me to collaborate
          effectively across the full stack.
        </p>

        {/* Stats */}
        <div className="mt-2 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card px-4 py-5"
            >
              <AnimatedCounter value={stat.value} className="text-2xl font-bold text-primary" />
              <span className="text-center text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
