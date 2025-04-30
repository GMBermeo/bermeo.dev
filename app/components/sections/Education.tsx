import { EducationCard, Subtitle, Title } from "@components";
import { education } from "@data";
import { CertificationResponse, CourseResponse, DegreeResponse } from "@types";

export const Education = (): JSX.Element => {
  return (
    <div>
      <Title title={"Education"} />
      <div className="mb-8">
        <ul className="mb-8">
          {education.degrees.map((degree: DegreeResponse) => (
            <EducationCard {...degree} key={degree.title} />
          ))}
        </ul>
        <Subtitle title={"Courses"} />
        <ul className="mb-8">
          {education.courses.map((course: CourseResponse) => (
            <EducationCard {...course} key={course.title} />
          ))}
        </ul>
        <Subtitle title={"Certificates"} />
        <ul>
          {education.certifications.map(
            (certification: CertificationResponse) => (
              <EducationCard {...certification} key={certification.title} />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};
