"use client";

import { ArrowDown, Briefcase } from "lucide-react";

import { Badge } from "@/components/badge/badge";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Typewriter } from "@/components/typewriter/typewriter";
import { scrollToSection } from "@/utils/scroll-to-section";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex min-h-[calc(100vh-77px)] items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[900px] rounded-full bg-transparent blur-[120px] dark:bg-primary/10" />
        </div>

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative max-w-7xl px-6 text-center">
          <div className="mb-6 animate-hero-fade-up" style={{ animationDelay: "100ms" }}>
            <Badge>Welcome to my portfolio</Badge>
          </div>
          <h1
            className="mb-6 animate-hero-fade-up text-5xl font-bold md:text-7xl"
            style={{ animationDelay: "250ms" }}
          >
            <span className="grid">
              <span className="invisible col-start-1 row-start-1 text-center" aria-hidden>
                Hi, I&apos;m Andreas Hofmann
              </span>
              <span className="col-start-1 row-start-1 text-center">
                Hi, I&apos;m{" "}
                <Typewriter
                  text="Andreas Hofmann"
                  delay={400}
                  speed={55}
                  className="text-primary"
                />
              </span>
            </span>
          </h1>
          <p
            className="mb-4 max-w-3xl animate-hero-fade-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "400ms" }}
          >
            I build scalable, high-quality web experiences with Next.js, TypeScript, and modern
            frontend architectures.
          </p>
          <div
            className="mb-8 flex animate-hero-fade-up items-center justify-center gap-2 text-muted-foreground"
            style={{ animationDelay: "500ms" }}
          >
            <Icon icon={Briefcase} size={16} className="text-primary" />
            <p className="text-muted-foreground">
              Currently working at <span className="text-foreground">Interdiscount</span>
            </p>
          </div>
          <div
            className="flex animate-hero-fade-up flex-wrap justify-center gap-4"
            style={{ animationDelay: "650ms" }}
          >
            <Button onClick={() => scrollToSection("contact")}>Get in Touch</Button>
            <Button variant="secondary" onClick={() => scrollToSection("experience")}>
              View Experience
            </Button>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-hero-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <Button
            variant="text"
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground"
            aria-label="Scroll to about section"
          >
            <Icon icon={ArrowDown} size={32} />
          </Button>
        </div>
      </div>
    </section>
  );
}
