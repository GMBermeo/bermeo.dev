import { Title, WorkCard } from "@components";
import { experiences } from "@data";
import { ExperienceResponse } from "@types";

export const Experience = (): JSX.Element => {
  return (
    <div>
      <Title title={"Experience"} />
      <ol>
        {experiences.map((experience: ExperienceResponse) => (
          <WorkCard {...experience} key={experience.dateEnd} />
        ))}
      </ol>
    </div>
  );
};
