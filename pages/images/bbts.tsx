/* eslint-disable @next/next/no-img-element */
import { LocaleContext } from "@contexts/LocaleContext";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { allImages, altSizesImages } from "../api/images";
import { TImage } from "../../types/TImage";

const AllImagesBBTS: NextPage = ({ images, altImages }: any) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>
          {isEng()
            ? "Bank of Brazil Technology and Services images "
            : "Imagens do Banco do Brasil Tecnologia & Serviços "}
          - Guilherme Bermeo
        </title>
        <meta
          name="description"
          content={
            isEng()
              ? "Bank of Brazil Technology and Services images in one page for indexing."
              : "Imagens de projetos para o Banco do Brasil Tecnologia & Serviços."
          }
        />
      </Head>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TImage) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
          >
            <img
              src={image.src}
              alt={!isEng() && image.altBr ? image.altBr : image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2 p-4 md:grid-cols-8 md:gap-4 md:p-8 xl:grid-cols-12">
        {altImages.map((image: TImage) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
          >
            <img
              src={image.src}
              alt={!isEng() && image.altBr ? image.altBr : image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      images: allImages.filter((item) => item.src.includes("/bbts/")),
      altImages: altSizesImages.filter((item: TImage) =>
        item.src.includes("/bbts/")
      ),
    },
  };
};

export default AllImagesBBTS;
