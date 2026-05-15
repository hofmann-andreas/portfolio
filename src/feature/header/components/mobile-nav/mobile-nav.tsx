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
    <nav className="bg-background/90 fixed inset-0 z-40 flex animate-menu-in flex-col items-center justify-center gap-6 backdrop-blur-2xl md:hidden">
      <NavItemList navItems={navItems} isMobile onClick={handleClick} />
    </nav>
  );
};
