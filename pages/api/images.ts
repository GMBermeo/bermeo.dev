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
    alt: "Guilherme Bermeo - OpenGraph Social Background.",
    altBr: "Guilherme Bermêo - Fundo para OpenGraph.",
  },
  {
    src: "/logo.svg",
    width: 640,
    height: 640,
    alt: "Guilherme Bermeo - Rounded Logo.",
    altBr: "Guilherme Bermêo - Logo redonda.",
  },
  {
    src: "/logo-transparent.svg",
    width: 595,
    height: 595,
    alt: "",
    altBr: "Guilherme Bermêo - Original Logo.",
  },
  {
    src: "/images/logo/logo512.png",
    width: 512,
    height: 512,
    alt: "512x512 Logo.",
  },
  // CØЯЯuptΞd cØding дЯt GIFs
  {
    src: "/images/gif/CORRUPTED-avatar1.gif",
    width: 1080,
    height: 1080,
    alt: "Guilherme Bermeo avatar processed through by the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Guilherme Bermêo avatar processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif",
    width: 1920,
    height: 1520,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Noite Estrelada de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif",
    width: 1914,
    height: 1920,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "O Beijo de Gustav Klimt processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif",
    width: 1431,
    height: 1920,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Doze Girassóis numa Jarra de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  // CØЯЯuptΞd cØding дЯt
  {
    src: "/images/other/CORRUPTED-Starry_Night_by_Van_Gogh.jpg",
    width: 2160,
    height: 1710,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Noite Estrelada de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/CORRUPTED-The_Kiss_by_Gustav_Klimt.jpg",
    width: 2160,
    height: 2167,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "O Beijo de Gustav Klimt processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.jpg",
    width: 2160,
    height: 2898,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Doze Girassóis numa Jarra de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_2.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_3.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_1.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Abaporu de Tarsila do Amaral processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/CORRUPTED-Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr: "Foto de avatar processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/CORRUPTED-Linkedin.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Linkedin avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Foto de avatar do Linkedin processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  {
    src: "/images/other/CORRUPTED-Old_Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Twitter avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
    altBr:
      "Foto de avatar do twitter processado pelo algoritmo CØЯЯuptΞd cØding дЯt.",
  },
  //   OTHER
  {
    src: "/images/other/CHAT-Persona5_1.jpg",
    width: 2922,
    height: 1828,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_2.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_3.jpg",
    width: 3804,
    height: 1822,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_4.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },

  {
    src: "/images/other/CHAT-Persona5_5.jpg",
    width: 1118,
    height: 1124,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Cover.png",
    width: 2913,
    height: 1638,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_2-Fundamentals_2.jpg",
    width: 2160,
    height: 1609,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 2 Fundamentos para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_2-Fundamentals-1.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 2 Fundamentos para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_3-Sketch_Transform_1.jpg",
    width: 2160,
    height: 410,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 3 Sketch Transform para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_3-Sketch_Transform_2.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 3 Sketch Transform para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_4-Sketch_Agents_1.jpg",
    width: 2160,
    height: 2157,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 4 Sketch Agents para o curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_4-Sketch_Agents_2.png",
    width: 2160,
    height: 1641,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 4 Sketch Agents do curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_5-Sketch_Noise.jpg",
    width: 2160,
    height: 2160,
    alt: "My generative art for the Unit 5 Sketch Noise from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
    altBr:
      "Minha arte gerativa da Unidade 5 Sketch Noise do curso Creative Coding: Criando Visuais com Javascript ministrada pelo Bruno Imbrizi na Domestika.",
  },
  {
    src: "/images/other/NLW-ESPORT_Cover.png",
    width: 3842,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/images/other/NLW-ESPORT-ReactNative_1.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/images/other/NLW-ESPORT-ReactNative_2.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/images/other/NLW-ESPORT-Web.png",
    width: 1940,
    height: 1133,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },

  {
    src: "/images/agu/APP-Cartaz.jpg",
    width: 3508,
    height: 4961,
    alt: "Publicity poster for the AGU School APP.",
    altBr: "Cartaz de divulgação do APP Escola AGU.",
  },
  {
    src: "/images/agu/APP-Cartaz-Pre.jpg",
    width: 3508,
    height: 4961,
    alt: "Poster for the launch event of the AGU School APP.",
    altBr: "Cartaz de divulgação do lançamento do APP Escola AGU.",
  },
  {
    src: "/images/agu/APP-Email.png",
    width: 635,
    height: 435,
    alt: "Email marketing image for the launch event of the AGU School APP.",
    altBr: "Imagem para e-mail de divulgação do lançamento do App Escola AGU.",
  },
  {
    src: "/images/agu/APP-Escola-Cover.png",
    width: 1584,
    height: 891,
    alt: "Cover image mockup for the AGU School APP.",
    altBr: "Mockup App Escola AGU e Módulo administrativo.",
  },
  {
    src: "/images/agu/OTRS-SADAtende-Home.jpg",
    width: 1526,
    height: 1080,
    alt: "Home page for the OTRS SAD.Atende system.",
    altBr: "Printscreen OTRS SAD.Atende em produção.",
  },
  {
    src: "/images/agu/OTRS-SADAtende-Cover.png",
    width: 2802,
    height: 1342,
    alt: "Cover image mockup for the OTRS SAD.Atende system.",
    altBr: "Mockup do OTRS SAD.Atende.",
  },

  {
    src: "/images/agu/UNIO-Modulos-2160.jpg",
    width: 2098,
    height: 2160,
    alt: "High fidelity mocukup of modular system of UNIO.",
    altBr: "Mockup de alta fidelidade do Projeto Unio",
  },

  {
    src: "/images/agu/UNIO-Pesquisa-2160.jpg",
    width: 3840,
    height: 2160,
    alt: "High fidelity mocukup of search page of UNIO.",
    altBr: "Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
  },
  {
    src: "/images/agu/UNIO-Logo-720.png",
    width: 720,
    height: 720,
    alt: "Logo for the UNIO project.",
    altBr: "Logo colorida do Projeto Unio",
  },
  {
    src: "/images/agu/APP-Escola-mockup-2160.png",
    width: 3237,
    height: 2160,
    alt: "Cover image mockup of the AGU School APP.",
    altBr: "Mockup App Escola AGU e Módulo administrativo",
  },
  {
    src: "/images/agu/UNIO-LogoBW-720.png",
    width: 720,
    height: 720,
    alt: "Monochromatic logo for the UNIO project.",
    altBr: "Logo Monocromática do Projeto Unio",
  },
  {
    src: "/images/agu/UNIO-LogoTransition-1080.png",
    width: 4328,
    height: 1080,
    alt: "Animation study for the creation of the UNIO logo.",
    altBr: "Estudo de animação para criação da logo do Projeto Unio",
  },
  {
    src: "/images/bbts/APP-BB_Windows-1080.jpg",
    width: 3375,
    height: 1080,
    alt: "High Fidelity Mockup for the native Bank of Brazil APP for Windows Windows.",
    altBr:
      "Mockup de alta fidelidade para desenvolvimento do Aplicativo nativo para Windows Phone",
  },
  {
    src: "/images/bbts/APP-BB-3_1.jpg",
    width: 842,
    height: 558,
    alt: "Bank of Brazil APP 3.0 (poster).",
    altBr: "Mockup do Aplicativo BB 3.0 (divulgação)",
  },
  {
    src: "/images/bbts/APP-BB-3_2.jpg",
    width: 1200,
    height: 675,
    alt: "Bank of Brazil APP 3.0 (poster).",
    altBr: "Mockup do Aplicativo BB 3.0 (divulgação)",
  },
  {
    src: "/images/bbts/APP-BB-3_3.jpg",
    width: 1200,
    height: 675,
    alt: "Bank of Brazil APP 3.0 (poster).",
    altBr: "Mockup do Aplicativo BB 3.0 (divulgação)",
  },

  {
    src: "/images/bbts/APP-CONSUMIDOR-2160.jpg",
    width: 2187,
    height: 2160,
    alt: "Mockups for the Consumidor.gov.br mobile app.",
    altBr: "Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
  },
  {
    src: "/images/bbts/APP-LIMITES.jpg",
    width: 360,
    height: 749,
    alt: "High fidelity prototipation of limit transfer function for the Bank of Brazil APP 2.0.",
    altBr:
      "Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0",
  },
  {
    src: "/images/bbts/APP-TRANSFERENCIA.jpg",
    width: 1418,
    height: 843,
    alt: "High fidelity prototipation of transfer function for the Bank of Brazil APP 2.0 in various native versions.",
    altBr:
      " Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0 em diferentes plataformas nativas",
  },
  {
    src: "/images/bbts/GPI-1080.jpg",
    width: 2030,
    height: 1080,
    alt: "Front-end development with Bootstrap of Infrastructure Projects Management System.",
    altBr:
      "Front-end com Bootstrap do Sistema de Gestão de Projetos de Infraestrutura",
  },
  {
    src: "/images/bbts/HOTSITE-2160.jpg",
    width: 1194,
    height: 2160,
    alt: "Front-end development of a landing page for the Bank of Brazil's Real Estate Credit.",
    altBr: "Front-end de hotsite de Crédito Imobiliário",
  },

  {
    src: "/images/bbts/INTRANET-MODULAR-2160.jpg",
    width: 2480,
    height: 2160,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet.",
    altBr: "Mockup de front-end para Intranet com uso de Bootstrap",
  },
  {
    src: "/images/bbts/INTRANET-MODULAR-MOBILE.jpg",
    width: 2284,
    height: 1080,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet in mobile environment.",
    altBr:
      "Mockup de front-end para Intranet com uso de Bootstrap em ambiente Mobile",
  },
  {
    src: "/images/bbts/PLUGINS-Cover.png",
    width: 1446,
    height: 763,
    alt: "Mockup cover of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/images/bbts/PLUGINS-iMac.png",
    width: 737,
    height: 570,
    alt: "Mockup iMac of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/images/bbts/PLUGINS-iPad.png",
    width: 691,
    height: 505,
    alt: "Mockup iPad of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/images/bbts/PLUGINS-Macbook.png",
    width: 764,
    height: 610,
    alt: "Mockup MacBook of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
];

export const altSizesImages: Image[] = [
  {
    src: "/images/agu/UNIO-Modulos-1080.jpg",
    width: 1049,
    height: 1080,
    alt: "High fidelity mocukup of modular system of UNIO.",
    altBr: "Mockup de alta fidelidade do Projeto Unio",
  },
  {
    src: "/images/agu/UNIO-Pesquisa-1080.jpg",
    width: 1920,
    height: 1080,
    alt: "High fidelity mocukup of search page of UNIO.",
    altBr: "Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
  },
  {
    src: "/images/agu/APP-Escola-mockup-1080.png",
    width: 1618,
    height: 1080,
    alt: "Cover image mockup of the AGU School APP.",
    altBr: "Mockup App Escola AGU e Módulo administrativo",
  },
  {
    src: "/images/bbts/APP-CONSUMIDOR-1080.jpg",
    width: 1094,
    height: 1080,
    alt: "Mockups for the Consumidor.gov.br mobile app.",
    altBr: "Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
  },
  {
    src: "/images/bbts/INTRANET-MODULAR-1080.jpg",
    width: 1240,
    height: 1080,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet.",
    altBr: "Mockup de front-end para Intranet com uso de Bootstrap",
  },
  {
    src: "/images/bbts/PLUGINS-Group-1080.png",
    width: 1748,
    height: 1080,
    alt: "Mockup cover of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/images/bbts/PLUGINS-Group-2160.png",
    width: 3496,
    height: 2160,
    alt: "Mockup cover of the BB Plugins (Business Management)",
    altBr: "Mockup do BB Plugins (Gestão Empresarial)",
  },
  {
    src: "/images/other/CHAT-Persona5_1-1080.jpg",
    width: 1726,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_2-1080.jpg",
    width: 1490,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_3-1080.jpg",
    width: 2255,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_4-1080.jpg",
    width: 1490,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Mobile-1080.png",
    width: 1440,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Mobile-2160.png",
    width: 2880,
    height: 2160,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
    altBr:
      "Chat feito em React (Next.js) na semana de imersão da Alura em janeiro de 2022.",
  },
  {
    src: "/images/other/NLW-ESPORT_Cover-1080.png",
    width: 1921,
    height: 1080,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
    altBr:
      "Meu projeto para o Next Level Week 9 da Rocketseat, com web em React com Vite, back-end em Node.js e React Native com expo para mobile.",
  },
  {
    src: "/images/gif/CORRUPTED-avatar1-600.gif",
    width: 600,
    height: 600,
    alt: "Guilherme Bermeo avatar processed through by the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Guilherme Bermêo avatar processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif",
    width: 600,
    height: 475,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Noite Estrelada de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif",
    width: 598,
    height: 600,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "O Beijo de Gustav Klimt processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
  {
    src: "/images/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif",
    width: 447,
    height: 600,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
    altBr:
      "Doze Girassóis numa Jarra de Vincent Van Gogh processado pelo algoritmo CØЯЯuptΞd cØding дЯt multiplas vezes.",
  },
];