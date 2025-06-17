import type { Project } from "@types";

export const projects: Project[] = [
  {
    title: "Business Management Software",
    description: [
      "Software conceptualized at the Directorate of New Business Products at Banco do Brasil. Management software that would replace Gestão BB, facilitating payments, receipts and other services for the accounting sector of legal clients (companies) of Banco do Brasil. The project was conceived and tested internally for six months. The main idea behind this software was that the user could do all actions without using the mouse. The inspiration for this keyboard navigation functionality came from the observation of legal clients who preferred using an older, monochromatic system to use only the keyboard and a responsive UI that could not be obtained with the “new” software on the market. Therefore, the high-fidelity prototyping in Axure RP had 47 screens, with dynamic forms and 100% keyboard-only practical use, for future proofs of concept.",
    ],
    coverImage: "/images/bbts/PLUGINS-Cover.png",
    imagesPath: "/images/bbts/PLUGINS",
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
    description: [
      "This project started as a high-fidelity prototype made in an experimental technology from Microsoft called Power Apps for the future development of a mobile app developed in React Native. Six months into the project, the prototype had such high fidelity, connected to the MySQL database, that the Project Owner decided to use the prototype as the final application.",
      "The PowerApps software did not make the platform to support the 11,000 members present at the Advocacia-Geral da União who could use the app to register for events, courses, and lectures, but with the use of views and prior filtering, we were able to launch successfully.",
      "The launch was reported in specialized media, and by 2021, the app had 4,000 active users and about 500 simultaneous daily accesses.",
    ],
    coverImage: "/images/agu/APP-Escola-Cover.png",
    imagesPath: "/images/agu/APP-Escola",
    company: "AGU",
    skills: ["PowerApps", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: "Unio",
    description:
      "The Attorney General’s Office has about 48 systems in use, most of them with the same source code in asp since the 1990s. Unio is a long-term project to rewrite all of these systems on a single platform, using the infrastructure of the organization’s leading software, SAPIENS, to be integrated other systems modularly.",

    coverImage: "/images/agu/UNIO-Cover.png",
    imagesPath: "/images/agu/UNIO",
    company: "AGU",
    skills: ["Figma", "Adobe XD"],
    value: 4,
  },

  {
    title: "Sistema de Gestão de Visitas",
    description:
      "Creation of new system based on legacy system (ASP) with high fidelity functional prototype developed in Microsoft PowerApps with MySQL database with end-user testing in production environment. During the subsequent development, besides the front-end I worked as Scrum Master, making the program flowchart and the database schema.",

    coverImage: "",
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "PowerApps", "PHP"],
    value: 1,
  },
  {
    title: "BrandBook DTI/AGU",
    description:
      "Definition of style guideline based on Google Material Design's best practices to standardize development projects within the Technology core of the General Advocacy of the Union and new logo for the Information Technology Directorate.",
    coverImage: "",
    company: "AGU",
    skills: ["InDesign", "Figma", "Illustrator"],
    value: 1,
  },

  {
    title: "App Banco do Brasil (release 3)",
    description:
      "Acting in the conception, design, prototyping and testing of several features in the migration of the Mobile App 2.0 to 3.0, having in mind the new React Native architecture where it is no longer necessary to use native components of each technology (swift for iOS and java for Android), allowing much more freedom and unity between versions. With the new library of own components, we were able to develop a credit card screen with a lot of creative freedom. Part of the testing was done with external user research in test groups, internal groups, Wizard of Oz method and A/B testing. The development of the new interface lasted 2 years, including the design and testing phases, which thanks to the modularity of the app, allowed us to develop different parts at the same time.",
    coverImage: "",
    imagesPath: "/images/bbts/APP-BB-3",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 3,
  },
  {
    title: "SINDEC",
    description:
      "Front-end development of the National Information System of Consumer Protection, internal software used in the management of services provided by PROCON (Consumer Protection and Defense Program) in all states of Brazil. The development of the components was based on the Google Material Design guideline and on the style guidelines of the platform itself (Bootstrap) with adaptation to the new visual identity of the organization.",

    coverImage: "",
    imagesPath: "/images/bbts/SINDEC",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Git"],
    value: 1,
  },
  {
    title: "Consumidor.gov.br",
    description:
      "New consumer protection portal (consumidor.gov.br) with motion design in high-fidelity prototyping in Axure RP, A/B testing with internal groups and subsequent front-end development of the page.",
    coverImage: "",
    imagesPath: "/images/bbts/APP-CONSUMIDOR",
    company: "BBTS",
    skills: ["HTML & CSS", "Axure RP", "Figma"],
    value: 1,
  },
  {
    title: "Infrastructure Project Management Software",
    description:
      "Software for internal use requested by the Infrastructure Proketos team from Banco do Brasil, it was a service order manager that had a conception period of 3 months, where I worked on the front-end development using bootstrap.",

    coverImage: "",
    imagesPath: "/images/bbts/GPI",
    company: "BBTS",
    skills: ["HTML & CSS", "Bootstrap", "Illustrator"],
    value: 1,
  },
  {
    title: "App Banco do Brasil (release 2)",
    description:
      "High-fidelity prototyping in Axure RP of the 'new' Banco do Brasil's application, with the development and testing of new features with internal user group testing. The big challenge of version 2 of the Banco do Brasil's Mobile application was to have 3 different versions for each platform (Android, iOS and Windows Phone), where each one had its own limitations, so each new feature needed to be designed and tested at least 3 times. I was responsible for most of the adaptation of the 2011 application (1.0) to the 2.0 version with a new look and feel published in 2014, changing from an iframe architecture to native component architectures (swift, java and c#, according to mobile platforms).",
    coverImage: "",
    imagesPath: "/images/bbts/APP-BB",
    company: "BBTS",
    skills: ["Axure RP", "Figma", "Illustrator"],
    value: 1,
  },
  {
    title: "Alura's React Bootcamp",
    description: "",
    coverImage: "/images/other/CHAT-Persona5_Cover.png",
    imagesPath: "/images/other/CHAT-Persona5",
    company: "Other",
    skills: ["React", "Vercel", "Git", "HTML & CSS"],
    value: 5,
  },
  {
    title: "SAD.Atende",
    description:
      "Project to customize the Service Management System to standardize it according to the organization's visual identity. In a two-person team, I took care of the front-end (html, css and javascript) making 261 unique images as a way to work around the limitations of the base system.",
    coverImage: "/images/agu/OTRS-SADAtende-Cover.png",
    imagesPath: "/images/agu/OTRS-SADAtende",
    company: "AGU",
    skills: ["HTML & CSS", "Figma", "Gimp", "PHP"],
    value: 4,
  },
];
