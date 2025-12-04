"use client";

import { ArrowDown } from "lucide-react";

import { Badge } from "@/components/badge/badge";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { scrollToSection } from "@/utils/scroll-to-section";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex min-h-[calc(100vh-77px)] items-center justify-center">
        <div className="max-w-7xl px-6 text-center">
          <div className="mb-6">
            <Badge>Welcome to my portfolio</Badge>
          </div>
          <h1 className="mb-6 text-5xl md:text-7xl">
            Hi, I&apos;m <span className="text-primary">Andreas Hofmann</span>
          </h1>
          <p className="mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl">
            A passionate software developer specializing in building exceptional digital experiences
            with Next.js and TypeScript
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => scrollToSection("contact")}>Get in Touch</Button>
            <Button variant="secondary" onClick={() => scrollToSection("experience")}>
              View Experience
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <Button
              variant="text"
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground"
            >
              <Icon icon={ArrowDown} size={32} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
