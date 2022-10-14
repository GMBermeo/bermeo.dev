import React from "react";
import Image from "next/image";

export const Hero = ({ locale }: any) => {
  function documentHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  }

  React.useEffect(() => {
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <>
      <header
        className="mx-auto px-6 md:px-16 lg:px-32"
        style={{ height: "var(--doc-height)" }}
      >
        <div className="flex h-5/6 w-full flex-col ">
          <div className="mx-auto my-auto w-fit">
            <h3 className="font-code mb-2 text-sm font-bold text-dracula-comment md:text-xl">
              &#47;&#47; Hello World!
            </h3>
            <h1 className="pb-4 text-3xl font-medium leading-tight sm:text-5xl md:text-7xl">
              {locale == "en" ? "My name is" : "Eu me chamo"}
              <br />
              Guilherme Bermêo.
            </h1>
            <h2 className="font-base text-base md:text-3xl">
              {locale == "en"
                ? "I'm a front-end developer and "
                : "Sou um desenvolvedor front-end e "}
              <span className="line-through">ux designer</span>
              {locale == "en"
                ? " from Roraima focused on web systems using "
                : " de Roraima focado em web com stack "}
              <span className="font-code text-balde-blue">Next.js</span>+
              <span className="font-code text-dracula-pink">Tailwindcss</span>.
            </h2>
          </div>
        </div>

        <div className="mx-auto flex h-1/6 justify-end gap-x-6 px-8">
          <a href="https://github.com/GMBermeo">
            <Image
              src="/social/github.svg"
              height={50}
              width={50}
              alt="Github Invertocat Logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/gmbermeo/">
            <Image
              src="/social/linkedin.svg"
              height={50}
              width={50}
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </header>
    </>
  );
};
