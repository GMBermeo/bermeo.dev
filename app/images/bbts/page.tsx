"use client";
import { LocaleContext } from "@contexts/LocaleContext";
import { useContext } from "react";
import { allImages, altSizesImages } from "../../api/images";
import { TImage } from "@types";
import Image from "next/image";

const AllImagesBBTSPage = () => {
  const { isEng } = useContext(LocaleContext);
  const images = allImages.filter((item) => item.src.includes("/bbts/"));
  const altImages = altSizesImages.filter((item: TImage) =>
    item.src.includes("/bbts/")
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TImage) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
          >
            <Image
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
            <Image
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

export default AllImagesBBTSPage;
