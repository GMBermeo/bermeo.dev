import { Image as TImage } from "@types";
import Image from "next/image";
import { allImages } from "app/api/images";

const AllWorks = () => {
  const images = allImages;

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
    </>
  );
};

export default AllWorks;
