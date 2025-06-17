"use server";
import type { JSX } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { allImages } from "app/api/images";
import type { Image as TypeImage } from "@types";

export async function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title:
      "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | All Images Portifolio",
    description: "Guilherme Yuri Bermêo Costa's Portifolio",
  });
}

export default async function AllWorksPage(): Promise<JSX.Element> {
  await Promise.resolve();

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:p-8 lg:grid-cols-5 xl:grid-cols-6">
      {allImages.map((image: TypeImage) => (
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
  );
}
