import type { NextPage } from "next";
import { About } from "../components/sections/About";
import { Hero } from "../components/sections/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Portfolio } from "../components/sections/Portfolio";
import { Skills } from "../components/sections/Skills";
import { OtherProjects } from "@components/sections/OtherProjects";

const Home: NextPage = () => {
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
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
