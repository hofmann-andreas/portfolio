import clsx from "clsx";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

import { NavItem } from "../../types";
import { downloadFile } from "../../util/download-file";
import { isDownloadItem } from "../../util/is-download-item";

interface NavItemListProps {
  navItems: Array<NavItem>;
  isMobile?: boolean;
  activeSection?: string;
  onClick?: (sectionId: string) => void;
}

export function NavItemList({
  navItems,
  isMobile = false,
  activeSection = "",
  onClick,
}: NavItemListProps) {
  const handleClick = (sectionId: string) => {
    if (onClick) {
      onClick(sectionId);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      {navItems.map((navItem) => {
        if (isDownloadItem(navItem)) {
          const { href, fileName } = navItem.options!;

          return (
            <Button
              key={navItem.id}
              variant="secondary"
              className={clsx(isMobile ? "mt-2 px-8! py-2.5! text-lg!" : "px-4! py-2!")}
              onClick={() => downloadFile({ href, fileName })}
            >
              {navItem.label}
            </Button>
          );
        }

        const isActive = activeSection === navItem.id;

        return (
          <Button
            key={navItem.id}
            variant="text"
            className={clsx(
              isMobile && "py-2 text-2xl font-medium",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
            onClick={() => handleClick(navItem.id)}
          >
            {navItem.label}
          </Button>
        );
      })}
    </>
  );
}
