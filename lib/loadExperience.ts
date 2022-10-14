import { experiences } from "@data/experiences";
import { TExperience } from "../types/TExperience";

export function loadExperience(locale: "en" | "br") {
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

  return response;
}
