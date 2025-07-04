import type { JSX } from "react";

interface SkillBadgeProps {
  fill?: string;
  size?: number;
}

export const SkillBadge = ({
  fill = "currentColor",
  size = 24,
}: Readonly<SkillBadgeProps>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      width={size}
      height={size}
      focusable="false"
    >
      <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
    </svg>
  );
};
