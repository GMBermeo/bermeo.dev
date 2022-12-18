/* eslint-disable @next/next/no-img-element */
import { LocaleContext } from "@contexts/LocaleContext";
import { TImage } from "../../types/TImage";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { allImages, altSizesImages } from "../api/images";

const AllImagesOther: NextPage = ({ images, altImages }: any) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>
          {isEng() ? "Side Projects Images " : "Imagens de outros projetos "}-
          Guilherme Bermeo
        </title>
        <meta
          name="description"
          content={
            isEng()
              ? "All images from side projects in one page for indexing."
              : "Todas as imagens para indexação."
          }
        />
      </Head>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TImage) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto"
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
            className="my-auto"
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: allImages.filter((item: TImage) =>
        item.src.includes("/other/" || "/gif/")
      ),
      altImages: altSizesImages.filter((item: TImage) =>
        item.src.includes("/other/" || "/gif/")
      ),
    },
  };
};

export default AllImagesOther;
