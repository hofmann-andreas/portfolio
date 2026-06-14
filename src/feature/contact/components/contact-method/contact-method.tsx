import { ContactData } from "../../types";

interface ContactMethodProps {
  method: ContactData;
}

export function ContactMethod(props: ContactMethodProps) {
  const { method } = props;
  const { icon, label, text, href, ariaLabel } = method;

  const inner = (
    <div className="flex items-center gap-3.5 rounded-lg border border-border/50 bg-card/40 px-4 py-3 transition-all duration-200 hover:border-border hover:bg-card hover:shadow-sm">
      <div className="shrink-0 text-primary">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/50 uppercase">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-foreground">{text}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="block">
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
