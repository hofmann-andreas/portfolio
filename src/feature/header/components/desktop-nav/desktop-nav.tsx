"use client";

import { NavItem } from "../../types";
import { NavItemList } from "../nav-item-list";

interface DesktopNavProps {
  navItems: Array<NavItem>;
  activeSection: string;
}

export function DesktopNav({ navItems, activeSection }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <NavItemList navItems={navItems} activeSection={activeSection} />
    </nav>
  );
}
