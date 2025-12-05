import { Wrench, Mail, Clock } from "lucide-react";
import { redirect } from "next/navigation";

export default function Maintenance() {
  if (process.env.NEXT_PUBLIC_MAINTENANCE !== "true") {
    redirect("/");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
              <Wrench className="h-16 w-16 animate-pulse text-primary" />
            </div>

            <div className="absolute inset-0 animate-ping rounded-full border-2 border-primary/20" />
            <div className="absolute inset-0 animate-pulse rounded-full border-2 border-primary/10" />
          </div>
        </div>

        <div className="mb-12 space-y-4">
          <h1 className="text-foreground">Under Maintenance</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            The site is currently undergoing scheduled maintenance to improve your experience. We'll
            be back online shortly.
          </p>
        </div>

        {/* Status Cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2">Estimated Time</h3>
            <p className="text-sm text-muted-foreground">We expect to be back within a few hours</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2">Need to Reach Me?</h3>
            <a
              href="mailto:andreas.hofmann@example.com"
              className="text-sm text-primary hover:underline"
            >
              andreas.hofmann@example.com
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Thank you for your patience while we make improvements to the site.
          </p>
        </div>
      </div>
    </div>
  );
}
