import { Mail } from "lucide-react";

import { Heading } from "@/components/heading";
import { Icon } from "@/components/icon";
import { Link } from "@/components/link/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Heading type="h3" marginBottom="xs">
              Andreas Hofmann
            </Heading>
            <p className="mt-1 text-muted-foreground">
              Software Developer specializing in Next.js and TypeScript
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/hofmann-andreas"
              shouldOpenInNewWindow
              aria-label="GitHub"
            >
              <Icon icon="github" size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/hofmann-andreas"
              shouldOpenInNewWindow
              aria-label="LinkedIn"
            >
              <Icon icon="linkedin" size={24} />
            </Link>
            <Link href="mailto:dev.andreas.hofmann@gmail.com" aria-label="Email">
              <Icon icon={Mail} size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Andreas Hofmann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
