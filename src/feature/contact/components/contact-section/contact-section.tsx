import Link from "next/link";

import { Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      {/* TODO: Add linkedin and github icon */}
      <p>Feel free to reach out to me!</p>
      <Link href="mailto:your.email@example.com">your.email@example.com</Link>
    </Section>
  );
}
