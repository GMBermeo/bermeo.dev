import type { JSX } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { allImages } from "app/api/images";
import type { Image as TypeImage } from "@types";

export const metadata: Metadata = {
  title: "Images | Guilherme Bermeo",
  description: "All images.",
};

export default function AllWorksPage(): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {allImages.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
            title={image.alt}
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2 p-4 md:grid-cols-8 md:gap-4 md:p-8 xl:grid-cols-12">
        {allImages.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            className="my-auto rounded"
            title={image.alt}
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.alt}
              height={image.height}
              width={image.width}
            />
          </a>
        ))}
      </div>
    </>
  );
}
