"use client";
import { useContext } from "react";
import { Title, WorkCard } from "@components";
import { TExperienceResponse } from "@types";
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
