import React from "react";
import { Title } from "../ui/Title";
import { WorkCard } from "../WorkCard";
import { TExperience } from "../../types/TExperience";
import { experiences } from "../../_data/experiences";

export const Experience = () => {
  return (
    <>
      <Title title="Experiência" />
      <ol>
        {experiences.map((experience: TExperience) => (
          <WorkCard {...experience} key={experience.dateEnd} />
        ))}
      </ol>
    </>
  );
};
