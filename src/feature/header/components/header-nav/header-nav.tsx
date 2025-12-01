"use client";

import { Button } from "@/components/button";

export function HeaderNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdf/resume-hofmann-andreas.pdf";
    link.download = "resume-hofmann-andreas.pdf";
    link.click();
  };

  return (
    <>
      <nav className="hidden items-center gap-6 md:flex">
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
        <Button variant="secondary" onClick={downloadResume}>
          Resume
        </Button>
      </nav>

      {/* TODO: Hamburger menu for mobile */}
      <div className="md:hidden">
        <Button variant="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </>
  );
}
