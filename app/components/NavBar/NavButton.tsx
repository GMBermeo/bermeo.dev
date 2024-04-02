"use client";

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
        className={`ml-1 pl-2 pr-2 hover:underline hover:decoration-primary hover:decoration-2 ${
          className ?? ""
        }`}
        onClick={() => scrollToSection(label)}
      >
        {label}
      </button>
    </li>
  );
};
