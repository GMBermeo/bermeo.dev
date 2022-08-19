import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <div className="mx-auto w-fit">
          <h3 className="font-code mb-2 text-sm font-bold text-dracula-comment md:text-xl">
            &#47;&#47; Hello World!
          </h3>
          <h1 className="pb-4 text-3xl font-medium leading-tight md:text-7xl">
            Me chamo Guilherme Bermêo.
          </h1>
          <h2 className="font-base text-base md:text-3xl">
            Sou um desenvolvedor front-end e{" "}
            <span className="line-through">ux designer</span> em Brasília focado
            em web com stack{" "}
            <span className="font-code text-dracula-cyan">Next</span>-
            <span className="font-code text-dracula-pink">Tailwindcss</span>.
          </h2>
        </div>
      </div>
      <div className="justify mt-auto flex h-[20vh] items-center justify-end">
        <a href="https://github.bermeo.dev" className="py-2 px-2">
          <Image
            src="/social/github.svg"
            height={50}
            width={50}
            alt="Github Invertocat Logo"
          />
        </a>
        <a href="https://linkedin.bermeo.dev" className="py-2 px-4">
          <Image
            src="/social/linkedin.svg"
            height={50}
            width={50}
            alt="Linkedin Logo"
          />
        </a>
      </div>
    </>
  );
};
