"use server";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box
      component={"header"}
      sx={{
        margin: "auto",
        height: "100vh",
        paddingX: { xs: 2, md: 8, lg: 16 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "84%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: "fit-content",
          }}
        >
          <Typography
            variant="h6"
            color={"text.disabled"}
            sx={{
              fontFamily: "monospace",
              marginBottom: 2,
              fontWeight: "bold",
            }}
          >
            {"//"}hello world!
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              paddingBottom: 4,
              fontWeight: "medium",
            }}
          >
            My name is
            <br />
            Guilherme Bermêo.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            I&apos;m a senior front-end developer and ux designer from Brazil
            focused on web systems using{" "}
            <span style={{ color: "#57b0ff" }}>Next.js</span>.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "auto",
          display: "flex",
          height: "16%", // Equivalent to h-1/6
          justifyContent: "end",
          gap: 6,
          paddingX: 2,
        }}
      >
        <a href="https://github.com/GMBermeo">
          <Image
            src="/social/github.svg"
            height={50}
            width={50}
            alt="Github Invertocat Logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/gmbermeo/">
          <Image
            src="/social/linkedin.svg"
            height={50}
            width={50}
            alt="Linkedin Logo"
          />
        </a>
      </Box>
    </Box>
  );
};
