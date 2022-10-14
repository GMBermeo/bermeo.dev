import type { NextPage } from "next";
import { NavBar } from "../components/NavBar/NavBar";
import { useRouter } from "next/router";
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

const Home: NextPage = ({ experiences, education }: any) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>
          Guilherme Bermeo
          <meta
            name="description"
            content="Experienced Digital Product Designer with several years of experience working with governmental clients to create and enhance the aesthetics and experience for digital products. Adept in designing, managing, and planning the production of projects, ranging from small to very large-scale. An easy learner with a natural ability to collaborate and lead as a dynamic and dedicated professional."
          />
        </title>
      </Head>
      <NavBar locale={locale} />
      <Hero locale={locale} />
      <main className="mx-auto">
        <About locale={locale} />
        <Experience experiences={experiences} locale={locale} />
        <OtherProjects locale={locale} />
        <Portfolio locale={locale} />
        <Education education={education} locale={locale} />
        <Skills locale={locale} />
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
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;

// This function runs only on the server side
export async function getStaticProps(context: any) {
  const { locale } = context;
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const experiences = loadExperience(locale);
  const education = loadEducation(locale);

  // Props returned will be passed to the page component
  return { props: { experiences, education } };
}
