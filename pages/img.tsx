/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { allImages, Image } from "./api/images";

const AllWorks: NextPage = ({ images }: any) => {
  const { locale } = useRouter();

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:p-8 lg:grid-cols-5 xl:grid-cols-6">
      {images.map((image: Image) => (
        <a
          href={"https://bermeo.dev" + image.src}
          key={image.src}
          className="my-auto rounded"
        >
          <img
            src={image.src}
            alt={locale === "br" && image.altBr ? image.altBr : image.alt}
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      images: allImages,
    },
  };
};

export default AllWorks;
