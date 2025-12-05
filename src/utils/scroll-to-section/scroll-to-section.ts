export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;

  const section = document.getElementById(id);
  if (!section) return;

  const header = document.getElementById("site-header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const offsetTop = sectionTop - headerHeight - 16; // small padding

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};
