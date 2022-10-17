/* eslint-disable @next/next/no-img-element */
import { LocaleContext } from "@contexts/LocaleContext";
import React, { useContext } from "react";
import { TProject } from "../types/TProject";

export const ProjectCard = ({
  title,
  description,
  coverImage,
  company,
  skills,
}: TProject) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <figure className="flex h-full max-h-full w-5/6 flex-col justify-end pb-2">
      <img
        className="mb-2 w-full"
        src={coverImage}
        alt={isEng() ? title.en : title.br}
      />

      <figcaption className="text-center text-sm font-medium sm:text-lg">
        {isEng() ? title.en : title.br}{" "}
        {company !== "Other" && (
          <span className="text-primary text-sm">@{company}</span>
        )}
      </figcaption>
      <div className="flex items-center justify-center gap-x-1 text-sm">
        {skills.map((skill) => (
          <div
            className="text-dracula-comment my-2 rounded bg-slate-800 px-2 py-1"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </figure>
  );
};
