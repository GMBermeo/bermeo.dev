import type { NextPage } from "next";
import { About } from "../components/sections/About";
import { Hero } from "../components/sections/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Portfolio } from "../components/sections/Portfolio";
import { Skills } from "../components/sections/Skills";
import { OtherProjects } from "@components/sections/OtherProjects";
import { useRouter } from "next/router";
import { loadExperiences } from "lib/loadExperiences";

const Home: NextPage = ({ experiences }: any) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <>
      <NavBar />

      <Hero />
      <main className="mx-auto">
        <About />
        <Experience />
        <OtherProjects />
        <Portfolio />
        <Education />
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
  const experiences = await loadExperiences(locale);

  // Props returned will be passed to the page component
  return { props: { experiences } };
}
