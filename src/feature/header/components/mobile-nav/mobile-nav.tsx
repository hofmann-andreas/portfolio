"use client";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

import { downloadFile } from "../../util/download-file";

export const MobileNav = () => {
  return (
    <nav className="mt-4 flex flex-col items-end gap-4 border-t border-border pt-4 pb-4 md:hidden">
      <Button onClick={() => scrollToSection("about")} variant="text">
        About
      </Button>
      <Button onClick={() => scrollToSection("experience")} variant="text">
        Experience
      </Button>
      <Button onClick={() => scrollToSection("stack")} variant="text">
        Stack
      </Button>
      <Button onClick={() => scrollToSection("projects")} variant="text">
        Projects
      </Button>
      <Button onClick={() => scrollToSection("contact")} variant="text">
        Contact
      </Button>
      <Button
        onClick={() =>
          downloadFile({
            href: "/next-assets/pdf/resume-hofmann-andreas.pdf",
            fileName: "resume-hofmann-andreas.pdf",
          })
        }
        variant="secondary"
        className="px-4! py-1.5!"
      >
        Resume
      </Button>
    </nav>
  );
};
