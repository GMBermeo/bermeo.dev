"use client";
import sLink from "@styles/Link.module.css";

interface TNavButtonProps {
  label: string;
  class?: string;
}

export const NavButton = ({ label, class: className }: TNavButtonProps) => {
  function scrollToSection(section: string): void {
    const element = document.getElementById(section)?.getBoundingClientRect().y;
    if (element) {
      window.scrollTo({
        top: window.scrollY + element - 69,
      });
    }
  }

  return (
    <li>
      <button
        className={`${sLink.link} ${className}`}
        onClick={() => scrollToSection(label)}
      >
        {label}
      </button>
    </li>
  );
};
