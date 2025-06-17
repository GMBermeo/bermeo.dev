import type { JSX } from "react";
import { SkillBadge, SkillCard, Title } from "@components";
import { skills } from "@data";

export const Skills = (): JSX.Element => {
  return (
    <div className="mb-8">
      <Title title={"Skills"} />
      {/* <div className="mx-0 px-0 sm:container sm:mx-auto sm:max-w-3xl sm:px-8"> */}
      <div>
        <ul className="grid grid-flow-row grid-cols-[repeat(6,_min(fit))] grid-rows-4 gap-x-4 gap-y-3 overflow-x-auto whitespace-nowrap rounded-none bg-dracula-background p-6 pb-5 text-sm sm:rounded-lg lg:gap-y-4 lg:p-8 lg:pb-6">
          {skills.map((skill) => (
            <SkillCard key={skill.label} skill={skill} />
          ))}
          <a
            className="col-span-6 mt-1 flex items-center gap-x-1 text-sm text-dracula-comment md:ml-auto md:mt-2 lg:mt-4"
            href="https://www.linkedin.com/help/linkedin/answer/a507663/linkedin-skill-assessments?lang=pt"
            hrefLang="pt-br"
          >
            <SkillBadge size={16} />
            Approved in the LinkedIn Skills Assessment Test.
          </a>
        </ul>
      </div>
    </div>
  );
};
