import Image from "next/image";
import React from "react";
import { TSkill } from "../types/TSkill";
import { SkillBadge } from "./ui/SkillBadge";

export const SkillCard = ({ label, level, linkedin }: TSkill) => {
  function opacityCalc(level: number): any {
    return (level * 0.5) / 3;
  }

  return (
    <li
      className="text-dracula-foreground flex items-center gap-x-1"
      style={{ opacity: opacityCalc(level) }}
    >
      {label}
      {linkedin && <SkillBadge size={12} />}
    </li>
  );
};
