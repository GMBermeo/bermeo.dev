// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Image } from "@types";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(allImages);
}

export const allImages: Image[] = [
  //  Logos
  {
    src: "/opengraph.svg",
    width: 630,
    height: 1200,
    alt: "Guilherme Bermeo - OpenGraph Social Background.",
  },
  {
    src: "/logo.svg",
    width: 640,
    height: 640,
    alt: "Guilherme Bermeo - Rounded Logo.",
  },
  {
    src: "/logo-transparent.svg",
    width: 595,
    height: 595,
    alt: "Guilherme Bermêo - Original Logo.",
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
  },
  {
    src: "/images/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif",
    width: 1920,
    height: 1520,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  {
    src: "/images/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif",
    width: 1914,
    height: 1920,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  {
    src: "/images/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif",
    width: 1431,
    height: 1920,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  // CØЯЯuptΞd cØding дЯt
  {
    src: "/images/other/CORRUPTED-Starry_Night_by_Van_Gogh.jpg",
    width: 2160,
    height: 1710,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/CORRUPTED-The_Kiss_by_Gustav_Klimt.jpg",
    width: 2160,
    height: 2167,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.jpg",
    width: 2160,
    height: 2898,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_2.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_3.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_1.jpg",
    width: 2160,
    height: 2512,
    alt: "Abaporu by Tarsila do Amaral processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/CORRUPTED-Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/CORRUPTED-Linkedin.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Linkedin avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  {
    src: "/images/other/CORRUPTED-Old_Avatar.jpg",
    width: 2160,
    height: 2160,
    alt: "Guilherme Bermeo Twitter avatar photo processed through the CØЯЯuptΞd cØding дЯt algorithm.",
  },
  //   OTHER
  {
    src: "/images/other/CHAT-Persona5_1.jpg",
    width: 2922,
    height: 1828,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_2.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_3.jpg",
    width: 3804,
    height: 1822,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_4.jpg",
    width: 2262,
    height: 1640,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },

  {
    src: "/images/other/CHAT-Persona5_5.jpg",
    width: 1118,
    height: 1124,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Cover.png",
    width: 2913,
    height: 1638,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_2-Fundamentals_2.jpg",
    width: 2160,
    height: 1609,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_2-Fundamentals-1.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 2 Fundamentals from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_3-Sketch_Transform_1.jpg",
    width: 2160,
    height: 410,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_3-Sketch_Transform_2.jpg",
    width: 2160,
    height: 720,
    alt: "My generative art for the Unit 3 Sketch Transform from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_4-Sketch_Agents_1.jpg",
    width: 2160,
    height: 2157,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_4-Sketch_Agents_2.png",
    width: 2160,
    height: 1641,
    alt: "My generative art for the Unit 4 Sketch Agents from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/DOMESTIKA-Unit_5-Sketch_Noise.jpg",
    width: 2160,
    height: 2160,
    alt: "My generative art for the Unit 5 Sketch Noise from the Creative Coding: Making Visuals with JavaScript by Bruno Imbrizi at Domestika.",
  },
  {
    src: "/images/other/NLW-ESPORT_Cover.png",
    width: 3842,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
  },
  {
    src: "/images/other/NLW-ESPORT-ReactNative_1.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
  },
  {
    src: "/images/other/NLW-ESPORT-ReactNative_2.png",
    width: 1080,
    height: 2160,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
  },
  {
    src: "/images/other/NLW-ESPORT-Web.png",
    width: 1940,
    height: 1133,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
  },

  {
    src: "/images/agu/APP-Cartaz.jpg",
    width: 3508,
    height: 4961,
    alt: "Publicity poster for the AGU School APP.",
  },
  {
    src: "/images/agu/APP-Cartaz-Pre.jpg",
    width: 3508,
    height: 4961,
    alt: "Poster for the launch event of the AGU School APP.",
  },
  {
    src: "/images/agu/APP-Email.png",
    width: 635,
    height: 435,
    alt: "Email marketing image for the launch event of the AGU School APP.",
  },
  {
    src: "/images/agu/APP-Escola-Cover.png",
    width: 1584,
    height: 891,
    alt: "Cover image mockup for the AGU School APP.",
  },
  {
    src: "/images/agu/OTRS-SADAtende-Home.jpg",
    width: 1526,
    height: 1080,
    alt: "Home page for the OTRS SAD.Atende system.",
  },
  {
    src: "/images/agu/OTRS-SADAtende-Cover.png",
    width: 2802,
    height: 1342,
    alt: "Cover image mockup for the OTRS SAD.Atende system.",
  },

  {
    src: "/images/agu/UNIO-Modulos-2160.jpg",
    width: 2098,
    height: 2160,
    alt: "High fidelity mocukup of modular system of UNIO.",
  },

  {
    src: "/images/agu/UNIO-Pesquisa-2160.jpg",
    width: 3840,
    height: 2160,
    alt: "High fidelity mocukup of search page of UNIO.",
  },
  {
    src: "/images/agu/UNIO-Logo-720.png",
    width: 720,
    height: 720,
    alt: "Logo for the UNIO project.",
  },
  {
    src: "/images/agu/APP-Escola-mockup-2160.png",
    width: 3237,
    height: 2160,
    alt: "Cover image mockup of the AGU School APP.",
  },
  {
    src: "/images/agu/UNIO-LogoBW-720.png",
    width: 720,
    height: 720,
    alt: "Monochromatic logo for the UNIO project.",
  },
  {
    src: "/images/agu/UNIO-LogoTransition-1080.png",
    width: 4328,
    height: 1080,
    alt: "Animation study for the creation of the UNIO logo.",
  },
  {
    src: "/images/bbts/APP-BB_Windows-1080.jpg",
    width: 3375,
    height: 1080,
    alt: "High Fidelity Mockup for the native Bank of Brazil APP for Windows Windows.",
  },
  {
    src: "/images/bbts/APP-BB-3_1.jpg",
    width: 842,
    height: 558,
    alt: "Bank of Brazil APP 3.0 (poster).",
  },
  {
    src: "/images/bbts/APP-BB-3_2.jpg",
    width: 1200,
    height: 675,
    alt: "Bank of Brazil APP 3.0 (poster).",
  },
  {
    src: "/images/bbts/APP-BB-3_3.jpg",
    width: 1200,
    height: 675,
    alt: "Bank of Brazil APP 3.0 (poster).",
  },

  {
    src: "/images/bbts/APP-CONSUMIDOR-2160.jpg",
    width: 2187,
    height: 2160,
    alt: "Mockups for the Consumidor.gov.br mobile app.",
  },
  {
    src: "/images/bbts/APP-LIMITES.jpg",
    width: 360,
    height: 749,
    alt: "High fidelity prototipation of limit transfer function for the Bank of Brazil APP 2.0.",
  },
  {
    src: "/images/bbts/APP-TRANSFERENCIA.jpg",
    width: 1418,
    height: 843,
    alt: "High fidelity prototipation of transfer function for the Bank of Brazil APP 2.0 in various native versions.",
  },
  {
    src: "/images/bbts/GPI-1080.jpg",
    width: 2030,
    height: 1080,
    alt: "Front-end development with Bootstrap of Infrastructure Projects Management System.",
  },
  {
    src: "/images/bbts/HOTSITE-2160.jpg",
    width: 1194,
    height: 2160,
    alt: "Front-end development of a landing page for the Bank of Brazil's Real Estate Credit.",
  },

  {
    src: "/images/bbts/INTRANET-MODULAR-2160.jpg",
    width: 2480,
    height: 2160,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet.",
  },
  {
    src: "/images/bbts/INTRANET-MODULAR-MOBILE.jpg",
    width: 2284,
    height: 1080,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet in mobile environment.",
  },
  {
    src: "/images/bbts/PLUGINS-Cover.png",
    width: 1446,
    height: 763,
    alt: "Mockup cover of the BB Plugins (Business Management)",
  },
  {
    src: "/images/bbts/PLUGINS-iMac.png",
    width: 737,
    height: 570,
    alt: "Mockup iMac of the BB Plugins (Business Management)",
  },
  {
    src: "/images/bbts/PLUGINS-iPad.png",
    width: 691,
    height: 505,
    alt: "Mockup iPad of the BB Plugins (Business Management)",
  },
  {
    src: "/images/bbts/PLUGINS-Macbook.png",
    width: 764,
    height: 610,
    alt: "Mockup MacBook of the BB Plugins (Business Management)",
  },
];

export const altSizesImages: Image[] = [
  {
    src: "/images/agu/UNIO-Modulos-1080.jpg",
    width: 1049,
    height: 1080,
    alt: "High fidelity mocukup of modular system of UNIO.",
  },
  {
    src: "/images/agu/UNIO-Pesquisa-1080.jpg",
    width: 1920,
    height: 1080,
    alt: "High fidelity mocukup of search page of UNIO.",
  },
  {
    src: "/images/agu/APP-Escola-mockup-1080.png",
    width: 1618,
    height: 1080,
    alt: "Cover image mockup of the AGU School APP.",
  },
  {
    src: "/images/bbts/APP-CONSUMIDOR-1080.jpg",
    width: 1094,
    height: 1080,
    alt: "Mockups for the Consumidor.gov.br mobile app.",
  },
  {
    src: "/images/bbts/INTRANET-MODULAR-1080.jpg",
    width: 1240,
    height: 1080,
    alt: "Front-end development with Bootstrap of the Bank of Brazil's Intranet.",
  },
  {
    src: "/images/bbts/PLUGINS-Group-1080.png",
    width: 1748,
    height: 1080,
    alt: "Mockup cover of the BB Plugins (Business Management)",
  },
  {
    src: "/images/bbts/PLUGINS-Group-2160.png",
    width: 3496,
    height: 2160,
    alt: "Mockup cover of the BB Plugins (Business Management)",
  },
  {
    src: "/images/other/CHAT-Persona5_1-1080.jpg",
    width: 1726,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_2-1080.jpg",
    width: 1490,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_3-1080.jpg",
    width: 2255,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_4-1080.jpg",
    width: 1490,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Mobile-1080.png",
    width: 1440,
    height: 1080,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/CHAT-Persona5_Mobile-2160.png",
    width: 2880,
    height: 2160,
    alt: "Persona's Metaverse Web Chat made for Alura's Coding Bootcamp of React (Next.js) in January of 2022.",
  },
  {
    src: "/images/other/NLW-ESPORT_Cover-1080.png",
    width: 1921,
    height: 1080,
    alt: "My project for the Rockeseat's Next Level Week 9 Coding Bootcamp, with webapp in React.js (Vite), back-end in Node.js (Express) and mobile app in React Native (Expo).",
  },
  {
    src: "/images/gif/CORRUPTED-avatar1-600.gif",
    width: 600,
    height: 600,
    alt: "Guilherme Bermeo avatar processed through by the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  {
    src: "/images/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif",
    width: 600,
    height: 475,
    alt: "Starry Night by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  {
    src: "/images/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif",
    width: 598,
    height: 600,
    alt: "The Kiss by Gustav Klimt processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
  {
    src: "/images/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif",
    width: 447,
    height: 600,
    alt: "Twelve Sunflowers by Vincent Van Gogh processed through the CØЯЯuptΞd cØding дЯt algorithm multiple times.",
  },
];
