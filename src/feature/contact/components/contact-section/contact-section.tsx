import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Icon } from "@/components/icon";
import { Section } from "@/components/section";

import { ContactData } from "../../types";
import { ContactForm } from "../contact-form";
import { ContactMethod } from "../contact-method";

export function ContactSection() {
  const contactMethod: Array<ContactData> = [
    {
      icon: <Icon icon={Mail} size={24} className="text-primary" />,
      label: "Email",
      ariaLabel: "Send email",
      text: "contact@hofmannandreas.com",
      href: "mailto:contact@hofmannandreas.com",
    },
    {
      icon: <Icon icon={Github} size={24} className="text-primary" />,
      label: "GitHub",
      ariaLabel: "View GitHub profile",
      text: "github.com/hofmann-andreas",
      href: "https://github.com/hofmann-andreas",
    },
    {
      icon: <Icon icon={Linkedin} size={24} className="text-primary" />,
      label: "LinkedIn",
      ariaLabel: "View LinkedIn profile",
      text: "linkedin.com/in/hofmann-andreas",
      href: "https://www.linkedin.com/in/hofmann-andreas",
    },
    {
      icon: <Icon icon={MapPin} size={24} className="text-primary" />,
      label: "Location",
      text: "Bern, Switzerland",
    },
  ];

  return (
    <Section id="contact" title="Contact" eyebrow="05 ——— Say hello">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {/* Italic display subtitle with decorative quote mark */}
          <div className="relative">
            <span
              className="pointer-events-none absolute -top-3 -left-1 font-display text-[6rem] leading-none text-primary/10 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="relative font-display text-xl leading-snug font-light text-foreground/70 italic md:text-2xl">
              Got something in mind?
              <br />
              Let&apos;s make it real.
            </p>
          </div>

          <p className="text-muted-foreground">
            I&apos;m always open to exchanging ideas, discussing interesting projects, or exploring
            new opportunities. Feel free to reach out through any of the channels below.
          </p>

          <div className="space-y-5">
            {contactMethod.map((method) => (
              <ContactMethod key={method.label} method={method} />
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
