import { TEducation } from "../types/TEducation";

export interface DataEducation {
  degrees: TEducation[];
  courses: TEducation[];
  certifications: TEducation[];
}

export const education: DataEducation = {
  degrees: [
    {
      type: {
        en: "Postgraduate Degree",
        br: "Pós-graduação Lato Sensu",
      },
      title: {
        en: "Desenvolvimento de Jogos Digitais",
        br: "Desenvolvimento de Jogos Digitais",
      },
      company: {
        en: "Instituto Brasileiro de Formação",
        br: "Instituto Brasileiro de Formação",
      },
      dateStart: "2020",
      dateEnd: "2022",
    },
    {
      type: {
        en: "Postgraduate Degree",
        br: "Pós-graduação Lato Sensu",
      },
      title: {
        en: "Docência em Comunicação com Ênfase em Publicidade e Propaganda",
        br: "Docência em Comunicação com Ênfase em Publicidade e Propaganda",
      },
      company: {
        en: "Instituto Brasileiro de Formação",
        br: "Instituto Brasileiro de Formação",
      },
      dateStart: "2020",
      dateEnd: "2021",
    },
    {
      type: { en: "Ensino Superior", br: "Ensino Superior" },
      title: {
        en: "Análise e Desenvolvimento de Sistemas",
        br: "Análise e Desenvolvimento de Sistemas",
      },
      company: {
        en: "Faculdade de Ensino Superior Cathedral",
        br: "Faculdade de Ensino Superior Cathedral",
      },
      dateStart: "2011",
      dateEnd: "2014",
    },
  ],
  courses: [
    {
      title: { en: "React Completo com Hooks", br: "React Completo com Hooks" },
      company: { en: "Origamid.dev", br: "Origamid.dev" },
      dateEnd: "2022",
      hours: "36",
    },
    {
      title: { en: "Motion Design", br: "Motion Design" },
      company: { en: "Alura", br: "Alura" },
      dateEnd: "2021",
      hours: "110",
    },
    {
      title: { en: "Game Design", br: "Game Design" },
      company: { en: "Alura", br: "Alura" },
      dateEnd: "2021",
      hours: "60",
    },
    {
      title: { en: "Metodologia Ágil SCRUM", br: "Metodologia Ágil SCRUM" },
      company: { en: "SENAC/DF", br: "SENAC/DF" },
      dateEnd: "2019",
      hours: "20",
    },
    {
      title: { en: "HTML & CSS", br: "HTML & CSS" },
      company: { en: "Alura", br: "Alura" },
      dateEnd: "2016",
      hours: "52",
    },
    {
      title: { en: "Auxiliar Administrativo", br: "Auxiliar Administrativo" },
      company: { en: "SENAI/RR", br: "SENAI/RR" },
      dateEnd: "2012",
      hours: "800",
    },
  ],

  certifications: [
    {
      title: {
        en: "Diplome d'Etudes en Langue Française A2",
        br: "Diplome d'Etudes en Langue Française A2",
      },
      company: {
        en: "Aliança Francesa de Brasília",
        br: "Aliança Francesa de Brasília",
      },
      dateEnd: "2021",
    },
    {
      title: {
        en: "Scrum Foundation Professional Certificate",
        br: "Scrum Foundation Professional Certificate",
      },
      company: { en: "CertiProf", br: "CertiProf" },
      dateEnd: "2019",
    },
  ],
};
