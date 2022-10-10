/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { allImages, Image } from "../api/images";

const PortfolioOther: NextPage = ({ images, altImages }: any) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>CØЯЯuptΞd cØding дЯt</title>
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
                alt={locale === "br" && image.altBr ? image.altBr : image.alt}
                height={image.height}
                width={image.width}
                className="rounded-xl"
              />
              <caption className="mb-4 mt-2 text-sm font-medium text-slate-700">
                {locale === "br" && image.altBr ? image.altBr : image.alt}
              </caption>
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

export default PortfolioOther;
