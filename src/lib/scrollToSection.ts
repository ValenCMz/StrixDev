import type { MouseEvent } from "react";

/** Scroll suave a una sección por id; para HashRouter evitar `href="#id"`. */
export function scrollToSectionId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function handleSectionNavClick(
  e: MouseEvent<HTMLAnchorElement>,
  sectionId: string,
) {
  e.preventDefault();
  scrollToSectionId(sectionId);
}
