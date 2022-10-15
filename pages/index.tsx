import type { NextPage } from "next";
import { NavBar } from "../components/NavBar/NavBar";
import { loadEducation, loadExperience } from "lib";
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

const Home: NextPage = ({ experiences, education }: any) => {
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
      <main className="mx-auto">
        <About />
        <Experience experiences={experiences} />
        <OtherProjects />
        <Portfolio />
        <Education education={education} />
        <Skills />
        {/*📰 Bio */}
        {/*🔥 Projects */}
        {/*📝 Button to download your Resume */}
        {/*👷🏻‍♂️ Work Experience  */}
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
      </main>

      <footer></footer>
    </>
  );
};

export default Home;

// This function runs only on the server side
export async function getStaticProps({ locale }: { locale: "en" | "br" }) {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const experiences = loadExperience(locale);
  const education = loadEducation(locale);

  // Props returned will be passed to the page component
  return { props: { experiences, education } };
}
