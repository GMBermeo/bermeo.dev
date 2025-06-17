"use client";
import type { JSX } from "react";
import sLink from "@styles/Link.module.css";

interface NavButtonProps {
  label: string;
  className?: string;
}

export const NavButton = (props: Readonly<NavButtonProps>): JSX.Element => {
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
        className={`${sLink.link} ${props.className ?? ""}`}
        onClick={() => {
          scrollToSection(props.label);
        }}
        type="button"
      >
        {props.label}
      </button>
    </li>
  );
};
