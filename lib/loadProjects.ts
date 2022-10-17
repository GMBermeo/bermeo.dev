import { experiences } from "@data/experiences";
import { projects } from "@data/projects";
import { allImages } from "@pages/api/images";
import { TExperience } from "../types/TExperience";
import { TImage } from "../types/TImage";
import { TProject } from "../types/TProject";

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadProjects(locale: "en" | "br") {
  const response = experiences.map((experience: TExperience) => ({
    title: experience.title[locale as keyof typeof experience.title],
    company: experience.company,
    companyShort: experience.companyShort,
    dateStart: experience.dateStart,
    dateEnd: experience.dateEnd,
    description:
      experience.description[locale as keyof typeof experience.description],
    linkTo: experience.linkTo ? experience.linkTo : null,
  }));

  // const response = projects.map((project: TProject) => ({
  //   title: project.title[locale as keyof typeof project.title],
  //   description:
  //     project.description[locale as keyof typeof project.description],
  //   coverImage: project.coverImage,
  //   images: allImages
  //     .filter(
  //       (x) =>
  //         project.imagesPath && x.src.includes(project.imagesPath.toString())
  //     )
  //     .map((image: TImage) => {
  //       src: image.src;
  //       width: image.width;
  //       height: image.height;
  //       alt: image.alt;
  //       // altBr?: image.altBr;
  //     }),

  //   // allImages.map((image: TImage) => {
  //   //   project.imagesPath;
  //   // }),

  //   company: project.company,
  //   skills: project.skills,
  //   value: project.value,
  // }));

  // return "mamaco";
  return response;
}
