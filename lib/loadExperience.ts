import { experiences } from "@data";
import { Experience } from "@types";

export function loadExperience(locale: "en" | "br") {
  const response = experiences.map((experience: Experience) => ({
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