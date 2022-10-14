import React from "react";
import { NavButton } from "./NavButton";
import s from "../../styles/NavBar.module.css";
import Image from "next/image";

export const NavBar = ({ locale }: any) => {
  return (
    <nav className={s.navBar}>
      <div>
        <a href="https://www.bermeo.dev">
          <Image
            src="/logo.svg"
            alt="Guilherme Bermêo's Logo"
            height={50}
            width={50}
          />
        </a>
      </div>
      <ul className="flex items-center">
        <NavButton
          label={locale == "en" ? "About" : "Sobre"}
          class="hidden sm:inline-block"
        />
        <NavButton label={locale == "en" ? "Experience" : "Experiência"} />
        <NavButton label={locale == "en" ? "Projects" : "Projetos"} />
        <NavButton label={locale == "en" ? "Education" : "Formação"} />
        {/* <NavButton label={locale == "en" ? "Contact": "Contato"} /> */}
      </ul>
    </nav>
  );
};
