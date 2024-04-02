import { Title, WorkCard } from "@components";
import { ExperienceResponse } from "@types";

export const Experience = ({ experiences }: any) => {
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
