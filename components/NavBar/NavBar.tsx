import React from "react";
import { NavButton } from "./NavButton";
import s from "../../styles/NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className={s.navBar}>
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
      <ul className="flex items-center">
        <NavButton label="Sobre" class="hidden sm:inline-block" />
        <NavButton label="Experiência" />
        <NavButton label="Projetos" />
        <NavButton label="Contato" />
      </ul>
    </nav>
  );
};
