/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import { GetStaticProps, NextPage } from "next";
import { allImages, Image } from "./api/images";

const AllWorks: NextPage = ({ images }: any) => {
  const { isEng } = useContext(LocaleContext);

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
            alt={!isEng() && image.altBr ? image.altBr : image.alt}
            height={image.height}
            width={image.width}
          />
        </a>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: allImages,
    },
  };
};

export default AllWorks;
