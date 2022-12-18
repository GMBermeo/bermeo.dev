import { useContext } from "react";
import { SkillCard } from "../SkillCard";
import { SkillBadge } from "../ui/SkillBadge";
import { Title } from "../ui/Title";
import { skills } from "../../_data/skills";
import { LocaleContext } from "@contexts/LocaleContext";

export const Skills = () => {
  const { isEng } = useContext(LocaleContext);

  return (
    <div className="mb-8">
      <Title title={isEng() ? "Skills" : "Aptidões"} />
      {/* <div className="mx-0 px-0 sm:container sm:mx-auto sm:max-w-3xl sm:px-8"> */}
      <div>
        <ul className="bg-dracula-background grid grid-flow-row grid-cols-[repeat(6,_min(fit))] grid-rows-4 gap-x-4 gap-y-3 overflow-x-auto whitespace-nowrap rounded-none p-6 pb-5 text-sm font-medium sm:rounded-lg lg:gap-y-4 lg:p-8 lg:pb-6">
          {skills.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
          ))}
          <a
            className="text-dracula-comment col-span-6 mt-1 flex items-center gap-x-1 text-sm md:ml-auto md:mt-2 lg:mt-4"
            href="https://www.linkedin.com/help/linkedin/answer/a507663/linkedin-skill-assessments?lang=pt"
            hrefLang="pt-br"
          >
            <SkillBadge size={16} />
            {isEng()
              ? "Approved in the LinkedIn Skills Assessment Test."
              : "Aprovado na avaliação de competências do LinkedIn."}
          </a>
        </ul>
      </div>
    </div>
  );
};
