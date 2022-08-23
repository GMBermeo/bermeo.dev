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
        className="bg-dracula-background mb-8 max-h-[27rem] w-full overflow-y-hidden overflow-x-scroll whitespace-nowrap rounded-lg pb-2 pt-4 pl-4 sm:pl-2 md:pl-0 md:pt-2"
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
