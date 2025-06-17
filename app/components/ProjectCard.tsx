import type { JSX } from "react";
import type { Project } from "@types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = (props: Readonly<ProjectCardProps>): JSX.Element => {
  return (
    <figure className="flex h-full max-h-full w-5/6 flex-col justify-end pb-2">
      <img
        className="mb-2 w-full"
        src={props.project.coverImage}
        alt={`${props.project.title} made with ${props.project.skills.join(", ")}`}
        title={props.project.title}
        loading="lazy"
        width={697}
        height={368}
        // alt={title.en : title.br}
      />

      <figcaption className="text-center text-sm font-medium sm:text-lg">
        {props.project.title}{" "}
        {props.project.company !== "Other" && (
          <span className="text-sm text-primary">@{props.project.company}</span>
        )}
      </figcaption>
      <div className="flex items-center justify-center gap-x-1 text-sm">
        {props.project.skills.map((skill: string) => (
          <div
            className="my-2 rounded bg-slate-800 px-2 py-1 text-dracula-comment"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </figure>
  );
};
