import { TDegree, TCourse, TCertification } from "../types/TEducation";

export interface DataEducation {
  degrees: TDegree[];
  courses: TCourse[];
  certifications: TCertification[];
}

export const education: DataEducation = {
  degrees: [
    {
      type: {
        en: "Postgraduate Degree",
        br: "Pós-graduação Lato Sensu",
      },
      title: {
        en: "Digital Games Development",
        br: "Desenvolvimento de Jogos Digitais",
      },
      institution: "Instituto Brasileiro de Formação",
      dateStart: "2020",
      dateEnd: "2022",
    },
    {
      type: {
        en: "Postgraduate Degree",
        br: "Pós-graduação Lato Sensu",
      },
      title: {
        en: "Teaching in Communications with Emphasis in Publicity and Advertising",
        br: "Docência em Comunicação com Ênfase em Publicidade e Propaganda",
      },
      institution: "Instituto Brasileiro de Formação",
      dateStart: "2020",
      dateEnd: "2021",
    },
    {
      type: { en: "Undergraduate Degree", br: "Ensino Superior" },
      title: {
        en: "Analysis and Development of Computer Systems",
        br: "Análise e Desenvolvimento de Sistemas",
      },
      institution: "Faculdade de Ensino Superior Cathedral",
      dateStart: "2011",
      dateEnd: "2014",
    },
  ],
  courses: [
    {
      title: {
        en: "React Complete with Hooks",
        br: "React Completo com Hooks",
      },
      institution: "Origamid.dev",
      dateEnd: "2022",
      hours: 36,
    },
    {
      title: { en: "Motion Design", br: "Motion Design" },
      institution: "Alura",
      dateEnd: "2021",
      hours: 110,
    },
    {
      title: { en: "Game Design", br: "Game Design" },
      institution: "Alura",
      dateEnd: "2021",
      hours: 60,
    },
    {
      title: { en: "Agile SCRUM Methodology", br: "Metodologia Ágil SCRUM" },
      institution: "SENAC/DF",
      dateEnd: "2019",
      hours: 20,
    },
    {
      title: { en: "HTML & CSS", br: "HTML & CSS" },
      institution: "Alura",
      dateEnd: "2016",
      hours: 52,
    },
    {
      title: { en: "Administrative Assistant", br: "Auxiliar Administrativo" },
      institution: "SENAI/RR",
      dateEnd: "2012",
      hours: 800,
    },
  ],

  certifications: [
    {
      title: "Diplome d'Etudes en Langue Française (DELF) A2",
      institution: "Alliance Française de Brasília",
      dateEnd: "2021",
    },
    {
      title: "Scrum Foundation Professional Certificate",
      institution: "CertiProf",
      dateEnd: "2019",
    },
  ],
};
