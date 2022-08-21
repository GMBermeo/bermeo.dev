import Image from "next/image";
import React from "react";
import { SkillCard } from "../SkillCard";
import { SkillBadge } from "../ui/SkillBadge";
import { Title } from "../ui/Title";
import { skills } from "../../_data/skills";

export const Skills = () => {
  return (
    <div className="mb-12">
      <Title title={"Aptidões"} />

      <ul className="bg-dracula-background my-6 grid grid-flow-row grid-cols-[repeat(6,_min(fit))] grid-rows-4 gap-x-4 gap-y-3 overflow-x-auto whitespace-nowrap rounded-lg p-6 pb-5 text-sm font-medium lg:my-8 lg:gap-y-4 lg:p-8 lg:pb-6">
        {skills.map((skill) => (
          <SkillCard key={skill.label} {...skill} />
        ))}
        <p className="text-dracula-comment col-span-6 mt-1 flex items-center gap-x-1 text-sm md:ml-auto md:mt-2 lg:mt-4">
          <SkillBadge size={16} />
          Aprovado na avaliação de competências do LinkedIn.
        </p>
      </ul>
    </div>
  );
};
