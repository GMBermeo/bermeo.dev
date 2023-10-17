"use client";
import { useContext } from "react";
import Image from "next/image";
import { LocaleContext } from "@contexts/LocaleContext";

export const Hero = () => {
  const { isEng } = useContext(LocaleContext);

  return (
    <div>
      <header className="mx-auto h-screen px-6 md:px-16 lg:px-32">
        <div className="flex h-5/6 w-full flex-col ">
          <div className="mx-auto my-auto w-fit">
            <h3 className="font-code text-dracula-comment mb-2 text-sm font-bold md:text-xl">
              {isEng() ? "//hello world!" : "//olá mundo!"}
            </h3>
            <h1 className="pb-4 text-3xl font-medium leading-tight sm:text-5xl md:text-7xl">
              {isEng() ? "My name is" : "Eu me chamo"}
              <br />
              Guilherme Bermêo.
            </h1>
            <h2 className="font-base text-base md:text-3xl">
              {isEng()
                ? "I'm a senior front-end developer and ux designer from Brazil focused on web systems using "
                : "Sou um desenvolvedor front-end senior e ux designer de Brasília focado em web com stack "}
              <span className="font-code text-balde-blue">Next.js</span>.
            </h2>
          </div>
        </div>

        <div className="mx-auto flex h-1/6 justify-end gap-x-6 px-8">
          <a href="https://github.com/GMBermeo">
            <img
              src="/social/github.svg"
              height={50}
              width={50}
              alt="Github Invertocat Logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/gmbermeo/">
            <img
              src="/social/linkedin.svg"
              height={50}
              width={50}
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </header>
    </div>
  );
};
