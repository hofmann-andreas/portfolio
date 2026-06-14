import { AnimatedCounter } from "@/components/animated-counter/animated-counter";
import { Section } from "@/components/section";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "15+", label: "Technologies" },
  { value: "4", label: "Production apps" },
];

export function AboutSection() {
  return (
    <Section id="about" align="center">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="sr-only">About</h2>

        {/* Decorative oversized quote mark */}
        <div
          className="pointer-events-none absolute -top-6 -left-2 font-display leading-none font-bold text-foreground/[0.04] select-none"
          aria-hidden="true"
          style={{ fontSize: "clamp(7rem, 18vw, 13rem)", lineHeight: 0.8 }}
        >
          &ldquo;
        </div>

        {/* Pull-quote opener */}
        <p className="relative font-display text-xl leading-snug font-semibold tracking-tight text-foreground md:text-2xl lg:text-[1.65rem]">
          I build production-grade web experiences — the kind that tens of thousands of people use
          every day.
        </p>

        <div className="relative mt-6 flex flex-col gap-5 text-muted-foreground md:text-center">
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

        {/* Stats row with vertical dividers */}
        <div className="mt-14 flex divide-x divide-border border-t border-border pt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center px-6 first:pl-0 last:pr-0"
            >
              <AnimatedCounter
                value={stat.value}
                className="block font-display text-5xl font-bold text-foreground tabular-nums md:text-6xl"
              />
              <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
