"use client";

import { Briefcase } from "lucide-react";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-77px)] flex-col items-center justify-center text-center"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* Badge */}
        <div
          className="mb-8 inline-flex animate-hero-fade-up items-center rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm text-foreground"
          style={{ animationDelay: "0ms" }}
        >
          Welcome to my portfolio
        </div>

        {/* Heading */}
        <h1
          className="animate-hero-fade-up font-display leading-[1.05] font-bold tracking-tight text-foreground"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            animationDelay: "120ms",
          }}
        >
          Hi, I&apos;m <span className="text-primary">Andreas Hofmann</span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-2xl animate-hero-fade-up text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          I build scalable, high-quality web experiences with Next.js, TypeScript, and modern
          frontend architectures.
        </p>

        {/* Current role */}
        <p
          className="mt-5 flex animate-hero-fade-up items-center justify-center gap-2 text-sm text-muted-foreground"
          style={{ animationDelay: "300ms" }}
        >
          <Briefcase className="h-4 w-4 text-primary" />
          Currently working at{" "}
          <a
            href="https://www.interdiscount.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            Interdiscount
          </a>
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex animate-hero-fade-up flex-wrap justify-center gap-4"
          style={{ animationDelay: "380ms" }}
        >
          <Button onClick={() => scrollToSection("contact")}>Get in touch</Button>
          <Button variant="secondary" onClick={() => scrollToSection("experience")}>
            View work
          </Button>
        </div>
      </div>
    </section>
  );
}
