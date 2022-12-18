import { useContext } from "react";
import { ProjectCard } from "../ProjectCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { LocaleContext } from "@contexts/LocaleContext";
import { Title } from "@components/ui/Title";

export const Portfolio = ({ projects }: any) => {
  const { isEng } = useContext(LocaleContext);

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
      <Title title={isEng() ? "Projects" : "Projetos"} />
      <div
        ref={ref}
        className="keen-slider bg-dracula-background rounded-lg px-0 pt-4 md:mx-auto"
      >
        {projects.map(
          (projeto: any, index: number) =>
            projeto.value > 3 && (
              <div
                className={`keen-slider__slide number-slide${index + 1}`}
                key={index}
              >
                <ProjectCard {...projeto} />
              </div>
            )
        )}
      </div>
    </div>
  );
};
