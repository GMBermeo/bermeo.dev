import { education } from "@data";
import { TCertification, TCourse, TDegree } from "../types/TEducation";

export function loadEducation(locale: "en" | "br") {
  const { degrees, courses, certifications } = education;

  const response = {
    degrees: degrees.map((item: TDegree) => ({
      title: item.title[locale as keyof typeof item.title],
      type: item.type[locale as keyof typeof item.type],
      thesis: item.thesis
        ? item.thesis[locale as keyof typeof item.thesis]
        : null,
      institution: item.institution,
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
    })),
    courses: courses.map((item: TCourse) => ({
      title: item.title[locale as keyof typeof item.title],
      institution: item.institution,
      dateEnd: item.dateEnd,
      hours: item.hours,
    })),
    certifications: certifications.map((item: TCertification) => ({
      title: item.title,
      institution: item.institution,
      dateEnd: item.dateEnd,
    })),
  };

  return response;
}
