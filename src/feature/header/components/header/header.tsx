"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";

import { useActiveSection } from "../../hooks/use-active-section";
import { NavItem } from "../../types";
import { DesktopNav } from "../desktop-nav";
import { MobileNav } from "../mobile-nav/mobile-nav";

const SECTION_IDS = ["about", "experience", "stack", "projects", "contact"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const navItems: Array<NavItem> = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Stack", id: "stack" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
    {
      label: "Resume",
      id: "resume",
      options: {
        href: "/next-assets/pdf/resume-hofmann-andreas.pdf",
        isDownload: true,
        fileName: "resume-hofmann-andreas.pdf",
      },
    },
  ];

  return (
    <>
      <header className="bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                Andreas Hofmann
              </span>
            </div>

            <div className="flex items-center gap-4">
              <DesktopNav navItems={navItems} activeSection={activeSection} />
              <span className="hidden md:flex">
                <ThemeToggle />
              </span>
              <Button
                variant="text"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <MobileNav
          navItems={navItems}
          activeSection={activeSection}
          onNavigate={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
