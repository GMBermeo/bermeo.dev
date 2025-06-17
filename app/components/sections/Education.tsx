import type { JSX } from "react";
import { EducationCard, Subtitle, Title } from "@components";
import { education } from "@data";
import type {
  CertificationResponse,
  CourseResponse,
  DegreeResponse,
} from "@types";

export const Education = (): JSX.Element => {
  return (
    <div>
      <Title title={"Education"} />
      <div className="mb-8">
        <ul className="mb-8">
          {education.degrees.map((degree: DegreeResponse) => (
            <EducationCard key={degree.title} {...degree} />
          ))}
        </ul>
        <Subtitle title={"Courses"} />
        <ul className="mb-8">
          {education.courses.map((course: CourseResponse) => (
            <EducationCard key={course.title} {...course} />
          ))}
        </ul>
        <Subtitle title={"Certificates"} />
        <ul>
          {education.certifications.map(
            (certification: CertificationResponse) => (
              <EducationCard key={certification.title} {...certification} />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};
