"use client";

import { Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { Section } from "@/components/section";

import { ContactData } from "../../types";
import { ContactForm } from "../contact-form";
import { ContactMethod } from "../contact-method";

export function ContactSection() {
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const contactMethod: Array<ContactData> = [
    {
      icon: <Icon icon={Mail} size={24} className="text-primary" />,
      label: "Email",
      ariaLabel: "Send email",
      text: "contact@hofmannandreas.com",
      href: "mailto:contact@hofmannandreas.com",
    },
    {
      icon: <Icon icon="github" size={24} className="text-primary" />,
      label: "GitHub",
      ariaLabel: "View GitHub profile",
      text: "github.com/hofmann-andreas",
      href: "https://github.com/hofmann-andreas",
    },
    {
      icon: <Icon icon="linkedin" size={24} className="text-primary" />,
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
      <div ref={ref} className="grid gap-12 md:grid-cols-2">
        {/* Left column — slides in from left */}
        <div
          className="space-y-8 transition-[opacity,transform] duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-22px)",
          }}
        >
          <div className="relative">
            <span
              className="pointer-events-none absolute -top-6 -left-2 font-display text-[8rem] leading-none text-primary/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="relative font-display text-3xl leading-tight font-light text-foreground/80 italic md:text-5xl">
              Got something
              <br />
              in mind?
              <br />
              <span className="text-primary not-italic">Let&apos;s make it real.</span>
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

        {/* Right column — slides in from right */}
        <div
          className="flex flex-col transition-[opacity,transform] duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(22px)",
            transitionDelay: visible ? "120ms" : "0ms",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
