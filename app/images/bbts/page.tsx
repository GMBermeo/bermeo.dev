import type { JSX } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { allImages, altSizesImages } from "app/api/images";
import type { Image as TypeImage } from "@types";

export const metadata: Metadata = {
  title: "Bank of Brazil Technology and Services images | Guilherme Bermeo",
  description:
    "Bank of Brazil Technology and Services images in one page for indexing.",
};

export default function AllImagesBBTSPage(): JSX.Element {
  const images: TypeImage[] = allImages.filter((item) =>
    item.src.includes("/bbts/"),
  );

  const alImages: TypeImage[] = altSizesImages.filter((item: TypeImage) =>
    item.src.includes("/bbts/"),
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2 p-4 md:grid-cols-8 md:gap-4 md:p-8 xl:grid-cols-12">
        {alImages.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
    </>
  );
}
