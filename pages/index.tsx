import type { NextPage } from "next";
import { NavBar } from "../components/NavBar/NavBar";
import { loadEducation, loadExperience, loadProjects } from "lib";
import Head from "next/head";
import {
  Hero,
  About,
  Experience,
  OtherProjects,
  Portfolio,
  Education,
  Skills,
} from "../components/sections/";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import { TExperience } from "../types/TExperience";
import { TProject } from "../types/TProject";

const Home: NextPage = ({ experiences, education, projects }: any) => {
  const { locale, locales, defaultLocale, basePath, asPath } =
    useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>Guilherme Bermeo - Front-end Developer</title>
        <meta
          name="description"
          content="Experienced Digital Product Designer with several years of experience working with governmental clients to create and enhance the aesthetics and experience for digital products. Adept in designing, managing, and planning the production of projects, ranging from small to very large-scale. An easy learner with a natural ability to collaborate and lead as a dynamic and dedicated professional."
        />
      </Head>
      <NavBar />
      <Hero />
      <main className="mx-auto grid max-w-fit grid-cols-1 lg:grid-cols-[1fr_40vw]">
        <div className="container ml-auto max-w-5xl px-6 sm:px-8">
          {/*📰 Bio */}
          <About />
          {/*👷🏻‍♂️ Work Experience  */}
          <Experience experiences={experiences} />
        </div>
        <div className="container mr-auto max-w-3xl px-6 sm:px-8">
          {/*📚 Education */}
          <Education education={education} />
          <Skills />
        </div>
      </main>
      <div
      //  className="customContainer"
      >
        <Portfolio projects={projects} />
      </div>

      {/*🔥 Projects */}
      <OtherProjects />

      {/*📝 Button to download your Resume */}

      {/*🔗 Important Links */}
      {/*🐱 Open source contributions */}
      {/*💥 Social media profiles */}
      {/*📲 Contact Information Section */}
      {/*💎 Skills */}
      <div className="opacity-0">
        locale: {locale}
        <br />
        locales: {locales}
        <br />
        asPath: {asPath}
        <br />
        defaultLocale:{defaultLocale}
        <br />
        basePath:{basePath}
        <br />
        asPath:{asPath}
      </div>
      <footer></footer>
    </>
  );
};

export default Home;

// This function runs only on the server side
export async function getStaticProps({ locale }: { locale: "en" | "br" }) {
  const experiences = loadExperience(locale);
  const education = loadEducation(locale);
  const projects = loadProjects(locale);

  return { props: { experiences, education, projects } };
}
