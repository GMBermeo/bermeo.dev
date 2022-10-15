/* eslint-disable @next/next/no-img-element */
import { LocaleContext } from "@contexts/LocaleContext";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import { allImages, Image } from "../api/images";

const AllImagesCorrupted: NextPage = ({ images }: any) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>
          {isEng()
            ? "CØЯЯuptΞd cØding дЯt images "
            : "Imagens de CØЯЯuptΞd cØding дЯt "}
          - Guilherme Bermeo
        </title>
        <meta
          name="description"
          content={
            isEng()
              ? "All CØЯЯuptΞd cØding дЯt images in one page for indexing."
              : "Imagens feitas para o projeto CØЯЯuptΞd cØding дЯt."
          }
        />
      </Head>
      <h1 className="mt-4 text-center text-2xl font-thin xl:text-4xl">
        CØЯЯuptΞd cØding дЯt
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map((image: Image) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto"
          >
            <figure className="flex flex-col">
              <img
                src={image.src}
                alt={!isEng() && image.altBr ? image.altBr : image.alt}
                height={image.height}
                width={image.width}
                className="rounded-xl"
              />
              <figcaption className="mb-4 mt-2 text-sm font-medium text-slate-700">
                {!isEng() && image.altBr ? image.altBr : image.alt}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: allImages.filter((item: Image) =>
        item.src.includes("/CORRUPTED-")
      ),
    },
  };
};

export default AllImagesCorrupted;
