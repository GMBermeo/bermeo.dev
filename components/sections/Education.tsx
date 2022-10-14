import React from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { useRouter } from "next/router";
import {
  TCertification,
  TCertificationResponse,
  TCourse,
  TCourseResponse,
  TDegree,
  TDegreeResponse,
} from "../../types/TEducation";

export const Education = ({ education, locale }: any) => {
  const { degrees, courses, certifications } = education;

  return (
    <>
      <Title title={locale == "en" ? "Education" : "Formação"} />
      <div className="customContainer mb-8">
        <ul className="mb-8">
          {degrees.map((degree: TDegreeResponse) => (
            <EducationCard {...degree} key={degree.title} />
          ))}
        </ul>
        <Subtitle title={"Cursos"} />
        <ul className="mb-8">
          {courses.map((course: TCourseResponse) => (
            <EducationCard {...course} key={course.title} />
          ))}
        </ul>
        <Subtitle title={"Certificados"} />
        <ul>
          {certifications.map((certification: TCertificationResponse) => (
            <EducationCard {...certification} key={certification.title} />
          ))}
        </ul>
      </div>
    </>
  );
};
