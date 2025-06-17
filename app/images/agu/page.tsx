import type { JSX } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { allImages, altSizesImages } from "app/api/images";
import type { Image as TypeImage } from "@types";

export const metadata: Metadata = {
  title: "Attorney General's Office images | Guilherme Bermeo",
  description: "Attorney General's Office images in one page for indexing.",
};

export default function AllImagesAGUPage(): JSX.Element {
  const images: TypeImage[] = allImages.filter((item: TypeImage) =>
    item.src.includes("/agu/"),
  );

  const alImages: TypeImage[] = altSizesImages.filter((item: TypeImage) =>
    item.src.includes("/agu/"),
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TypeImage) => (
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
        {alImages.map((image: TypeImage) => (
          <a
            href={"https://www.bermeo.dev" + image.src}
            key={image.src}
            title={image.alt}
            className="my-auto rounded"
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
