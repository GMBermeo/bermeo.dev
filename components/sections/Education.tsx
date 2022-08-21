import React from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { degrees, courses, certfications } from "../../_data/education";

export const Education = () => {
  return (
    <div className="mb-12">
      <Title title={"Formação"} />
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
        {certfications.map((certification) => (
          <EducationCard {...certification} key={certification.title} />
        ))}
      </ul>
    </div>
  );
};
