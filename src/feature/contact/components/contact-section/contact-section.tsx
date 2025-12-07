import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { Icon } from "@/components/icon";
import { Section } from "@/components/section";

import { ContactForm } from "../contact-form";

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  text: string;
  href?: string;
}

export function ContactSection() {
  const contactMethod: Array<ContactMethod> = [
    {
      icon: <Icon icon={Mail} size={24} className="text-primary" />,
      label: "Email",
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
            {contactMethod.map(({ icon, label, text, href }) => (
              <div className="flex items-start gap-2" key={label}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {icon}
                </div>
                <div>
                  <p className="text-lg">{label}</p>
                  <p className="text-muted-foreground">
                    {href ? (
                      <Link
                        href={href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {text}
                      </Link>
                    ) : (
                      <span>{text}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
