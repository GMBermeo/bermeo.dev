import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <>
      <div className="mx-auto flex h-[72vh] flex-col items-center justify-center px-6 md:px-16 lg:px-32">
        <div className="mx-auto w-fit">
          <h3 className="font-code text-dracula-comment mb-2 text-sm font-bold md:text-xl">
            &#47;&#47; Hello World!
          </h3>
          <h1 className="pb-4 text-3xl font-medium leading-tight md:text-7xl">
            Eu me chamo
            <br />
            Guilherme Bermêo.
          </h1>
          <h2 className="font-base text-base md:text-3xl">
            Sou um desenvolvedor front-end e{" "}
            <span className="line-through">ux designer</span> de Roraima focado
            em web com stack{" "}
            <span className="font-code text-balde-blue">Next</span>+
            <span className="font-code text-dracula-pink">Tailwindcss</span>.
          </h2>
        </div>
      </div>
      <div className="justify mx-auto mt-auto flex h-[20vh] items-end justify-end gap-x-16 px-16">
        <a href="https://github.bermeo.dev">
          <Image
            src="/social/github.svg"
            height={50}
            width={50}
            alt="Github Invertocat Logo"
          />
        </a>
        <a href="https://linkedin.bermeo.dev">
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
