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
  return (
    <a
      className={`ml-1 pl-2 pr-2 ${className ? className : ""}`}
      href={`#${goTo}`}
    >
      {label}
    </a>
  );
};
