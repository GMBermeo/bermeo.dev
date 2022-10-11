/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { allImages, altSizesImages, Image } from "../api/images";

const AllImagesAGU: NextPage = ({ images, altImages }: any) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Advocacia-Geral da União - Guilherme Bermeo</title>
      </Head>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
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
      <div className="grid grid-cols-6 gap-2 p-4 md:grid-cols-8 md:gap-4 md:p-8 xl:grid-cols-12">
        {altImages.map((image: Image) => (
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      images: allImages.filter((item) => item.src.includes("/agu/")),
      altImages: altSizesImages.filter((item: Image) =>
        item.src.includes("/agu/")
      ),
    },
  };
};

export default AllImagesAGU;
