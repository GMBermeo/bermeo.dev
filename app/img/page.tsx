"use client";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import { allImages } from "../api/images";
import { TImage } from "@types";
import Image from "next/image";

const AllWorksPage = () => {
  const { isEng } = useContext(LocaleContext);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:p-8 lg:grid-cols-5 xl:grid-cols-6">
      {allImages.map((image: TImage) => (
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

export default AllWorksPage;
