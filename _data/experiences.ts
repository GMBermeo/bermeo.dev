import { TExperience } from "../types/TExperience";

export interface DataEducation {
  experiences: TExperience[];
}

export const experiences: TExperience[] = [
  {
    title: {
      en: "Front-end Developer",
      br: "Desenvolvedor Front-end",
    },
    companyShort: "TTY",
    company: "TTY2000",
    dateStart: "09.2022",
    dateEnd: "Presente",
    description: {
      en: [
        "Several new solutions were developed using Next.js with Node.js and TailwindCSS.",
        "One of the attributions was updating front-end interfaces of legacy systems using new technologies and refactoring HTML and CSS code in PHP projects following the principles of Clean Code to facilitate maintenance.",
        "Migration and maintenance of Azure DevOps with Git and support on using and organizing projects within the tool.",
      ],
      br: [
        "Desenvolvimento de novas soluções com uso de Next.js com Node.js e TailwindCSS.",
        "Atualização de interfaces front-end de sistemas legado usando novas tecnologias além de refatoração de código HTML e CSS em projetos PHP seguindo os principios do Clean Code para facilitar manutenção.",
        "Migração e manutenção de Azure DevOps com Git, e suporte sobre uso e organização de projetos dentro da ferramenta.",
      ],
    },
  },
  {
    title: { en: "Front-end Developer", br: "Desenvolvedor Front-end" },
    companyShort: "AGU",
    company: "Advocacia-Geral da União",
    dateStart: "01.2022",
    dateEnd: "09.2022",
    description: {
      en: [
        "Development of new interfaces for legacy systems and new internal web tools with the support of the National Press, using Blazor, Bootstrap, and Tailwind CSS.",
      ],
      br: [
        "Desenvolvimento de novas interfaces de sistemas legado web e novas ferramentas de uso interno com apoio da Imprensa Nacional, com uso de Blazor, Bootstrap e Tailwind CSS.",
      ],
    },
    linkTo: "/advocacia-geral-da-uniao",
  },
  {
    title: { en: "Senior UI/UX Designer", br: "UI/UX Designer Sênior" },
    companyShort: "AGU",
    company: "Advocacia-Geral da União",
    dateStart: "09.2018",
    dateEnd: "01.2022",
    description: {
      en: [
        "Requirements analysis and mobile application development using Microsoft Powerapps.",
        "Creation of icons and brand book for internal use by the Technology Board.",
        "Front-end development in projects from the Portal do Governo Plone and service management system to SAD/DF, OTRS.",
      ],
      br: [
        "Análise de requisitos e desenvolvimento de aplicativo mobile em Microsoft PowerApps.",
        "Criação de ícones e brandbook de uso interno da Diretoria de Tecnologia.",
        "Desenvolvimento front-end nos projetos do Portal do Governo Plone e sistema de gerenciamento de serviços para a SAD/DF, OTRS.",
      ],
    },
    linkTo: "/advocacia-geral-da-uniao",
  },
  {
    title: { en: "UI/UX Designer", br: "UI/UX Designer" },
    companyShort: "BBTS",
    company: "Banco do Brasil Tecnologia & Serviços",
    dateStart: "04.2015",
    dateEnd: "09.2018",
    description: {
      en: [
        "Development of a new Project within the collaboration of the Director's Board focused on accounting management for companies through high-fidelity prototyping and extensive internal testing with high-fidelity prototyping.",
        "Creation of wireframes, mockups, and high-fidelity prototyping using Axure RP for documentation validation and experience improvement in Banco do Brasil products, including experiences and icons developed and tested for BB's mobile app in versions 2 and 3, with more than 50 million downloads and a 4.5 rating on Google Play.",
        "Front-end development of projects for the 'Portal de Defesa do Consumidor' and internal tool SINDEC using Bootstrap.",
      ],
      br: [
        "Elaboração de Projeto na Diretoria de Novos Produtos Empresariais de gerenciador de contas de empresas, através de prototipação em alta fidelidade e teste interno.",
        "Criação de wireframes, mockups e protótipos de alta fidelidade com uso de Axure RP para validação de documentação e melhora de experiência em produtos do Banco do Brasil, incluindo experiências e ícones elaborados e testadas para o aplicativo mobile do BB nas versões 2 e 3, com mais de 50 milhões de downloads e nota 4,5 na Google Play. ",
        "Desenvolvimento front-end de projetos para o Portal de Defesa do Consumidor e ferramenta interna SINDEC com uso de Bootstrap.",
      ],
    },
    linkTo: "/banco-do-brasil",
  },
  {
    title: { en: "Administrative Assistant", br: "Assistente Administrativo" },
    companyShort: "CAER",
    company: "Companhia de Águas e Esgotos de Roraima",
    dateStart: "12.2012",
    dateEnd: "06.2011",
    description: {
      en: [
        "Preparation and analysis of trial balances, ledgers, statements of movements by accounts, balance sheets, and depreciation reports for assets, in addition to making entries using TOTVS systems manually or using MySQL language when necessary.",
      ],
      br: [
        "Preparação e elaboração de balancetes e outros documentos administrativos da área contábil, uso de ferramentas TOTVS e manutenções em Banco SQL.",
      ],
    },
  },
];
