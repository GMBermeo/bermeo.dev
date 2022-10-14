import React from "react";
import { Title } from "../ui/Title";
import { WorkCard } from "../ExperienceCard";
import { TExperienceResponse } from "../../types/TExperience";

export const Experience = ({ experiences, locale }: any) => {
  return (
    <>
      <Title title={locale == "en" ? "Experience" : "Experiência"} />
      <ol className="customContainer">
        {experiences.map((experience: TExperienceResponse) => (
          <WorkCard {...experience} key={experience.dateEnd} />
        ))}
      </ol>
    </>
  );
};
