import { ButtonLink } from "@/components/button";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link/link";
import { Home } from "lucide-react";
import { redirect } from "next/navigation";

export default function NotFound() {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === "true") {
    redirect("/maintenance");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="mb-8">
          <Heading
            type="h1"
            className="bg-linear-to-br from-primary to-primary/50 bg-clip-text text-[150px] leading-none text-transparent md:text-[200px]"
          >
            404
          </Heading>
        </div>

        <div className="mb-12 space-y-4">
          <Heading type="h2">Page Not Found</Heading>
          <p className="mx-auto max-w-md text-muted-foreground">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <ButtonLink href="/">
            <Home className="h-5 w-5" />
            Back to Home
          </ButtonLink>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="mb-4 text-sm text-muted-foreground">Looking for something specific?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/#about" className="text-sm text-primary hover:underline">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#experience" className="text-sm text-primary hover:underline">
              Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#projects" className="text-sm text-primary hover:underline">
              Projects
            </Link>
            <span className="text-muted-foreground">•</span>

            <Link href="/#contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
