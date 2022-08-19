import React from "react";
import { NavButton } from "./NavButton";
import s from "./NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className={s.navBar}>
      <div>
        <a href="https://bermeo.dev">
          <Image
            src="/logo.svg"
            alt="Guilherme Bermêo's Logo"
            height={50}
            width={50}
          />
        </a>
      </div>
      <div className="flex items-center">
        <NavButton
          goTo="Experiencia"
          label="Sobre"
          class="hidden sm:inline-block"
        />
        <NavButton goTo="Experiencia" label="Experiência" />
        <NavButton goTo="Experiencia" label="Projetos" />
        <NavButton goTo="Experiencia" label="Contato" />
      </div>
    </header>
  );
};
