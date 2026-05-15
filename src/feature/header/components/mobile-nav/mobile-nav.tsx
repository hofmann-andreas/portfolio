"use client";

import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { scrollToSection } from "@/utils/scroll-to-section";

import { NavItem } from "../../types";
import { NavItemList } from "../nav-item-list";

interface MobileNavProps {
  onNavigate: () => void;
  navItems: Array<NavItem>;
  activeSection: string;
}

export const MobileNav = (props: MobileNavProps) => {
  const { navItems, onNavigate, activeSection } = props;

  const handleClick = (sectionId: string) => {
    onNavigate();

    requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  };

  return (
    <nav className="fixed inset-0 z-40 flex animate-menu-in flex-col items-center justify-center gap-6 bg-app/95 backdrop-blur-2xl md:hidden">
      <NavItemList
        navItems={navItems}
        isMobile
        activeSection={activeSection}
        onClick={handleClick}
      />
      <div className="mt-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};
