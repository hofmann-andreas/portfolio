import { Heading } from "@/components/heading";
import { NavLink } from "@/feature/layout/nav-link";

export function Header() {
  return (
    <header>
      <div>
        {/* TODO: Wrap to be able to navigate to top */}
        <div className="flex flex-col">
          <Heading type="h3">Andreas Hofmann</Heading>
          <Heading type="h4">Software Developer</Heading>
        </div>
        <div>
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#stack" label="Stack" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
          <NavLink href="your_resume.pdf" label="Resume" isDownload />
        </div>
      </div>
    </header>
  );
}
