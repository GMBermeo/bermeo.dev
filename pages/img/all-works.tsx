/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";

const AllWorks: NextPage = () => {
  const allImages = [
    {
      src: "/img/portfolio/gif/CORRUPTED-avatar1.gif",
      width: 2416,
      height: 1276,
      alt: "Guilherme Bermêo - Social Background",
    },
    {
      src: "/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif",
      width: 2416,
      height: 1276,
      alt: "Guilherme Bermêo - Social Background",
    },
    {
      src: "/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif",
      width: 1000,
      height: 1000,
      alt: "Guilherme Bermêo - Painting Avatar",
    },
    {
      src: "/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif",
      width: 2304,
      height: 2304,
      alt: "Guilherme Bermêo - Avatar",
    },
    {
      src: "http://bermeo.dev/opengraph.svg",
      width: 630,
      height: 1200,
      alt: "Guilherme Bermêo - OpenGraph Social Background",
    },
    {
      src: "/logo.svg",
      width: 640,
      height: 640,
      alt: "Guilherme Bermêo - Rounded Logo",
    },
    {
      src: "/logo-transparent.svg",
      width: 595,
      height: 595,
      alt: "Guilherme Bermêo - Original Logo",
    },
    {
      src: "/img/logo/logo512.png",
      width: 512,
      height: 512,
      alt: "Guilherme Bermêo - 512x512 Logo",
    },
    {
      src: "/img/portfolio/agu/APP-Cartaz.jpg",
      width: 3508,
      height: 4961,
      alt: "Advocacia-Geral da União - Cartaz de divulgação do APP Escola AGU",
    },
    {
      src: "/img/portfolio/agu/APP-Cartaz-Pre.jpg",
      width: 3508,
      height: 4961,
      alt: "Advocacia-Geral da União - Cartaz de divulgação do lançamento do APP Escola AGU",
    },
    {
      src: "/img/portfolio/agu/APP-Escola-Cover.png",
      width: 1584,
      height: 891,
      alt: "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
    },
    {
      src: "/img/portfolio/agu/OTRS-SADAtende-Home.jpg",
      width: 1526,
      height: 1080,
      alt: "Advocacia-Geral da União - Printscreen OTRS SAD.Atende em produção",
    },
    {
      src: "/img/portfolio/agu/OTRS-SADAtende-Cover.png",
      width: 2802,
      height: 1342,
      alt: "Advocacia-Geral da União - Mockup do OTRS SAD.Atende",
    },
    {
      src: "/img/portfolio/agu/UNIO-Modulos-1080.jpg",
      width: 1049,
      height: 1080,
      alt: "Advocacia-Geral da União - Mockup de alta fidelidade do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/UNIO-Modulos-2160.jpg",
      width: 2098,
      height: 2160,
      alt: "Advocacia-Geral da União - Mockup de alta fidelidade do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/UNIO-Pesquisa-1080.jpg",
      width: 1920,
      height: 1080,
      alt: "Advocacia-Geral da União - Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/UNIO-Pesquisa-2160.jpg",
      width: 3840,
      height: 2160,
      alt: "Advocacia-Geral da União - Mockup de alta fidelidade da tela de pesquisa do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/UNIO-Logo-720.png",
      width: 720,
      height: 720,
      alt: "Advocacia-Geral da União - Logo colorida do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/APP-Email.png",
      width: 635,
      height: 435,
      alt: "Advocacia-Geral da União - Imagem para e-mail de divulgação do App Escola AGU",
    },
    {
      src: "/img/portfolio/agu/APP-Escola-mockup-1080.png",
      width: 1618,
      height: 1080,
      alt: "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
    },
    {
      src: "/img/portfolio/agu/APP-Escola-mockup-2160.png",
      width: 3237,
      height: 2160,
      alt: "Advocacia-Geral da União - Mockup App Escola AGU e Módulo administrativo",
    },
    {
      src: "/img/portfolio/agu/UNIO-LogoBW-720.png",
      width: 720,
      height: 720,
      alt: "Advocacia-Geral da União - Logo Monocromática do Projeto Unio",
    },
    {
      src: "/img/portfolio/agu/UNIO-LogoTransition-720.png",
      width: 4328,
      height: 1080,
      alt: "Advocacia-Geral da União - Estudo de animação para criação da logo do Projeto Unio",
    },
    {
      src: "/img/portfolio/bbts/APP-BB_Windows-1080.jpg",
      width: 3375,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup de alta fidelidade para desenvolvimento do Aplicativo nativo para Windows Phone",
    },
    {
      src: "/img/portfolio/bbts/APP-BB-3_1.jpg",
      width: 842,
      height: 558,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
    },
    {
      src: "/img/portfolio/bbts/APP-BB-3_2.jpg",
      width: 1200,
      height: 675,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
    },
    {
      src: "/img/portfolio/bbts/APP-BB-3_3.jpg",
      width: 1200,
      height: 675,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do Aplicativo BB 3.0 (divulgação)",
    },
    {
      src: "/img/portfolio/bbts/APP-CONSUMIDOR-1080.jpg",
      width: 1094,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
    },
    {
      src: "/img/portfolio/bbts/APP-CONSUMIDOR-2160.jpg",
      width: 2187,
      height: 2160,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockups para desenvolvimento do Aplicativo Consumidor.gov.br",
    },
    {
      src: "/img/portfolio/bbts/APP-LIMITES.jpg",
      width: 360,
      height: 749,
      alt: "Banco do Brasil Tecnologia & Serviços - Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0",
    },
    {
      src: "/img/portfolio/bbts/APP-TRANSFERENCIA.jpg",
      width: 1418,
      height: 843,
      alt: "Banco do Brasil Tecnologia & Serviços -  Prototipação de alta fidelidade de transação de transferência de limites no App BB 2.0 em diferentes plataformas nativas",
    },
    {
      src: "/img/portfolio/bbts/GPI-1080.jpg",
      width: 2030,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Front-end com Bootstrap do Sistema de Gestão de Projetos de Infraestrutura",
    },
    {
      src: "/img/portfolio/bbts/HOTSITE-2160.jpg",
      width: 1194,
      height: 2160,
      alt: "Banco do Brasil Tecnologia & Serviços - Front-end de hotsite de Crédito Imobiliário",
    },
    {
      src: "/img/portfolio/bbts/INTRANET-MODULAR-1080.jpg",
      width: 1240,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap",
    },
    {
      src: "/img/portfolio/bbts/INTRANET-MODULAR-2160.jpg",
      width: 2480,
      height: 2160,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap",
    },
    {
      src: "/img/portfolio/bbts/INTRANET-MODULAR-MOBILE.jpg",
      width: 2284,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup de front-end para Intranet com uso de Bootstrap em ambiente Mobile",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-Cover.png",
      width: 1446,
      height: 763,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-Group-1080.png",
      width: 1748,
      height: 1080,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-Group-2160.png",
      width: 3496,
      height: 2160,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-iMac.png",
      width: 737,
      height: 570,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-iPad.png",
      width: 691,
      height: 505,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
    {
      src: "/img/portfolio/bbts/PLUGINS-Macbook.png",
      width: 764,
      height: 610,
      alt: "Banco do Brasil Tecnologia & Serviços - Mockup do BB Plugins (Gestão Empresarial)",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:p-8 lg:grid-cols-5 xl:grid-cols-6">
      {allImages.map((image) => (
        <a
          href={"https://bermeo.dev" + image.src}
          key={image.src}
          className="my-auto rounded"
        >
          <img
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        </a>
      ))}
    </div>
  );
};

{
  /* 

      <img
        src="/opengraph.png"
        height="1260"
        width="2400"
        alt="Guilherme Bermêo - OpenGraph Social Background"
        className="my-auto"
      />
      <img
        src="/opengraph.svg"
        height="630"
        width="1200"
        alt="Guilherme Bermêo - OpenGraph Social Background"
        className="my-auto"
      />
      <img
        src="/logo.svg"
        width="640"
        height="640"
        alt="Guilherme Bermêo - Rounded Logo"
        className="my-auto"
      />
      <img
        src="/logo-transparent.svg"
        width="595"
        height="595"
        alt="Guilherme Bermêo - Transparent Logo"
        className="my-auto"
      />
      <img
        src="/img/logo512.png"
        width="512"
        height="512"
        alt="Guilherme Bermêo - 512x512 png Logo"
        className="my-auto"
      />

      <img
        src="/img/portfolio/agu/APP-Cartaz-Pre.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto"
      />
      <img
        src="/img/portfolio/agu/APP-Cartaz.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/APP-Email.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/APP-Escola-Cover.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/APP-Escola-mockup-1080.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/APP-Escola-mockup-2160.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/OTRS-SADAtende-Cover.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/OTRS-SADAtende-Home.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Cover.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Logo-720.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-LogoBW-720.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-LogoTransition-720.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Modulos-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Modulos-2160.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Pesquisa-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/agu/UNIO-Pesquisa-2160.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-BB_Windows-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-BB-3_1.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-BB-3_2.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-BB-3_3.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-CONSUMIDOR-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-CONSUMIDOR-2160.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-LIMITES.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/APP-TRANSFERENCIA.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/GPI-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/HOTSITE-2160.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/INTRANET-MODULAR-1080.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/INTRANET-MODULAR-2160.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/INTRANET-MODULAR-MOBILE.jpg"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-Cover.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-Group-1080.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-Group-2160.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-iMac.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-iPad.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/bbts/PLUGINS-Macbook.png"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />

      <img
        src="/avatar1.jpg"
        width="1000"
        height="1000"
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/avatar2.png"
        width="2304"
        height="2304"
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />

      <img
        src="/img/portfolio/gif/CORRUPTED-avatar1-600.gif"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      />
      <img
        src="/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif"
        width=""
        height=""
        alt="Guilherme Bermêo - Painting Avatar"
        className="my-auto rounded"
      /> */
}

//     <image:image>
//     <image:loc>https://www.bermeo.dev/avatar1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/avatar2.png</image:loc>
//     <image:loc>https://www.bermeo.dev/logo.svg</image:loc>
//     <image:loc>https://www.bermeo.dev/logo-transparent.svg</image:loc>
//     <image:loc>https://www.bermeo.dev/opengraph.png</image:loc>
//     <image:loc>https://www.bermeo.dev/opengraph.svg</image:loc>
//   </image:image>
// </url>
// <url>
//   <loc>https://www.bermeo.dev/br</loc>
//   <image:image>
//     <image:loc>https://www.bermeo.dev/avatar1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/avatar2.png</image:loc>
//     <image:loc>https://www.bermeo.dev/logo.svg</image:loc>
//     <image:loc>https://www.bermeo.dev/logo-transparent.svg</image:loc>
//     <image:loc>https://www.bermeo.dev/opengraph.png</image:loc>
//     <image:loc>https://www.bermeo.dev/opengraph.svg</image:loc>
//   </image:image>
// </url>
// <url>
//   <loc>https://www.bermeo.dev/advocacia-geral-da-uniao</loc>
//   <image:image>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Cartaz.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Cartaz-Pre.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Escola-Cover.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/OTRS-SADAtende-Home.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/OTRS-SADAtende-Cover.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-Modulos-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-Modulos-2160.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-Pesquisa-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-Pesquisa-2160.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-Logo-720.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Email.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Escola-mockup-1080.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/APP-Escola-mockup-2160.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-LogoBW-720.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/agu/UNIO-LogoTransition-720.png</image:loc>
//   </image:image>
// </url>
// <url>
//   <loc>https://www.bermeo.dev/banco-do-brasil</loc>
//   <image:image>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-BB_Windows-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-BB-3_1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-BB-3_2.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-BB-3_3.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-CONSUMIDOR-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-CONSUMIDOR-2160.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-LIMITES.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/APP-TRANSFERENCIA.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/GPI-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/HOTSITE-2160.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-2160.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-MOBILE.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-Cover.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-Group-1080.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-Group-2160.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-iMac.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-iPad.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/bbts/PLUGINS-Macbook.png</image:loc>
//   </image:image>
// </url>
// <url>
//   <loc>https://www.bermeo.dev/other-projects</loc>
//   <image:image>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_1-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_2-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_2.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_3-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_3.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_4-1080.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_4.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_5.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_Cover.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_Mobile-1080.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CHAT-Persona5_Mobile-2160.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-Avatar.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-Linkedin.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-Old_Avatar.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-Starry_Night_by_Van_Gogh.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-The_Kiss_by_Gustav_Klimt.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals_2.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals-1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_2.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_2.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_5-Sketch_Noise.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_1.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_2.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_3.jpg</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-avatar1-600.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-avatar1.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/NLW-ESPORT_Cover-1080.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/NLW-ESPORT_Cover.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/NLW-ESPORT-ReactNative_1.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/NLW-ESPORT-ReactNative_2.png</image:loc>
//     <image:loc>https://www.bermeo.dev/img/portfolio/other/NLW-ESPORT-Web.png</image:loc>
//   </image:image>
// </url>
// </urlset>

export default AllWorks;
