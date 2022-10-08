import React from "react";
import { Title } from "../ui/Title";
import { WorkCard } from "../WorkCard";
import { TExperience } from "../../types/TExperience";
import { experiences } from "../../_data/experiences";
import { useRouter } from "next/router";

export const Experience = () => {
  const { locale } = useRouter();

  return (
    <>
      <Title title={locale === "br" ? "Experiência" : "Experience"} />
      <ol className="customContainer">
        {experiences
          .filter((e) => e.locale === locale)
          .map((experience: TExperience) => (
            <WorkCard {...experience} key={experience.dateEnd} />
          ))}
      </ol>
    </>
  );
};
