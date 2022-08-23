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
      <div className="mx-0 px-0 sm:container sm:mx-auto sm:max-w-3xl sm:px-8">
        <ul className="bg-dracula-background my-6 grid grid-flow-row grid-cols-[repeat(6,_min(fit))] grid-rows-4 gap-x-4 gap-y-3 overflow-x-auto whitespace-nowrap rounded-none p-6 pb-5 text-sm font-medium sm:rounded-lg lg:my-8 lg:gap-y-4 lg:p-8 lg:pb-6">
          {skills.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
          ))}
          <a
            className="text-dracula-comment col-span-6 mt-1 flex items-center gap-x-1 text-sm md:ml-auto md:mt-2 lg:mt-4"
            href="https://www.linkedin.com/help/linkedin/answer/a507663/linkedin-skill-assessments?lang=pt"
            hrefLang="pt-br"
          >
            <SkillBadge size={16} />
            Aprovado na avaliação de competências do LinkedIn.
          </a>
        </ul>
      </div>
    </div>
  );
};
