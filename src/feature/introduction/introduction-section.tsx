import Image from "next/image";

import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

export function IntroductionSection() {
  const technologies: Array<{ tech: string; icons: Array<{ src: string; alt: string }> }> = [
    { tech: "Frontend", icons: [{ src: "/icons/react.svg", alt: "React" }] },
    { tech: "Backend", icons: [{ src: "/icons/nodejs.svg", alt: "Node.js" }] },
    { tech: "Styling", icons: [{ src: "/icons/tailwindcss.svg", alt: "Tailwind CSS" }] },
  ];
  return (
    <Section id="introduction">
      <div>
        <p>Hello! I&apos;m Andreas Hofmann</p>
        <p>A software developer specializing in web development.</p>
        <p>I excel at creating modern, responsive, and user-friendly web applications.</p>
      </div>

      <div>
        {technologies.map(({ tech, icons }) => (
          <div key={tech}>
            <Heading type="h4">{tech}</Heading>
            <div className="flex flex-row">
              {/* TODO: create icon component */}
              {icons.map(({ src, alt }) => (
                <Image key={alt} src={src} alt={alt} width={40} height={40} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
