import { Mail } from "lucide-react";

import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Andreas Hofmann
            </span>
            <p className="mt-0.5 font-display text-sm text-muted-foreground">
              Frontend Developer · Bern, Switzerland
            </p>
          </div>

          <div className="flex items-center gap-1">
            {[
              {
                href: "https://github.com/hofmann-andreas",
                icon: "github" as const,
                label: "View profile on GitHub",
              },
              {
                href: "https://www.linkedin.com/in/hofmann-andreas",
                icon: "linkedin" as const,
                label: "View profile on LinkedIn",
              },
              { href: "mailto:contact@hofmannandreas.com", icon: Mail, label: "Send email" },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                shouldOpenInNewWindow={!href.startsWith("mailto")}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
              >
                <Icon icon={icon} size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-4 font-display text-sm text-muted-foreground/60 italic">
            Crafted with care in Bern, Switzerland.
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Andreas Hofmann. All rights reserved.</p>
            <p className="font-display">Built with Next.js and TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
