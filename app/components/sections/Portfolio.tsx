"use client";
import type { JSX } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ProjectCard, Title } from "@components";
import { projects } from "@data";
import type { Project } from "@types";

export const Portfolio = (): JSX.Element => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      origin: "center",
      spacing: -75,
    },
  });

  return (
    <div className="mx-auto">
      <Title title={"Projects"} />
      <div
        ref={ref}
        className="keen-slider rounded-lg bg-dracula-background px-0 pt-4 md:mx-auto"
      >
        {projects.map(
          (project: Project, index: number) =>
            project.value > 3 && (
              <div
                className={`keen-slider__slide number-slide${(index + 1).toString()}`}
                key={project.title}
              >
                <ProjectCard project={project} />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
