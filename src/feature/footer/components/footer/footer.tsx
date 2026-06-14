import { Mail } from "lucide-react";

import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <span className="font-display font-semibold tracking-tight text-foreground">
            Andreas Hofmann
          </span>

          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/hofmann-andreas"
              shouldOpenInNewWindow
              aria-label="View profile on GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon="github" size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/hofmann-andreas"
              shouldOpenInNewWindow
              aria-label="View profile on LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon="linkedin" size={20} />
            </Link>
            <Link
              href="mailto:contact@hofmannandreas.com"
              aria-label="Send email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon={Mail} size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Andreas Hofmann</p>
          <p className="mt-1 text-xs italic">Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
