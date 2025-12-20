import clsx from "clsx";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

import { NavItem } from "../../types";
import { downloadFile } from "../../util/download-file";
import { isDownloadItem } from "../../util/is-download-item";

interface NavItemListProps {
  navItems: Array<NavItem>;
  isMobile?: boolean;
  onClick?: (sectionId: string) => void;
}

export function NavItemList({ navItems, isMobile = false, onClick }: NavItemListProps) {
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
              className={clsx(isMobile ? "px-4! py-1.5!" : "px-4! py-2!")}
              onClick={() => downloadFile({ href, fileName })}
            >
              {navItem.label}
            </Button>
          );
        }

        return (
          <Button key={navItem.id} variant="text" onClick={() => handleClick(navItem.id)}>
            {navItem.label}
          </Button>
        );
      })}
    </>
  );
}
