import { ProjectRaw } from "@types";

export const projects: ProjectRaw[] = [
  {
    title: {
      en: "Business Management Software",
      br: "Software de Gestão Empresarial",
    },
    description: {
      en: "Software conceptualized at the Directorate of New Business Products at Banco do Brasil. Management software that would replace Gestão BB, facilitating payments, receipts and other services for the accounting sector of legal clients (companies) of Banco do Brasil. The project was conceived and tested internally for six months. The main idea behind this software was that the user could do all actions without using the mouse. The inspiration for this keyboard navigation functionality came from the observation of legal clients who preferred using an older, monochromatic system to use only the keyboard and a responsive UI that could not be obtained with the “new” software on the market. Therefore, the high-fidelity prototyping in Axure RP had 47 screens, with dynamic forms and 100% keyboard-only practical use, for future proofs of concept.",
      br: "Software conceitualizado na Diretoria de Novos Produtos Empresariais dentro do Banco do Brasil. Um software de gestão que viria a substituir o Gestão BB, facilitando pagamentos, recebimento, e outros serviços para o setor contábil de clientes jurídicos (empresas) do Banco do Brasil. O projeto fora concebido e testado internamente durante 6 meses, a ideia principal que rondava a utilização deste software se dava no fato de todas as ações poderem ser feitas sem necessitar a utilização do mouse. A inspiração para essa funcionalidade de navegação via teclado veio da observação de atendentes de clientes juridicos em que preferiam a utilização de um sistema mais antigo, monocromático, em ordem da utilização apenas do teclado e responsividade que não se obtia pelo software “novo” que estava no mercado. A protipação de alta fidelidade em Axure RP contou com 47 telas, com formulários dinâmicos e utilização 100% funcional apenas por teclado, para futuras provas de conceito.",
    },
    coverImage: "/images/bbts/PLUGINS-Cover.png",
    imagesPath: "/images/bbts/PLUGINS",
    company: "BBTS",
    skills: ["Axure RP", "Bootstrap", "HTML & CSS"],
    value: 5,
  },
  {
    title: { en: "Programa de Gestão", br: "Programa de Gestão" },
    description: { en: "", br: "" },
    coverImage: "",
    imagesPath: null,
    company: "AGU",
    skills: ["HTML & CSS", "Tailwind CSS", "Git", "Javascript", "PHP"],
    value: 1,
  },
  {
    title: { en: "AGU Legis", br: "AGU Legis" },
    description: { en: "", br: "" },
    coverImage: "",
    imagesPath: null,
    company: "AGU",
    skills: ["HTML & CSS", "Bootstrap", "Git", "C#", "Blazor"],
    value: 1,
  },
  {
    title: { en: "App Escola da AGU", br: "App Escola da AGU" },
    description: {
      en: [
        "This project started as a high-fidelity prototype made in an experimental technology from Microsoft called Power Apps for the future development of a mobile app developed in React Native. Six months into the project, the prototype had such high fidelity, connected to the MySQL database, that the Project Owner decided to use the prototype as the final application.",
        "The PowerApps software did not make the platform to support the 11,000 members present at the Advocacia-Geral da União who could use the app to register for events, courses, and lectures, but with the use of views and prior filtering, we were able to launch successfully.",
        "The launch was reported in specialized media, and by 2021, the app had 4,000 active users and about 500 simultaneous daily accesses.",
      ],
      br: [
        "Este projeto começou como um protótipo de alta fidelidade feito em uma tecnologia experimental da Microsoft chamada de Power Apps, para o futuro desenvolvimento de um aplicativo móvel desenvolvido em React Native. Com 6 meses de projeto, o protótipo estava com tamanha fidelidade, conectado ao banco de dados MySQL, que fora decidido utilizar-se o protótipo como aplicativo final.",
        "A plataforma não era feita para suportar os 11.000 membros presentes na Advocacia-Geral da União que poderiam utilizar o app para se inscrever em eventos, cursos e palestras, mas com a utilização de views e filtragem prévia conseguimos lançar com sucesso. O lançamento foi noticiado em veículos especializados e em 2021 o aplicativo contava com 4 mil usuários ativos, e cerca de 500 acessos simultâneos diários.",
      ],
    },
    coverImage: "/images/agu/APP-Escola-Cover.png",
    imagesPath: "/images/agu/APP-Escola",
    company: "AGU",
    skills: ["PowerApps", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: { en: "Unio", br: "Unio" },
    description: {
      en: "The Attorney General’s Office has about 48 systems in use, most of them with the same source code in asp since the 1990s. Unio is a long-term project to rewrite all of these systems on a single platform, using the infrastructure of the organization’s leading software, SAPIENS, to be integrated other systems modularly.",
      br: "A Advocacia-Geral da União possui cerca de 48 sistemas em uso, a maioria deles, com o mesmo código-fonte em asp desde os anos 90. O Unio é um projeto de longo prazo de re-escrever todos esses sistemas em uma plataforma única, utilizando-se da infraestrutura do principal software do orgão, o SAPIENS.",
    },
    coverImage: "/images/agu/UNIO-Cover.png",
    imagesPath: "/images/agu/UNIO",
    company: "AGU",
    skills: ["Figma", "Adobe XD"],
    value: 4,
  },

  {
    title: {
      en: "Sistema de Gestão de Visitas",
      br: "Sistema de Gestão de Visitas",
    },
    description: {
      en: "Creation of new system based on legacy system (ASP) with high fidelity functional prototype developed in Microsoft PowerApps with MySQL database with end-user testing in production environment. During the subsequent development, besides the front-end I worked as Scrum Master, making the program flowchart and the database schema.",
      br: "Criação de novo sistema baseado em sistema legado (ASP) com prototipo funcional de alta fidelidade desenvolvido em Microsoft PowerApps com banco MySQL com testes com usuário final em ambiente de produção. Durante o posterior desenvolvimento, além do front-end atuei como Scrum Master, tendo feito o fluxograma do programa e o esquema de Banco de Dados.",
    },
    coverImage: "",
    imagesPath: null,
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "PowerApps", "PHP"],
    value: 1,
  },
  {
    title: { en: "BrandBook DTI/AGU", br: "BrandBook DTI/AGU" },
    description: {
      en: "Definition of style guideline based on Google Material Design's best practices to standardize development projects within the Technology core of the General Advocacy of the Union and new logo for the Information Technology Directorate.",
      br: "Definição de style guideline baseado nas boas práticas do Google Material Design para padronização de projetos de desenvolvimento dentro do núcleo de Tecnologia da Advocacia-Geral da União e nova logomarca da Diretoria de Tecnologia da Informação.",
    },
    coverImage: "",
    imagesPath: null,
    company: "AGU",
    skills: ["InDesign", "Figma", "Illustrator"],
    value: 1,
  },

  {
    title: {
      en: "App Banco do Brasil (release 3)",
      br: "App Banco do Brasil (versão 3)",
    },
    description: {
      en: "Acting in the conception, design, prototyping and testing of several features in the migration of the Mobile App 2.0 to 3.0, having in mind the new React Native architecture where it is no longer necessary to use native components of each technology (swift for iOS and java for Android), allowing much more freedom and unity between versions. With the new library of own components, we were able to develop a credit card screen with a lot of creative freedom. Part of the testing was done with external user research in test groups, internal groups, Wizard of Oz method and A/B testing. The development of the new interface lasted 2 years, including the design and testing phases, which thanks to the modularity of the app, allowed us to develop different parts at the same time.",
      br: "Atuação na concepção, desenho, prototipagem e teste de diversas funcionalidades na migração do App Mobile 2.0 parta o 3.0, tendo em mente a nova arquitetura React Native onde não se é mais necessário o uso de componentes nativos de cada tecnologia (swift para iOS e java para Android), possibilitando muito mais liberdade e união entre versões. Com a nova biblioteca de componentes próprios, fomos capazes de desenvolver uma tela de cartões de crédito com muita liberdade criativa. Parte dos testes foi feito com pesquisa de usuário externo em grupos de testes, grupos internos, método de Wizard of Oz e testes A/B. O desenvolvimento da nova interface durou 2 anos, incluindo as fases de concepção e testes, que graças à modularidade do app, nos permitiu desenvolver diferentes partes ao mesmo tempo.",
    },
    coverImage: "",
    imagesPath: "/images/bbts/APP-BB-3",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 3,
  },
  {
    title: { en: "SINDEC", br: "SINDEC" },
    description: {
      en: "Front-end development of the National Information System of Consumer Protection, internal software used in the management of services provided by PROCON (Consumer Protection and Defense Program) in all states of Brazil. The development of the components was based on the Google Material Design guideline and on the style guidelines of the platform itself (Bootstrap) with adaptation to the new visual identity of the organization.",
      br: "Desenvolvimento front-end do Sistema Nacional de Informações de Defesa do Consumidor, software interno utilizado na gestão de atendimentos realizados pelo PROCON (Programa de Proteção e Defesa do Consumidor) em todos os estados do Brasil. O desenvolvimento dos componentes foi baseado no Google Material Design guideline e nos style guidelines da própria plataforma (Bootstrap) com adaptação para a nova identidade visual do orgão.",
    },
    coverImage: "",
    imagesPath: "/images/bbts/SINDEC",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Git"],
    value: 1,
  },
  {
    title: { en: "Consumidor.gov.br", br: "Consumidor.gov.br" },
    description: {
      en: "New consumer protection portal (consumidor.gov.br) with motion design in high-fidelity prototyping in Axure RP, A/B testing with internal groups and subsequent front-end development of the page.",
      br: "Novo portal de defesa do consumidor (consumidor.gov.br) com motion design em prototipação de alta fidelidade em Axure RP, teste A/B com grupos internos e posterior desenvolvimento front-end da página.",
    },
    coverImage: "",
    imagesPath: "/images/bbts/APP-CONSUMIDOR",
    company: "BBTS",
    skills: ["HTML & CSS", "Axure RP", "Figma"],
    value: 1,
  },
  {
    title: {
      en: "Infrastructure Project Management Software",
      br: "Software de Gestão de Projetos de Infraestrutura",
    },
    description: {
      en: "Software for internal use requested by the Infrastructure Proketos team from Banco do Brasil, it was a service order manager that had a conception period of 3 months, where I worked on the front-end development using bootstrap.",
      br: "Software de uso interno requisitado pela equipe de Proketos de Infraestrutura do Banco do Brasil, foi um gerenciador de ordens de serviços que contou com um periodo de concepção de 3 meses, onde atuei no desenvolvimento front-end utilizando bootstrap.",
    },
    coverImage: "",
    imagesPath: "/images/bbts/GPI",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Illustrator"],
    value: 1,
  },
  {
    title: {
      en: "App Banco do Brasil (release 2)",
      br: "App Banco do Brasil (versão 2)",
    },
    description: {
      en: "High-fidelity prototyping in Axure RP of the 'new' Banco do Brasil's application, with the development and testing of new features with internal user group testing. The big challenge of version 2 of the Banco do Brasil's Mobile application was to have 3 different versions for each platform (Android, iOS and Windows Phone), where each one had its own limitations, so each new feature needed to be designed and tested at least 3 times. I was responsible for most of the adaptation of the 2011 application (1.0) to the 2.0 version with a new look and feel published in 2014, changing from an iframe architecture to native component architectures (swift, java and c#, according to mobile platforms).",
      br: "Prototipação de alta fidelidade em Axure RP do 'novo' aplicativo do Banco do Brasil, com o desenvolvimento e teste de novas funcionalidades com teste em grupo de usuários internos. O grande desafio da versão 2 do aplicativo Mobile do Banco do Brasil, era existir 3 versões distintas para cada plataforma (Android, iOS e Windows Phone), onde cada qual possuia suas próprias limitações, então cada nova funcionalidade necessitava ser desenhada e testada no mínimo 3 vezes. Fui responsável por maior parte da adaptação do aplicativo de 2011 (1.0) para a versão 2.0 com novo visual publicado em 2014, passando de uma arquitetura iframe para arquiteturas de componentes nativos (swift, java e c#, conforme plataformas mobiles).",
    },

    coverImage: "",
    imagesPath: "/images/bbts/APP-BB",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: { en: "Alura's React Bootcamp", br: "Imersão React" },
    description: { en: "", br: "" },
    coverImage: "/images/other/CHAT-Persona5_Cover.png",
    imagesPath: "/images/other/CHAT-Persona5",
    company: "Other",
    skills: ["React", "Vercel", "Git", "HTML & CSS"],
    value: 5,
  },
  {
    title: { en: "SAD.Atende", br: "SAD.Atende" },
    description: {
      en: "Project to customize the Service Management System to standardize it according to the organization's visual identity. In a two-person team, I took care of the front-end (html, css and javascript) making 261 unique images as a way to work around the limitations of the base system.",
      br: "Projeto de customização de Sistema de Gestão de Serviços para padronização de acordo com identidade visual do orgão. Em uma equipe de duas pessoas, cuidei do front-end (html, css e javascript) chegando a confeccionar 261 imagens únicas como forma de trabalhar em torno das limitações do sistema base.",
    },

    coverImage: "/images/agu/OTRS-SADAtende-Cover.png",
    imagesPath: "/images/agu/OTRS-SADAtende",
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "Gimp", "PHP"],
    value: 4,
  },
];
