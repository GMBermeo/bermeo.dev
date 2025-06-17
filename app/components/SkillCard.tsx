import type { JSX } from "react";
import type { Skill } from "@types";
import { SkillBadge } from "@components";

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = (props: Readonly<SkillCardProps>): JSX.Element => {
  function opacityCalc(level: number): number {
    return (level * 0.5) / 3;
  }

  return (
    <li
      className="flex items-center gap-x-1 text-dracula-foreground duration-100 ease-in-out hover:scale-105"
      style={{ opacity: opacityCalc(props.skill.level) }}
    >
      {props.skill.label}
      {props.skill.linkedin && <SkillBadge size={12} />}
    </li>
  );
};
