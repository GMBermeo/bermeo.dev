import React from "react";

interface TNavButtonProps {
  label: string;
  class?: string;
  goTo: string;
}

export const NavButton = ({
  label,
  class: className,
  goTo,
}: TNavButtonProps) => {
  function scrollToSection(section: string): void {
    const element = document.getElementById(section)?.getBoundingClientRect().y;
    if (element) {
      window.scrollTo({
        top: window.scrollY + element - 73,
        behavior: "smooth",
      });
    }
  }

  return (
    <a
      className={`hover:decoration-primary ml-1 pl-2 pr-2 hover:underline hover:decoration-2 ${
        className ? className : ""
      }`}
      onClick={() => scrollToSection(goTo)}
    >
      {label}
    </a>
  );
};
