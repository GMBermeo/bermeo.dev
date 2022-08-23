/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TProject } from "../types/TProject";

export const ProjectCard = ({
  title,
  description,
  coverImage,
  company,
  skills,
}: TProject) => {
  return (
    <figure className="inline-block h-full w-5/6 pb-2">
      <img className="mb-2 w-full" src={coverImage} alt={title} />
      <div className="flex items-center justify-center gap-x-2 text-sm">
        {skills.map((skill) => (
          <div
            className="text-dracula-comment mb-1 rounded bg-slate-800 px-2 py-1"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
      <figcaption className="text-center text-sm font-medium md:text-lg">
        {title}{" "}
        {company !== "Other" && (
          <span className="text-primary text-sm">@{company}</span>
        )}
      </figcaption>
    </figure>
  );
};
