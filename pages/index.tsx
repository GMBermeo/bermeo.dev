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

const Home: NextPage = ({ experiences, education, projects }: any) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>Guilherme Bermeo - Front-end Developer</title>
        {isEng() ? (
          <meta
            name="description"
            content="A versatile and detail-oriented professional, I bring passion and expertise in front-end development and user experience to fast-paced environments. With a background in Systems Analysis and Development, Graphic Design, Music, and experience in various industries, I excel in cross-functional collaboration and adaptability. Skilled in JavaScript frameworks, high-fidelity prototyping, and cutting-edge technologies like React, TypeScript, Tailwind CSS, and Next. Committed to continuous improvement and exploring new tech, I blend creativity with problem-solving skills to deliver exceptional results. Outside work, I enjoy board games and movies."
          />
        ) : (
          <meta
            name="description"
            content="UX Designer Senior com vários anos de experiência trabalhando com clientes governamentais. Um aprendiz nato com uma capacidade natural de colaborar e liderar como um profissional dinâmico e dedicado."
          />
        )}
      </Head>
      <NavBar />
      <Hero />
      <main className="3xl:grid-cols-[1fr_39vw] mx-auto grid max-w-fit grid-cols-1">
        <div className="container ml-auto max-w-5xl px-6 sm:px-8">
          {/*📰 Bio */}
          <About />
          {/*👷🏻‍♂️ Work Experience  */}
          <Experience experiences={experiences} />
          <Portfolio projects={projects} />
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

export default Home;

// This function runs only on the server side
export async function getStaticProps({ locale }: { locale: "en" | "br" }) {
  const experiences = loadExperience(locale);
  const education = loadEducation(locale);
  const projects = loadProjects(locale);

  return { props: { experiences, education, projects } };
}
