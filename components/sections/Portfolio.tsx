import React from "react";
import { ProjectCard } from "../ProjectCard";
import { Subtitle } from "../ui/Subtitle";
import { projects } from "../../_data/projects";
import { TProject } from "../../types/TProject";

export const Portfolio = () => {
  return (
    <>
      <Subtitle title={"Projetos"} />
      <div
        id="container"
        className="bg-dracula-background mb-8 w-full overflow-x-scroll whitespace-nowrap rounded-lg py-2 px-3"
      >
        {projects.map(
          (projeto: TProject) =>
            projeto.value > 3 && (
              <ProjectCard {...projeto} key={projeto.title} />
            )
        )}
      </div>
    </>
  );
};
