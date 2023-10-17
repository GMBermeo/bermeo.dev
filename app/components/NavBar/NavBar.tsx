"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { LangButton, NavButton } from "@components";
import s from "@styles/NavBar.module.css";
import { LocaleContext } from "@contexts/LocaleContext";

export const NavBar = () => {
  const { isEng, asPath } = useContext(LocaleContext);

  return (
    <nav className={s.navBar}>
      <div className="hidden sm:inline-block">
        <a href="https://www.bermeo.dev">
          <img
            src="/logo.svg"
            alt="Guilherme Bermêo's Logo"
            height={50}
            width={50}
          />
        </a>
      </div>
      <ul className="flex items-center">
        <Link href={"/cv"}>CV</Link>
        <NavButton
          label={isEng() ? "About" : "Sobre"}
          class="hidden sm:inline-block"
        />
        <NavButton label={isEng() ? "Experience" : "Experiência"} />
        <NavButton label={isEng() ? "Projects" : "Projetos"} />
        <NavButton label={isEng() ? "Education" : "Formação"} />
        <LangButton localeSet={"en"} />
        <LangButton localeSet={"br"} />
        {/* <NavButton label={isEng() ? "Contact": "Contato"} /> */}
      </ul>
    </nav>
  );
};
