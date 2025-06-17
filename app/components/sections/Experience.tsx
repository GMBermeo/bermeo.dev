import type { JSX } from "react";
import { Title, ExperienceCard } from "@components";
import { experiences } from "@data";
import type { ExperienceResponse } from "@types";

export const Experience = (): JSX.Element => {
  return (
    <div>
      <Title title={"Experience"} />
      <ol>
        {experiences.map((experience: ExperienceResponse) => (
          <ExperienceCard key={experience.dateEnd} experience={experience} />
        ))}
      </ol>
    </div>
  );
};
