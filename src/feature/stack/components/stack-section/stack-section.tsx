import { Section } from "@/components/section";

export function StackSection() {
  const stackItems: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "HTML",
  ];

  return (
    <Section id="stack" title="Stack">
      <div>
        {stackItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </Section>
  );
}
