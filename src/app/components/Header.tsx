"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocaleContext } from "@contexts";
import { Logo } from "@components";
import { Box, Typography } from "@mui/material";

interface NavButtonProps {
  label: string;
}

export const LangButton = ({ localeSet }: { localeSet: "en" | "br" }) => {
  const { isEng, asPath, locale, defaultLocale } = useLocaleContext();

  const changeLocale = () => {
    if (localeSet !== locale) {
      setLocale(localeSet);
    }
  };

  return (
    <Box
      sx={{
        opacity: locale === localeSet ? 1 : 0.5,
        "&:hover": {
          transform: locale === localeSet ? "scale(1.05)" : "scale(1)",
        },
        ml: 2,
        fontSize: "2rem",
      }}
      onClick={changeLocale}
    >
      <Link href={asPath || ""} locale={localeSet}>
        {localeSet === defaultLocale ? "🇬🇧" : "🇧🇷"}
      </Link>
    </Box>
  );
};

export const NavButton = ({ label }: NavButtonProps) => {
  function scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <Box
      sx={{
        "&:hover": {
          textDecoration: "underline",
          textDecorationColor: "primary",
        },
        ml: 1,
        p: 2,
        fontSize: "1rem",
        cursor: "pointer",
      }}
      onClick={() => scrollToSection(label)}
    >
      {label}
    </Box>
  );
};

export const Header = () => {
  const { isEng, asPath } = useLocaleContext();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 50,
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "0.5rem 1rem 0.25rem 1rem",
        backdropFilter: "blur(10px)",
        background: "rgba(14, 16, 18, 0.75)",
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Link href="https://www.bermeo.dev">
          <Image
            src="/logo.svg"
            alt="Guilherme Bermêo's Logo"
            height={50}
            width={50}
            priority
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link href={"/cv"}>
          <Typography variant="body1">CV</Typography>
        </Link>
        <NavButton
          label={isEng() ? "About" : "Sobre"}
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        />
        <NavButton label={isEng() ? "Experience" : "Experiência"} />
        <NavButton label={isEng() ? "Projects" : "Projetos"} />
        <NavButton label={isEng() ? "Education" : "Formação"} />
        <LangButton localeSet={"en"} />
        <LangButton localeSet={"br"} />
        {/* <NavButton label={isEng() ? "Contact" : "Contato"} /> */}
      </Box>
    </Box>
  );
};
