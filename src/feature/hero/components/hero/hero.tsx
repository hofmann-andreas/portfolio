"use client";

import { ArrowDown, Briefcase } from "lucide-react";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-77px)] flex-col justify-center overflow-hidden px-6 py-20"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 -left-48 h-[650px] w-[650px] animate-float rounded-full bg-primary/15 blur-[140px]" />
        <div
          className="absolute top-1/3 -right-64 h-[550px] w-[550px] animate-float rounded-full bg-violet-500/10 blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-48 left-1/3 h-[450px] w-[450px] animate-float rounded-full bg-amber-400/8 blur-[110px]"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Badge */}
        <div
          className="mb-10 inline-flex animate-hero-fade-up items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Frontend Developer · Bern, Switzerland
        </div>

        {/* Main layout: stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
          {/* Left: Giant display name */}
          <h1
            className="animate-hero-fade-up font-display text-[clamp(3rem,13vw,10.5rem)] leading-[0.88] font-bold tracking-tight md:text-[clamp(3rem,8vw,7rem)]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block text-foreground">Andreas</span>
            <span
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px var(--color-foreground)",
                opacity: 0.35,
              }}
            >
              Hofmann
            </span>
          </h1>

          {/* Right: Tagline, current role, CTAs */}
          <div className="animate-hero-fade-up" style={{ animationDelay: "240ms" }}>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build scalable, high-quality web experiences with Next.js, TypeScript, and modern
              frontend architectures.
            </p>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 shrink-0 text-primary" />
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

            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection("contact")}>Get in touch</Button>
              <Button variant="secondary" onClick={() => scrollToSection("experience")}>
                View work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-hero-fade-up"
        style={{ animationDelay: "700ms" }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex cursor-pointer flex-col items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
