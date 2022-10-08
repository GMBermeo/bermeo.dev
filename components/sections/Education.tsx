import React from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { degrees, courses, certifications } from "../../_data/education";
import { useRouter } from "next/router";

export const Education = () => {
  const { locale } = useRouter();

  return (
    <>
      <Title title={locale === "br" ? "Formação" : "Education"} />
      <div className="customContainer mb-8">
        <ul className="mb-8">
          {degrees.map((degree) => (
            <EducationCard {...degree} key={degree.title} />
          ))}
        </ul>
        <Subtitle title={"Cursos"} />
        <ul className="mb-8">
          {courses.map((course) => (
            <EducationCard {...course} key={course.title} />
          ))}
        </ul>
        <Subtitle title={"Certificados"} />
        <ul>
          {certifications.map((certification) => (
            <EducationCard {...certification} key={certification.title} />
          ))}
        </ul>
      </div>
    </>
  );
};
