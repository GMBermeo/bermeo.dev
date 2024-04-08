import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div>
      <header className="mx-auto h-screen px-6 md:px-16 lg:px-32">
        <div className="flex h-5/6 w-full flex-col ">
          <div className="mx-auto my-auto w-fit">
            <h3 className="font-code mb-2 text-sm font-bold text-dracula-comment md:text-xl">
              {"//hello world!"}
            </h3>
            <h1 className="pb-4 text-3xl font-medium leading-tight sm:text-5xl md:text-7xl">
              {"My name is "}
              <br />
              Guilherme Bermêo.
            </h1>
            <h2 className="font-base text-base md:text-3xl">
              {
                "I'm a senior front-end engineer and former ux designer from Brazil focused on web systems using "
              }
              <span className="font-code text-balde-blue">Next.js</span>.
            </h2>
          </div>
        </div>

        <div className="mx-auto flex h-1/6 justify-end gap-x-6 px-8">
          <Link
            href="https://github.com/GMBermeo"
            title="Visit Guilherme Bermêo's Github"
          >
            <Image
              src="/social/github.svg"
              height={50}
              width={50}
              alt="Github Invertocat Logo"
              title="Github"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gmbermeo/"
            title="Visit Guilherme Bermêo's LinkedIn"
          >
            <Image
              src="/social/linkedin.svg"
              height={50}
              width={50}
              alt="Linkedin Logo"
              title="Linkedin"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
