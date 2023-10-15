import { projects } from "@data";
import { allImages } from "app/api/images";
import { TImage } from "@types";

export function loadProjects(locale: "en" | "br") {
  const response = projects.map((project) => ({
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
