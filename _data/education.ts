import type { Degree, Course, Certification } from "@types";

export interface DataEducation {
  degrees: Degree[];
  courses: Course[];
  certifications: Certification[];
}

export const education: DataEducation = {
  degrees: [
    {
      type: "Postgraduate Degree",
      title: "Digital Games Development",
      thesis:
        "Thesis on 'Leitmotif, Sound Design, Horizontal Re-sequencing, Vertical re-orchestration: An Introduction to Narrative in Music'",
      institution: "Instituto Brasileiro de Formação",
      dateStart: "2021",
      dateEnd: "2023",
      link: "/unibf23/",
    },
    // {
    //   type: {
    //     en: "Postgraduate Degree",
    //     br: "Pós-graduação Lato Sensu",
    //   },
    //   title: {
    //     en: "Teaching in Communications with Emphasis in Publicity and Advertising",
    //     br: "Docência em Comunicação com Ênfase em Publicidade e Propaganda",
    //   },
    //   institution: "Instituto Brasileiro de Formação",
    //   dateStart: "2020",
    //   dateEnd: "2021",
    // },
    {
      type: "Undergraduate Degree",
      title: "Analysis and Development of Computer Systems",
      institution: "Faculdade de Ensino Superior Cathedral",
      dateStart: "2011",
      dateEnd: "2014",
    },
  ],
  courses: [
    {
      title: "React Complete with Hooks",
      institution: "Origamid.dev",
      dateEnd: "2022",
      hours: 36,
    },
    {
      title: "Motion Design",
      institution: "Alura",
      dateEnd: "2021",
      hours: 110,
    },
    {
      title: "Game Design",
      institution: "Alura",
      dateEnd: "2021",
      hours: 60,
    },
    {
      title: "Agile SCRUM Methodology",
      institution: "SENAC/DF",
      dateEnd: "2019",
      hours: 20,
    },
    {
      title: "HTML & CSS",
      institution: "Alura",
      dateEnd: "2016",
      hours: 52,
    },
    {
      title: "Administrative Assistant",
      institution: "SENAI/RR",
      dateEnd: "2012",
      hours: 800,
    },
  ],

  certifications: [
    {
      title:
        "Associate Cloud Engineer Certification - ID 4a54a3f5c1d64dd39f64172b63a1c606",
      institution: "Google",
      dateEnd: "2025",
    },
    {
      title: "IELTS General - Score 6.5",
      institution: "Cambridge University Press & Assessment",
      dateEnd: "2023",
    },
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
