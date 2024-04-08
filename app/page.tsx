"use server";
import { loadEducation, loadExperience, loadProjects } from "lib";
import {
  Hero,
  About,
  Experience,
  Portfolio,
  Education,
  NavBar,
  Skills,
  DownloadCv,
} from "@components";

const HomePage = async () => {
  const experiences = loadExperience("en");
  const education = loadEducation("en");
  const projects = loadProjects("en");

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
          <Portfolio projects={projects} />
        </div>
        <div className="container mr-auto max-w-5xl px-6 sm:px-8">
          {/*📚 Education */}
          <Education education={education} />
          <Skills />
        </div>
      </main>
      <footer className="flex justify-center pb-6 xl:mt-6">
        <DownloadCv />
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
};

export default HomePage;
