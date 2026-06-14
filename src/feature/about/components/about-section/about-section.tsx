import { AnimatedCounter } from "@/components/animated-counter/animated-counter";
import { Section } from "@/components/section";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Production apps" },
];

export function AboutSection() {
  return (
    <Section id="about" align="center">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="sr-only">About</h2>
        {/* Pull-quote opener */}
        <p className="font-display text-xl leading-snug font-semibold tracking-tight text-foreground md:text-2xl">
          I build production-grade web experiences — the kind that tens of thousands of people use
          every day.
        </p>

        <div className="mt-6 flex flex-col gap-5 text-left text-muted-foreground md:text-center">
          <p>
            At Interdiscount, I work on a high-traffic e-commerce platform — building new features,
            migrating legacy architectures, and ensuring production stability with Next.js and
            TypeScript.
          </p>
          <p>
            While my main strength is frontend engineering, I also bring solid full-stack knowledge
            with Node.js, REST APIs, and relational databases — allowing me to collaborate
            effectively across the stack.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-12 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                value={stat.value}
                className="block font-display text-4xl font-bold text-foreground"
              />
              <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
