import React, { useContext } from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import {
  TCertificationResponse,
  TCourseResponse,
  TDegreeResponse,
} from "../../types/TEducation";
import { LocaleContext } from "@contexts/LocaleContext";

export const Education = ({ education }: any) => {
  const { degrees, courses, certifications } = education;
  const { isEng } = useContext(LocaleContext);

  return (
    <div>
      <Title title={isEng() ? "Education" : "Formação"} />
      <div className="mb-8">
        <ul className="mb-8">
          {degrees.map((degree: TDegreeResponse) => (
            <EducationCard {...degree} key={degree.title} />
          ))}
        </ul>
        <Subtitle title={isEng() ? "Courses" : "Cursos"} />
        <ul className="mb-8">
          {courses.map((course: TCourseResponse) => (
            <EducationCard {...course} key={course.title} />
          ))}
        </ul>
        <Subtitle title={isEng() ? "Certificates" : "Certificações"} />
        <ul>
          {certifications.map((certification: TCertificationResponse) => (
            <EducationCard {...certification} key={certification.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
