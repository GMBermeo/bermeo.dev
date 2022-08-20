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
    title: "React Completo com Hooks (36h)",
    company: "Origamid.dev",
    dateEnd: "2022",
  },
  {
    title: "Motion Design (110h)",
    company: "Alura",
    dateEnd: "2021",
  },
  {
    title: "Game Design (60h)",
    company: "Alura",
    dateEnd: "2021",
  },
  {
    title: "Metodologia Ágil SCRUM (20h)",
    company: "SENAC/DF",
    dateEnd: "2019",
  },
  {
    title: "HTML & CSS (52h)",
    company: "Alura",
    dateEnd: "2016",
  },
  {
    title: "Auxiliar Administrativo (800h)",
    company: "SENAI/RR",
    dateEnd: "2012",
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
    <div>
      <div>
        <Title title={"Formação"} />
        <ul className="ml-2">
          {formacoes.map((formacao) => (
            <EducationCard {...formacao} key={formacao.title} />
          ))}
        </ul>
      </div>
      <div>
        <Subtitle title={"Cursos"} />
        {cursos.map((curso) => (
          <EducationCard {...curso} key={curso.title} />
        ))}
      </div>
      <div>
        <Subtitle title={"Certificados"} />
        {certificados.map((certificado) => (
          <EducationCard {...certificado} key={certificado.title} />
        ))}
      </div>
    </div>
  );
};
