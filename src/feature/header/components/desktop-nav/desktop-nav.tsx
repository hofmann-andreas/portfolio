"use client";

import { NavItem } from "../../types";
import { NavItemList } from "../nav-item-list";

interface DesktopNavProps {
  navItems: Array<NavItem>;
}

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <NavItemList navItems={navItems} />
    </nav>
  );
}
