export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;

  const section = document.getElementById(id);
  if (!section) return;

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const offsetTop = sectionTop - 96;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};
