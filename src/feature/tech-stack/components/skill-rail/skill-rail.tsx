import { techStack } from "../../data/tech-stack-data";

const categoryStyles: Record<string, { label: string; chip: string }> = {
  Frontend: {
    label: "text-blue-600 dark:text-blue-400",
    chip: "hover:border-blue-400/40 hover:bg-blue-500/5 hover:text-blue-700 dark:hover:border-blue-400/40 dark:hover:bg-blue-500/8 dark:hover:text-blue-400",
  },
  Backend: {
    label: "text-emerald-700 dark:text-emerald-400",
    chip: "hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:text-emerald-700 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-500/8 dark:hover:text-emerald-400",
  },
  Tooling: {
    label: "text-amber-600 dark:text-amber-400",
    chip: "hover:border-amber-400/40 hover:bg-amber-500/5 hover:text-amber-700 dark:hover:border-amber-400/40 dark:hover:bg-amber-500/8 dark:hover:text-amber-400",
  },
};

export function SkillRail() {
  return (
    <div className="flex flex-col border-t border-border">
      {techStack.map(({ category, technologies }, index) => {
        const styles = categoryStyles[category] ?? {
          label: "text-primary",
          chip: "hover:border-primary/30 hover:bg-primary/5 hover:text-foreground",
        };

        return (
          <div
            key={category}
            className="flex flex-col gap-5 border-b border-border py-7 md:flex-row md:items-start md:gap-14"
          >
            {/* Category label */}
            <div className="flex w-32 shrink-0 flex-col gap-1">
              <span className="text-[9px] font-bold tracking-[0.25em] text-muted-foreground/40 uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display text-xl leading-none font-light italic ${styles.label}`}
              >
                {category}
              </span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-x-1.5 gap-y-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`group relative cursor-default overflow-hidden rounded-md border border-border bg-muted/60 px-2.5 py-1 text-sm font-medium text-foreground/75 transition-all duration-200 hover:-translate-y-px hover:shadow-sm ${styles.chip}`}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
