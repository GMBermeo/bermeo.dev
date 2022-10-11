import { TProject } from "../types/TProject";

export const projects: TProject[] = [
  {
    title: "Software de Gestão Empresarial",
    description:
      "Software conceitualizado na Diretoria de Novos Produtos Empresariais dentro do Banco do Brasil. Um software de gestão que viria a substituir o Gestão BB, facilitando pagamentos, recebimento, e outros serviços para o setor contábil de clientes jurídicos (empresas) do Banco do Brasil. O projeto fora concebido e testado internamente durante 6 meses, a ideia principal que rondava a utilização deste software se dava no fato de todas as ações poderem ser feitas sem necessitar a utilização do mouse. A inspiração para essa funcionalidade de navegação via teclado veio da observação de atendentes de clientes juridicos em que preferiam a utilização de um sistema mais antigo, monocromático, em ordem da utilização apenas do teclado e responsividade que não se obtia pelo software “novo” que estava no mercado. A protipação de alta fidelidade em Axure RP contou com 47 telas, com formulários dinâmicos e utilização 100% funcional apenas por teclado, para futuras provas de conceito.",
    coverImage: "/images/bbts/PLUGINS-Cover.png",
    company: "BBTS",
    skills: ["Axure RP", "Bootstrap", "HTML & CSS"],
    value: 5,
  },
  {
    title: "Programa de Gestão",
    description: "",
    coverImage: "",
    company: "AGU",
    skills: ["HTML & CSS", "Tailwind CSS", "Git", "Javascript", "PHP"],
    value: 1,
  },
  {
    title: "AGU Legis",
    description: "",
    coverImage: "",
    company: "AGU",
    skills: ["HTML & CSS", "Bootstrap", "Git", "C#", "Blazor"],
    value: 1,
  },
  {
    title: "App Escola da AGU",
    description:
      "Este projeto começou como um protótipo de alta fidelidade feito em uma tecnologia experimental da Microsoft chamada de Power Apps, para o futuro desenvolvimento de um aplicativo móvel desenvolvido em React Native. Com 6 meses de projeto, o protótipo estava com tamanha fidelidade, conectado ao banco de dados MySQL, que fora decidido utilizar-se o protótipo como aplicativo final. A plataforma não era feita para suportar os 11.000 membros presentes na Advocacia-Geral da União que poderiam utilizar o app para se inscrever em eventos, cursos e palestras, mas com a utilização de views e filtragem prévia conseguimos lançar com sucesso. O lançamento foi noticiado em veículos especializados e em 2021 o aplicativo contava com 4 mil usuários ativos, e cerca de 500 acessos simultâneos diários.",
    coverImage: "/images/agu/APP-Escola-Cover.png",
    company: "AGU",
    skills: ["PowerApps", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: "Unio",
    description:
      "A Advocacia-Geral da União possui cerca de 48 sistemas em uso, a maioria deles, com o mesmo código-fonte em asp desde os anos 90. O Unio é um projeto de longo prazo de re-escrever todos esses sistemas em uma plataforma única, utilizando-se da infraestrutura do principal software do orgão, o SAPIENS.",
    coverImage: "/images/agu/UNIO-Cover.png",
    company: "AGU",
    skills: ["Figma", "Adobe XD"],
    value: 4,
  },

  {
    title: "Sistema de Gestão de Visitas",
    description:
      "Criação de novo sistema baseado em sistema legado (ASP) com prototipo funcional de alta fidelidade desenvolvido em Microsoft PowerApps com banco MySQL com testes com usuário final em ambiente de produção. Durante o posterior desenvolvimento, além do front-end atuei como Scrum Master, tendo feito o fluxograma do programa e o esquema de Banco de Dados.",
    coverImage: "",
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "PowerApps", "PHP"],
    value: 1,
  },
  {
    title: "BrandBook DTI/AGU",
    description:
      "Definição de style guideline baseado nas boas práticas do Google Material Design para padronização de projetos de desenvolvimento dentro do núcleo de Tecnologia da Advocacia-Geral da União e nova logomarca da Diretoria de Tecnologia da Informação.",
    coverImage: "",
    company: "AGU",
    skills: ["InDesign", "Figma", "Illustrator"],
    value: 1,
  },

  {
    title: "App Banco do Brasil (versão 3)",
    description:
      "Atuação na concepção, desenho, prototipagem e teste de diversas funcionalidades na migração do App Mobile 2.0 parta o 3.0, tendo em mente a nova arquitetura React Native onde não se é mais necessário o uso de componentes nativos de cada tecnologia (swift para iOS e java para Android), possibilitando muito mais liberdade e união entre versões. Com a nova biblioteca de componentes próprios, fomos capazes de desenvolver uma tela de cartões de crédito com muita liberdade criativa. Parte dos testes foi feito com pesquisa de usuário externo em grupos de testes, grupos internos, método de Wizard of Oz e testes A/B. O desenvolvimento da nova interface durou 2 anos, incluindo as fases de concepção e testes, que graças à modularidade do app, nos permitiu desenvolver diferentes partes ao mesmo tempo.",
    coverImage: "",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 3,
  },
  {
    title: "SINDEC",
    description:
      "Desenvolvimento front-end do Sistema Nacional de Informações de Defesa do Consumidor, software interno utilizado na gestão de atendimentos realizados pelo PROCON (Programa de Proteção e Defesa do Consumidor) em todos os estados do Brasil. O desenvolvimento dos componentes foi baseado no Google Material Design guideline e nos style guidelines da própria plataforma (Bootstrap) com adaptação para a nova identidade visual do orgão.",
    coverImage: "",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Git"],
    value: 1,
  },
  {
    title: "Consumidor.gov.br",
    description:
      "Novo portal de defesa do consumidor (consumidor.gov.br) com motion design em prototipação de alta fidelidade em Axure RP, teste A/B com grupos internos e posterior desenvolvimento front-end da página.",
    coverImage: "",
    company: "BBTS",
    skills: ["HTML & CSS", "Axure RP", "Figma"],
    value: 1,
  },
  {
    title: "Software de Gestão de Projetos de Infraestrutura",
    description:
      "Software de uso interno requisitado pela equipe de Proketos de Infraestrutura do Banco do Brasil, foi um gerenciador de ordens de serviços que contou com um periodo de concepção de 3 meses, onde atuei no desenvolvimento front-end utilizando bootstrap.",
    coverImage: "",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Illustrator"],
    value: 1,
  },
  {
    title: "App Banco do Brasil (versão 2)",
    description:
      "Prototipação de alta fidelidade em Axure RP do “novo” aplicativo do Banco do Brasil, com o desenvolvimento e teste de novas funcionalidades com teste em grupo de usuários internos. O grande desafio da versão 2 do aplicativo Mobile do Banco do Brasil, era existir 3 versões distintas para cada plataforma (Android, iOS e Windows Phone), onde cada qual possuia suas próprias limitações, então cada nova funcionalidade necessitava ser desenhada e testada no mínimo 3 vezes. Fui responsável por maior parte da adaptação do aplicativo de 2011 (1.0) para a versão 2.0 com novo visual publicado em 2014, passando de uma arquitetura iframe para arquiteturas de componentes nativos (swift, java e c#, conforme plataformas mobiles).",
    coverImage: "",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: "Imersão React",
    description: "",
    coverImage: "/images/other/CHAT-Persona5_Cover.png",
    company: "Other",
    skills: ["React", "Vercel", "Git", "HTML & CSS"],
    value: 5,
  },
  {
    title: "SAD.Atende",
    description:
      "Projeto de customização de Sistema de Gestão de Serviços para padronização de acordo com identidade visual do orgão. Em uma equipe de duas pessoas, cuidei do front-end (html, css e javascript) chegando a confeccionar 261 imagens únicas como forma de trabalhar em torno das limitações do sistema base.",
    coverImage: "/images/agu/OTRS-SADAtende-Cover.png",
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "Gimp", "PHP"],
    value: 4,
  },
  //   {
  //     title: "",
  //     description: "",
  //     coverImage: "",
  //     company: "Other",
  //     skills: ["", "", "", ""],
  //     value: 1,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     coverImage: "",
  //     company: "Other",
  //     skills: ["", "", "", ""],
  //     value: 1,
  //   },
];
