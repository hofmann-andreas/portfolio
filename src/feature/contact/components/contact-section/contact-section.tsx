import { Mail, MapPin } from "lucide-react";

import { Icon } from "@/components/icon";
import { Section } from "@/components/section";

import { ContactForm } from "../contact-form";
import { ContactMethod } from "../contact-method";
import { ContactData } from "../../types";

export function ContactSection() {
  const contactMethod: Array<ContactData> = [
    {
      icon: <Icon icon={Mail} size={24} className="text-primary" />,
      label: "Email",
      ariaLabel: "Send email",
      text: "dev.andreas.hofmann@gmail.com",
      href: "mailto:dev.andreas.hofmann@gmail.com",
    },
    {
      icon: <Icon icon={MapPin} size={24} className="text-primary" />,
      label: "Location",
      text: "Bern, Switzerland",
    },
  ];

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <p className="text-muted-foreground">
            I'm always open to exchanging ideas, discussing interesting projects, or exploring new
            opportunities. If you'd like to get in touch, feel free to reach out.
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
