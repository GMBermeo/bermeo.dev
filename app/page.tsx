"use server";
import type { JSX } from "react";
import {
  About,
  Experience,
  Portfolio,
  Hero,
  Education,
  NavBar,
  Skills,
  DownloadResume,
} from "@components";

export default async function HomePage(): Promise<JSX.Element> {
  await Promise.resolve();
  return (
    <>
      <NavBar />
      <Hero />
      <main className="3xl:grid-cols-[1fr_39vw] mx-auto grid max-w-fit grid-cols-1">
        <div className="container ml-auto max-w-5xl px-6 sm:px-8">
          {/*📰 Bio */}
          <About />
          {/*👷🏻‍♂️ Work Experience  */}
          <Experience />
          <Portfolio />
        </div>
        <div className="container mr-auto max-w-5xl px-6 sm:px-8">
          {/*📚 Education */}
          <Education />
          <Skills />
        </div>
      </main>
      <footer className="flex justify-center pb-6 xl:mt-6">
        <DownloadResume />
      </footer>

      {/*🔥 Projects */}
      {/* <OtherProjects /> */}

      {/*📝 Button to download your Resume */}

      {/*🔗 Important Links */}
      {/*🐱 Open source contributions */}
      {/*💥 Social media profiles */}
      {/*📲 Contact Information Section */}
      {/*💎 Skills */}
    </>
  );
}
