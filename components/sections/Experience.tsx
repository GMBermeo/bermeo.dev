import React, { useContext } from "react";
import { Title } from "../ui/Title";
import { WorkCard } from "../ExperienceCard";
import { TExperienceResponse } from "../../types/TExperience";
import { LocaleContext } from "@contexts/LocaleContext";

export const Experience = ({ experiences }: any) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <div>
      <Title title={isEng() ? "Experience" : "Experiência"} />
      <ol>
        {experiences.map((experience: TExperienceResponse) => (
          <WorkCard {...experience} key={experience.dateEnd} />
        ))}
      </ol>
    </div>
  );
};
