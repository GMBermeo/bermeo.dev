import React from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { useRouter } from "next/router";
import { education } from "@data/education";

export const Education = () => {
  const { degrees, courses, certifications } = education;
  const { locale } = useRouter();

  return (
    <>
      <Title title={locale == "br" ? "Formação" : "Education"} />
      <div className="customContainer mb-8">
        <ul className="mb-8">
          {degrees.map((degree) => (
            <EducationCard key={degree.title.en} {...degree} />
          ))}
        </ul>
        <Subtitle title={"Cursos"} />
        <ul className="mb-8">
          {courses.map((course) => (
            <EducationCard {...course} key={course.title.en} />
          ))}
        </ul>
        <Subtitle title={"Certificados"} />
        <ul>
          {certifications.map((certification) => (
            <EducationCard {...certification} key={certification.title.en} />
          ))}
        </ul>
      </div>
    </>
  );
};
