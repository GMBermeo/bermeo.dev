import React from "react";
import { TSkill } from "@types";
import { SkillBadge } from "@components";

export const SkillCard = ({ label, level, linkedin }: TSkill) => {
  function opacityCalc(level: number): any {
    return (level * 0.5) / 3;
  }

  return (
    <li
      className="text-dracula-foreground flex items-center gap-x-1 duration-100 ease-in-out hover:scale-105"
      style={{ opacity: opacityCalc(level) }}
    >
      {label}
      {linkedin && <SkillBadge size={12} />}
    </li>
  );
};
