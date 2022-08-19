import React from "react";
import { Title } from "../ui/Title";

const experiences: {
  title: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
}[] = [
  {
    title: "Desenvolvedor Front-end",
    company: "AGU",
    dateStart: "01.2022",
    dateEnd: "Presente",
    description: [
      "Desenvolvimento de novas interfaces de sistemas legado web e novas ferramentas de uso interno com apoio da Imprensa Nacional, com uso de Blazor, Bootstrap e Tailwind CSS.",
    ],
  },
  {
    title: "UI/UX Designer Sênior",
    company: "AGU",
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
    company: "BBTS",
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
    company: "CAER",
    dateStart: "12.2012",
    dateEnd: "06.2011",
    description: [
      "Preparação e elaboração de balancetes e outros documentos administrativos da área contábil, uso de ferramentas TOTVS e manutenções em Banco SQL.",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="mt-12" id="Experiencia">
      <Title title="Experiência" />
      {experiences.map((experience) => (
        <div
          className="mb-6 text-sm font-medium leading-6"
          key={experience.dateStart}
        >
          <div className="flex items-center">
            <div className="flex w-full justify-between font-bold">
              <div className="text-base leading-5 text-white underline decoration-primary decoration-2">
                {experience.title}
              </div>

              <div className="self-end text-base leading-5">
                <span className="text-primary">@</span>
                {experience.company}
              </div>
            </div>
          </div>

          <div className="mt-2 ml-1 text-sm leading-5 text-dracula-foreground">
            {experience.description.map((description) => (
              <div key={description}>{description}</div>
            ))}
          </div>
          <div className="ml-2 text-sm font-bold leading-7 text-dracula-currentLine">
            {experience.dateEnd} - {experience.dateStart}
          </div>
        </div>
      ))}

      <div className="p mb-4 text-sm font-medium leading-6"></div>
    </div>
  );
};
