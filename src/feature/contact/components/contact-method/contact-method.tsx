import { ContactData } from "../../types";

interface ContactMethodProps {
  method: ContactData;
}

export function ContactMethod(props: ContactMethodProps) {
  const { method } = props;
  const { icon, label, text, href, ariaLabel } = method;

  return (
    <div className="border-t border-border pt-5">
      <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="mt-1 flex items-center gap-3">
        <div className="shrink-0 text-primary">{icon}</div>
        <p className="font-medium text-foreground">
          {href ? (
            <a
              href={href}
              aria-label={ariaLabel}
              className="text-foreground transition-colors hover:text-primary"
            >
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </p>
      </div>
    </div>
  );
}
