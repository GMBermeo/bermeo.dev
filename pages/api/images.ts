// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Image = {
  src: string;
  width: number;
  height: number;
  alt: string;
  altBr?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[]>
) {
  res.status(200).json(allImages);
}

export const allImages: Image[] = [
  //  Logos
  {
    src: "/opengraph.svg",
    width: 630,
    height: 1200,
    alt: "Guilherme Bermeo - OpenGraph Social Background",
    altBr: "Guilherme Bermêo - Fundo para OpenGraph",
  },
  {
    src: "/logo.svg",
    width: 640,
    height: 640,
    alt: "Guilherme Bermeo - Rounded Logo",
    altBr: "Guilherme Bermêo - Logo redonda",
  },
  {
    src: "/logo-transparent.svg",
    width: 595,
    height: 595,
    alt: "",
    altBr: "Guilherme Bermêo - Original Logo",
  },
  {
    src: "/img/logo/logo512.png",
    width: 512,
    height: 512,
    alt: "",
    altBr: "Guilherme Bermêo - 512x512 Logo",
  },
  // CØЯЯuptΞd cØding дЯt GIFs
  {
    src: "/img/portfolio/gif/CORRUPTED-avatar1.gif",
    width: 1080,
    height: 1080,
    alt: "Guilherme Bermeo avatar processed through by the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Guilherme Bermêo avatar processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif",
    width: 1920,
    height: 1520,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Noite Estrelada de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif",
    width: 1914,
    height: 1920,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "O Beijo de Gustav Klimt processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif",
    width: 1431,
    height: 1920,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Doze Girassóis numa Jarra de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  // CØЯЯuptΞd cØding дЯt
  {
    src: "/img/portfolio/other/CORRUPTED-Starry_Night_by_Van_Gogh.jpg",
    width: 2160,
    height: 1710,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Noite Estrelada de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/CORRUPTED-The_Kiss_by_Gustav_Klimt.jpg",
    width: 2160,
    height: 2167,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "O Beijo de Gustav Klimt processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.jpg",
    width: 2160,
    height: 2898,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Doze Girassóis numa Jarra de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_2.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_3.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_1.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/CORRUPTED-Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr: "Foto de avatar processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/CORRUPTED-Linkedin.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Linkedin avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Foto de avatar do Linkedin processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/img/portfolio/other/CORRUPTED-Old_Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Twitter avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Foto de avatar do twitter processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  //   OTHER
  {
    src: "/img/portfolio/other/CHAT-Persona5_1.jpg",
    width: 2922,
    height: 1828,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/img/portfolio/other/CHAT-Persona5_2.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/img/portfolio/other/CHAT-Persona5_3.jpg",
    width: 3804,
    height: 1822,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/img/portfolio/other/CHAT-Persona5_4.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },

  {
    src: "/img/portfolio/other/CHAT-Persona5_5.jpg",
    width: 1118,
    height: 1124,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/img/portfolio/other/CHAT-Persona5_Cover.png",
    width: 2913,
    height: 1638,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals_2.jpg",
    width: 2160,
    height: 1609,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 2 Fundamentos para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals-1.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 2 Fundamentos para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_1.jpg",
    width: 2160,
    height: 410,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 3 Sketch Transform para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_2.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 3 Sketch Transform para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_1.jpg",
    width: 2160,
    height: 2157,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 4 Sketch Agents para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_2.png",
    width: 2160,
    height: 1641,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 4 Sketch Agents do curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/DOMESTIKA-Unit_5-Sketch_Noise.jpg",
    width: 2160,
    height: 2160,
    alt: "My generative art for the Unit 5 Sketch Noise from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 5 Sketch Noise do curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/img/portfolio/other/NLW-ESPORT_Cover.png",
    width: 3842,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/img/portfolio/other/NLW-ESPORT-ReactNative_1.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/img/portfolio/other/NLW-ESPORT-ReactNative_2.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/img/portfolio/other/NLW-ESPORT-Web.png",
    width: 1940,
    height: 1133,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },

  {
    src: "/img/portfolio/agu/APP-Cartaz.jpg",
    width: 3508,
    height: 4961,
    alt: "",
    altBr: "Advocacia-Geral da União - Cartaz de divulgação do APP Escola AGU",
  },
  {
    src: "/img/portfolio/agu/APP-Cartaz-Pre.jpg",
    width: 3508,
    height: 4961,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Cartaz de divulgação do lançamento do APP Escola AGU",
  },
  {
    src: "/img/portfolio/agu/APP-Escola-Cover.png",
    width: 1584,
    height: 891,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
  },
  {
    src: "/img/portfolio/agu/OTRS-SADAtende-Home.jpg",
    width: 1526,
    height: 1080,
    alt: "",
    altBr: "Advocacia-Geral da União - Printscreen OTRS SAD.Atende em produção",
  },
  {
    src: "/img/portfolio/agu/OTRS-SADAtende-Cover.png",
    width: 2802,
    height: 1342,
    alt: "",
    altBr: "Advocacia-Geral da União - Mockup do OTRS SAD.Atende",
  },

  {
    src: "/img/portfolio/agu/UNIO-Modulos-2160.jpg",
    width: 2098,
    height: 2160,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup de alta fidelidade do Projeto Unio",
  },

  {
    src: "/img/portfolio/agu/UNIO-Pesquisa-2160.jpg",
    width: 3840,
    height: 2160,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
  },
  {
    src: "/img/portfolio/agu/UNIO-Logo-720.png",
    width: 720,
    height: 720,
    alt: "",
    altBr: "Advocacia-Geral da União - Logo colorida do Projeto Unio",
  },
  {
    src: "/img/portfolio/agu/APP-Email.png",
    width: 635,
    height: 435,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Imagem para e-mail de divulgação do App Escola AGU",
  },
  {
    src: "/img/portfolio/agu/APP-Escola-mockup-1080.png",
    width: 1618,
    height: 1080,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
  },
  {
    src: "/img/portfolio/agu/APP-Escola-mockup-2160.png",
    width: 3237,
    height: 2160,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
  },
  {
    src: "/img/portfolio/agu/UNIO-LogoBW-720.png",
    width: 720,
    height: 720,
    alt: "",
    altBr: "Advocacia-Geral da União - Logo Monocromática do Projeto Unio",
  },
  {
    src: "/img/portfolio/agu/UNIO-LogoTransition-720.png",
    width: 4328,
    height: 1080,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Estudo de animação para criação da logo do Projeto Unio",
  },
  {
    src: "/img/portfolio/bbts/APP-BB_Windows-1080.jpg",
    width: 3375,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup de alta fidelidade para desenvolvimento do Aplicativo nativo para Windows Phone",
  },
  {
    src: "/img/portfolio/bbts/APP-BB-3_1.jpg",
    width: 842,
    height: 558,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
  },
  {
    src: "/img/portfolio/bbts/APP-BB-3_2.jpg",
    width: 1200,
    height: 675,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
  },
  {
    src: "/img/portfolio/bbts/APP-BB-3_3.jpg",
    width: 1200,
    height: 675,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
  },

  {
    src: "/img/portfolio/bbts/APP-CONSUMIDOR-2160.jpg",
    width: 2187,
    height: 2160,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
  },
  {
    src: "/img/portfolio/bbts/APP-LIMITES.jpg",
    width: 360,
    height: 749,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0",
  },
  {
    src: "/img/portfolio/bbts/APP-TRANSFERENCIA.jpg",
    width: 1418,
    height: 843,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços -  Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0 em diferentes plataformas nativas",
  },
  {
    src: "/img/portfolio/bbts/GPI-1080.jpg",
    width: 2030,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Front-end com Bootstrap do Sistema de Gestão de Projetos de Infraestrutura",
  },
  {
    src: "/img/portfolio/bbts/HOTSITE-2160.jpg",
    width: 1194,
    height: 2160,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Front-end de hotsite de Crédito Imobiliário",
  },

  {
    src: "/img/portfolio/bbts/INTRANET-MODULAR-2160.jpg",
    width: 2480,
    height: 2160,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap",
  },
  {
    src: "/img/portfolio/bbts/INTRANET-MODULAR-MOBILE.jpg",
    width: 2284,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap em ambiente Mobile",
  },
  {
    src: "/img/portfolio/bbts/PLUGINS-Cover.png",
    width: 1446,
    height: 763,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },

  {
    src: "/img/portfolio/bbts/PLUGINS-iMac.png",
    width: 737,
    height: 570,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/img/portfolio/bbts/PLUGINS-iPad.png",
    width: 691,
    height: 505,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/img/portfolio/bbts/PLUGINS-Macbook.png",
    width: 764,
    height: 610,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },
];

export const alternativeImages: Image[] = [
  {
    src: "/img/portfolio/agu/UNIO-Pesquisa-1080.jpg",
    width: 1920,
    height: 1080,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
  },
  {
    src: "/img/portfolio/agu/UNIO-Modulos-1080.jpg",
    width: 1049,
    height: 1080,
    alt: "",
    altBr:
      "Advocacia-Geral da União - Mockup de alta fidelidade do Projeto Unio",
  },
  {
    src: "/img/portfolio/bbts/PLUGINS-Group-1080.png",
    width: 1748,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/img/portfolio/bbts/APP-CONSUMIDOR-1080.jpg",
    width: 1094,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
  },
  {
    src: "/img/portfolio/bbts/INTRANET-MODULAR-1080.jpg",
    width: 1240,
    height: 1080,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap",
  },
  {
    src: "/img/portfolio/bbts/PLUGINS-Group-2160.png",
    width: 3496,
    height: 2160,
    alt: "",
    altBr:
      "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
  },
];
