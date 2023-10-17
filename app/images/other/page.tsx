"use client";
import { useContext } from "react";
import Image from "next/image";
import { LocaleContext } from "@contexts/LocaleContext";
import { TImage } from "@types";
import { allImages, altSizesImages } from "../../api/images";

const AllImagesOtherPage = () => {
  const { isEng } = useContext(LocaleContext);
  const images = allImages.filter((item: TImage) =>
    item.src.includes("/other/" || "/gif/")
  );
  const altImages = altSizesImages.filter((item: TImage) =>
    item.src.includes("/other/" || "/gif/")
  );

  return (
    <>
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

export default AllImagesOtherPage;
