import React from "react";
import { Title } from "../ui/Title";
import { WorkCard } from "../WorkCard";

const experiences: {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
}[] = [
  {
    title: "Desenvolvedor Front-end",
    companyShort: "AGU",
    company: "Advocacia-Geral da União",
    dateStart: "01.2022",
    dateEnd: "Presente",
    description: [
      "Desenvolvimento de novas interfaces de sistemas legado web e novas ferramentas de uso interno com apoio da Imprensa Nacional, com uso de Blazor, Bootstrap e Tailwind CSS.",
    ],
  },
  {
    title: "UI/UX Designer Sênior",
    companyShort: "AGU",
    company: "Advocacia-Geral da União",
    dateStart: "09.2018",
    dateEnd: "01.2022",
    description: [
      "Análise de requisitos e desenvolvimento de aplicativo mobile em Microsoft PowerApps.",
      "Criação de ícones e brandbook de uso interno da Diretoria de Tecnologia.",
      "Desenvolvimento front-end nos projetos do Portal do Governo Plone e sistema de gerenciamento de serviços para a SAD/DF, OTRS.",
    ],
  },
  {
    title: "UI/UX Designer",
    companyShort: "BBTS",
    company: "Banco do Brasil Tecnologia & Serviços",
    dateStart: "04.2015",
    dateEnd: "09.2018",
    description: [
      "Elaboração de Projeto na Diretoria de Novos Produtos Empresariais de gerenciador de contas de empresas, através de prototipação em alta fidelidade e teste interno.",
      "Criação de wireframes, mockups e protótipos de alta fidelidade com uso de Axure RP para validação de documentação e melhora de experiência em produtos do Banco do Brasil, incluindo experiências e ícones elaborados e testadas para o aplicativo mobile do BB nas versões 2 e 3, com mais de 50 milhões de downloads e nota 4,5 na Google Play. ",
      "Desenvolvimento front-end de projetos para o Portal de Defesa do Consumidor e ferramenta interna SINDEC com uso de Bootstrap.",
    ],
  },
  {
    title: "Assistente Administrativo",
    companyShort: "CAER",
    company: "Companhia de Águas e Esgotos de Roraima",
    dateStart: "12.2012",
    dateEnd: "06.2011",
    description: [
      "Preparação e elaboração de balancetes e outros documentos administrativos da área contábil, uso de ferramentas TOTVS e manutenções em Banco SQL.",
    ],
  },
];

export const Experience = () => {
  return (
    <>
      <Title title="Experiência" />
      {experiences.map((experience) => (
        <WorkCard {...experience} key={experience.dateEnd} />
      ))}

      <div className="p mb-4 text-sm font-medium leading-6"></div>
    </>
  );
};
