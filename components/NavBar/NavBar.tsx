import React from "react";
import { NavButton } from "./NavButton";
import s from "../../styles/NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className={s.navBar}>
      <div>
        <a href="./">
          <Image
            src="/logo.svg"
            alt="Guilherme Bermêo's Logo"
            height={50}
            width={50}
          />
        </a>
      </div>
      <div className="flex items-center">
        <NavButton goTo="Sobre" label="Sobre" class="hidden sm:inline-block" />
        <NavButton goTo="Experiência" label="Experiência" />
        <NavButton goTo="Projects" label="Projetos" />
        <NavButton goTo="Contact" label="Contato" />
      </div>
    </header>
  );
};
