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
    <Section id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <p className="text-muted-foreground">
            I&apos;m always open to exchanging ideas, discussing interesting projects, or exploring
            new opportunities. If you&apos;d like to get in touch, feel free to reach out.
          </p>
          <div className="space-y-6">
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
