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

const Home: NextPage = () => {
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
        locale: {locale}
        <br />
        locales: {locales}
        <br />
        asPath: {asPath}
        <br />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
