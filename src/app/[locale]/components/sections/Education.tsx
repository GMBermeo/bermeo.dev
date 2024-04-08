import { EducationCard, Subtitle, Title } from "@components";
import { CertificationResponse, CourseResponse, DegreeResponse } from "@types";

export const Education = ({ education }: any) => {
  const { degrees, courses, certifications } = education;

  return (
    <div>
      <Title title={"Education"} />
      <div className="mb-8">
        <ul className="mb-8">
          {degrees.map((degree: DegreeResponse) => (
            <EducationCard {...degree} key={degree.title} />
          ))}
        </ul>
        <Subtitle title={"Courses"} />
        <ul className="mb-8">
          {courses.map((course: CourseResponse) => (
            <EducationCard {...course} key={course.title} />
          ))}
        </ul>
        <Subtitle title={"Certificates"} />
        <ul>
          {certifications.map((certification: CertificationResponse) => (
            <EducationCard {...certification} key={certification.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
