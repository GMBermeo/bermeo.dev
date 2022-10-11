// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TEducation } from "../../../types/TEducation";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  en: {
    degrees: TEducation[];
    courses: TEducation[];
    certifications: TEducation[];
  };
  br: {
    degrees: TEducation[];
    courses: TEducation[];
    certifications: TEducation[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { locale } = req.query;
  res.status(200).json(data[locale as keyof Data]);
}

const data: Data = {
  en: {
    degrees: [
      {
        type: "Postgraduate Degree",
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
    ],
    courses: [
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
    ],

    certifications: [
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
    ],
  },
  br: {
    degrees: [
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
    ],
    courses: [
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
    ],

    certifications: [
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
    ],
  },
};
