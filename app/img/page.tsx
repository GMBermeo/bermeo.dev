import { allImages } from "@api/images";
import { Image as TImage } from "@types";
import Image from "next/image";

const AllWorksPage = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:p-8 lg:grid-cols-5 xl:grid-cols-6">
      {allImages.map((image: TImage) => (
        <a
          href={"https://bermeo.dev" + image.src}
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
  );
};

export default AllWorksPage;
