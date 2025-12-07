"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";

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

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-foreground">Andreas Hofmann</span>
            <span className="text-sm text-muted-foreground">Software Developer</span>
          </div>

          <DesktopNav />

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

        {isMenuOpen && <MobileNav onNavigate={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
}
