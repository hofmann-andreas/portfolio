"use client";

import { scrollToSection } from "@/utils/scroll-to-section";

import { NavItem } from "../../types";
import { NavItemList } from "../nav-item-list";

interface MobileNavProps {
  onNavigate: () => void;
  navItems: Array<NavItem>;
}

export const MobileNav = (props: MobileNavProps) => {
  const { navItems, onNavigate } = props;

  const handleClick = (sectionId: string) => {
    onNavigate();

    requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  };

  return (
    <nav className="mt-4 flex flex-col items-end gap-4 border-t border-border pt-4 pb-4 md:hidden">
      <NavItemList navItems={navItems} isMobile onClick={handleClick} />
    </nav>
  );
};
