"use server";
import { Metadata } from "next";
import Image from "next/image";
import { allImages, altSizesImages } from "app/api/images";
import { Image as TImage } from "@types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Attorney General's Office images | Guilherme Bermeo",
    description: "Attorney General's Office images in one page for indexing.",
  };
}

const AllImagesAGUPage = async () => {
  const images = allImages.filter((item) => item.src.includes("/agu/"));
  const alImages = altSizesImages.filter((item: TImage) =>
    item.src.includes("/agu/")
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
        {images.map((image: TImage) => (
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
        {alImages.map((image: TImage) => (
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
};

export default AllImagesAGUPage;
