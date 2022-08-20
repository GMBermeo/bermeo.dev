import React from "react";
import { EducationCard } from "../EducationCard";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";

export interface TEducation {
  type?: "Pós-graduação Lato Sensu" | "Ensino Superior" | undefined;
  title: string;
  company: string;
  dateStart?: string;
  dateEnd: string;
  hours?: string;
}

const formacoes: TEducation[] = [
  {
    type: "Pós-graduação Lato Sensu",
    title: "Desenvolvimento de Jogos Digitais",
    company: "Instituto Brasileiro de Formação",
    dateStart: "2020",
    dateEnd: "2022",
  },
  {
    type: "Pós-graduação Lato Sensu",
    title: "Docência em Comunicação com Ênfase em Publicidade e Propaganda",
    company: "Instituto Brasileiro de Formação",
    dateStart: "2020",
    dateEnd: "2021",
  },
  {
    type: "Ensino Superior",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "Faculdade de Ensino Superior Cathedral",
    dateStart: "2011",
    dateEnd: "2014",
  },
];

const cursos: TEducation[] = [
  {
    title: "React Completo com Hooks",
    company: "Origamid.dev",
    dateEnd: "2022",
    hours: "36",
  },
  {
    title: "Motion Design",
    company: "Alura",
    dateEnd: "2021",
    hours: "110",
  },
  {
    title: "Game Design",
    company: "Alura",
    dateEnd: "2021",
    hours: "60",
  },
  {
    title: "Metodologia Ágil SCRUM",
    company: "SENAC/DF",
    dateEnd: "2019",
    hours: "20",
  },
  {
    title: "HTML & CSS",
    company: "Alura",
    dateEnd: "2016",
    hours: "52",
  },
  {
    title: "Auxiliar Administrativo",
    company: "SENAI/RR",
    dateEnd: "2012",
    hours: "800",
  },
];

const certificados: TEducation[] = [
  {
    title: "Diplome d'Etudes en Langue Française A2",
    company: "Aliança Francesa de Brasília",
    dateEnd: "2021",
  },
  {
    title: "Scrum Foundation Professional Certificate",
    company: "CertiProf",
    dateEnd: "2019",
  },
];

export const Education = () => {
  return (
    <div className="mb-12">
      <Title title={"Formação"} />
      <ul className="mb-8">
        {formacoes.map((formacao) => (
          <EducationCard {...formacao} key={formacao.title} />
        ))}
      </ul>
      <Subtitle title={"Cursos"} />
      <ul className="mb-8">
        {cursos.map((curso) => (
          <EducationCard {...curso} key={curso.title} />
        ))}
      </ul>
      <Subtitle title={"Certificados"} />
      <ul>
        {certificados.map((certificado) => (
          <EducationCard {...certificado} key={certificado.title} />
        ))}
      </ul>
    </div>
  );
};
