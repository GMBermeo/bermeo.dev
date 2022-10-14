import React from "react";
import { ProjectCard } from "../ProjectCard";
import { Subtitle } from "../ui/Subtitle";
import { projects } from "../../_data/projects";
import { TProject } from "../../types/TProject";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Portfolio = ({ locale }: any) => {
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
    <>
      <Subtitle title={locale == "en" ? "Projects" : "Projetos"} />
      <div className="customContainer">
        <div
          ref={ref}
          className="keen-slider container rounded-lg bg-dracula-background px-0 pt-4 md:mx-auto"
        >
          {projects.en.map(
            (projeto: TProject, index: number) =>
              projeto.value > 3 && (
                <div
                  className={`keen-slider__slide number-slide${index + 1}`}
                  key={projeto.title}
                >
                  <ProjectCard {...projeto} />
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};
