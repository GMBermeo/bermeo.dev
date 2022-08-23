import React from "react";
import { ProjectCard } from "../ProjectCard";
import { Subtitle } from "../ui/Subtitle";
import { projects } from "../../_data/projects";
import { TProject } from "../../types/TProject";

export const Portfolio = () => {
  return (
    <>
      <Subtitle title={"Projetos"} />
      <div className="mx-0 px-0 md:container md:mx-auto md:max-w-3xl md:px-8">
        <div
          id="container"
          className="bg-dracula-background mb-8 max-h-fit w-full overflow-y-hidden overflow-x-scroll whitespace-nowrap rounded-none pb-2 pt-4 pl-0 md:rounded-lg md:pt-2"
        >
          {projects.map(
            (projeto: TProject) =>
              projeto.value > 3 && (
                <ProjectCard {...projeto} key={projeto.title} />
              )
          )}
        </div>
      </div>
    </>
  );
};
