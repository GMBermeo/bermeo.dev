"use server";
import { Hero } from "@components";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1fr 39vw" },
          maxWidth: "fit-content",
        }}
      >
        <Hero />
        <Box
          sx={{
            ml: "auto",
            maxWidth: "5xl",
            px: { xs: 6, sm: 8 },
          }}
        >
          {/*📰 Bio */}
          {/* <About /> */}
          {/*👷🏻‍♂️ Work Experience  */}
          {/* <Experience experiences={experiences} /> */}
          {/* <Portfolio projects={projects} /> */}
        </Box>
        <Box
          sx={{
            mr: "auto",
            maxWidth: "3xl",
            px: { xs: 6, sm: 8 },
          }}
        >
          {/*📚 Education */}
        </Box>
      </Box>

      {/* <NavBar />
      <Hero />
      <main className="3xl:grid-cols-[1fr_39vw] mx-auto grid max-w-fit grid-cols-1">
        <div className="container ml-auto max-w-5xl px-6 sm:px-8"> */}
      {/*📰 Bio */}
      {/* <About /> */}
      {/*👷🏻‍♂️ Work Experience  */}
      {/* <Experience experiences={experiences} />
          <Portfolio projects={projects} /> */}
      {/* </div>
        <div className="container mr-auto max-w-3xl px-6 sm:px-8"> */}
      {/*📚 Education */}
      {/* <Education education={education} />
          <Skills />
        </div>
      </main>
     

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
