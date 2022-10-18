import { projects } from "@data/projects";
import { allImages } from "@pages/api/images";
import { TImage } from "../types/TImage";
import { TProject } from "../types/TProject";

export function loadProjects(locale: "en" | "br") {
  const response = projects.map((project: TProject) => ({
    title: project.title[locale as keyof typeof project.title],
    description:
      project.description[locale as keyof typeof project.description],
    coverImage: project.coverImage,
    images:
      project.imagesPath &&
      allImages.filter((image: TImage) =>
        image.src.includes(project.imagesPath as string)
      ),
    company: project.company,
    skills: project.skills,
    value: project.value,
  }));

  return response;
}
