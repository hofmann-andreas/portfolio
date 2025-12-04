import { HeaderNav } from "../header-nav";

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-foreground">Andreas Hofmann</span>
            <span className="text-sm text-muted-foreground">Software Developer</span>
          </div>

          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
