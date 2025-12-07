import { Link } from "@/components/link/link";

import { ContactData } from "../../types";

interface ContactMethodProps {
  method: ContactData;
}

export function ContactMethod(props: ContactMethodProps) {
  const { method } = props;
  const { icon, label, text, href } = method;

  return (
    <div className="flex items-start gap-2">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <div>
        <p className="text-lg">{label}</p>
        <p className="text-muted-foreground">
          {href ? (
            <Link
              href={href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {text}
            </Link>
          ) : (
            <span>{text}</span>
          )}
        </p>
      </div>
    </div>
  );
}
