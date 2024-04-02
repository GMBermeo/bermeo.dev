import { allImages } from "@api/images";
import { Image as TImage } from "@types";
import Image from "next/image";

const AllImagesCorruptedPage = () => {
  const images = allImages.filter((item: TImage) =>
    item.src.includes("/CORRUPTED-")
  );

  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-thin xl:text-4xl">
        CØЯЯuptΞd cØding дЯt
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map((image: TImage) => (
          <a
            href={"https://bermeo.dev" + image.src}
            key={image.src}
            className="my-auto"
          >
            <figure className="flex flex-col">
              <Image
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
                className="rounded-xl"
              />
              <figcaption className="mb-4 mt-2 text-sm font-medium text-slate-700">
                {image.alt}
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
};

export default AllImagesCorruptedPage;
