import type { NextPage } from "next";
import { About } from "../components/sections/About";
import { Hero } from "../components/sections/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Portfolio } from "../components/sections/Portfolio";
import { Skills } from "../components/sections/Skills";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />

      <Hero />
      <main className="container mx-auto max-w-3xl px-6 sm:px-8">
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Skills />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
