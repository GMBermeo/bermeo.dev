import type { JSX } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { allImages, altSizesImages } from "app/api/images";
import type { Image as TypeImage } from "@types";

export const metadata: Metadata = {
  title: "Side Projects Images | Guilherme Bermeo",
  description: "All images from side projects in one page for indexing.",
};

export default function AllImagesOtherPage(): JSX.Element {
  const images: TypeImage[] = allImages.filter(
    (item: TypeImage) =>
      item.src.includes("/other/") || item.src.includes("/gif/"),
  );
  const alImages: TypeImage[] = altSizesImages.filter(
    (item: TypeImage) =>
      item.src.includes("/other/") || item.src.includes("/gif/"),
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            className="my-auto"
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
            className="my-auto"
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
