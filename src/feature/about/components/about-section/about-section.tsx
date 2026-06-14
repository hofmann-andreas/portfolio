import { AnimatedCounter } from "@/components/animated-counter/animated-counter";
import { Section } from "@/components/section";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "15+", label: "Technologies" },
  { value: "4", label: "Production apps" },
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-[11px] font-bold tracking-[0.28em] text-primary/80 uppercase">
          01 ——— About
        </p>

        <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          I build production-grade web experiences — the kind that{" "}
          <span className="text-primary">tens of thousands</span> of people use every day.
        </h2>

        <div className="mt-10 grid gap-5 text-muted-foreground sm:grid-cols-2 md:text-[1.0625rem]">
          <p>
            At Interdiscount, I work on a high-traffic e-commerce platform — building new features,
            migrating legacy architectures, and ensuring production stability with Next.js and
            TypeScript.
          </p>
          <p>
            While my main strength is frontend engineering, I also bring solid full-stack knowledge
            with Node.js, REST APIs, and relational databases — letting me collaborate effectively
            across the stack.
          </p>
        </div>

        {/* Stats below */}
        <div className="relative mt-14 flex divide-x divide-border border-t border-border pt-10">
          {/* Primary accent at the start of the rule */}
          <div
            className="pointer-events-none absolute -top-px left-0 h-px w-24 bg-primary"
            aria-hidden="true"
          />
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center px-6 first:pl-0 last:pr-0"
            >
              <AnimatedCounter
                value={stat.value}
                className="block font-display text-5xl font-bold text-primary tabular-nums md:text-6xl"
              />
              <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
