"use client";
import { NavBar } from "@components";
import { loadEducation, loadExperience, loadProjects } from "lib";
import {
  Hero,
  About,
  Experience,
  OtherProjects,
  Portfolio,
  Education,
  Skills,
} from "@components";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";

const HomePage = () => {
  const { isEng, locale } = useContext(LocaleContext);
  const experiences = loadExperience(locale);
  const education = loadEducation(locale);

  return (
    <>
      <NavBar />
      <Hero />
      <main className="3xl:grid-cols-[1fr_39vw] mx-auto grid max-w-fit grid-cols-1">
        <div className="container ml-auto max-w-5xl px-6 sm:px-8">
          {/*📰 Bio */}
          <About />
          {/*👷🏻‍♂️ Work Experience  */}
          <Experience experiences={experiences} />
          <Portfolio />
        </div>
        <div className="container mr-auto max-w-3xl px-6 sm:px-8">
          {/*📚 Education */}
          <Education education={education} />
          <Skills />
        </div>
      </main>
      <div
      //  className="customContainer"
      ></div>

      {/*🔥 Projects */}
      <OtherProjects />

      {/*📝 Button to download your Resume */}

      {/*🔗 Important Links */}
      {/*🐱 Open source contributions */}
      {/*💥 Social media profiles */}
      {/*📲 Contact Information Section */}
      {/*💎 Skills */}
    </>
  );
};

export default HomePage;
