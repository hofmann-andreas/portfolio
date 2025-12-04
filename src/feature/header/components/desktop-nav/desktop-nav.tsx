"use client";

import { Button } from "@/components/button";
import { scrollToSection } from "@/utils/scroll-to-section";

import { downloadFile } from "../../util/download-file";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <Button variant="text" onClick={() => scrollToSection("about")}>
        About
      </Button>
      <Button variant="text" onClick={() => scrollToSection("experience")}>
        Experience
      </Button>
      <Button variant="text" onClick={() => scrollToSection("stack")}>
        Stack
      </Button>
      <Button variant="text" onClick={() => scrollToSection("projects")}>
        Projects
      </Button>
      <Button variant="text" onClick={() => scrollToSection("contact")}>
        Contact
      </Button>
      <Button
        variant="secondary"
        className="px-4! py-2!"
        onClick={() =>
          downloadFile({
            href: "/next-assets/pdf/resume-hofmann-andreas.pdf",
            fileName: "resume-hofmann-andreas.pdf",
          })
        }
      >
        Resume
      </Button>
    </nav>
  );
}
