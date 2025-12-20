"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";

import { NavItem } from "../../types";
import { DesktopNav } from "../desktop-nav";
import { MobileNav } from "../mobile-nav/mobile-nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-foreground">Andreas Hofmann</span>
            <span className="text-sm text-muted-foreground">Software Developer</span>
          </div>

          <DesktopNav navItems={navItems} />

          <div className="text-foreground md:hidden">
            <Button
              variant="text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && <MobileNav navItems={navItems} onNavigate={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
}
