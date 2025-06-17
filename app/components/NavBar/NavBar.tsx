import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavButton } from "@components";
import s from "@styles/NavBar.module.css";
import sLink from "@styles/Link.module.css";

export const NavBar = (): JSX.Element => {
  return (
    <nav className={s.navBar}>
      <div className="hidden sm:inline-block">
        <Link href="https://www.bermeo.dev" title="Bermeo.dev">
          <Image
            src="/logo.svg"
            alt="Guilherme Bermêo"
            title="Guilherme Bermêo's Logo"
            height={50}
            width={50}
          />
        </Link>
      </div>
      <ul className="flex items-center">
        <Link
          href={"/resume"}
          className={sLink.link}
          title="Resume (Curriculum Vitae)"
        >
          Resume
        </Link>
        <NavButton label="About" className="hidden sm:inline-block" />
        <NavButton label="Experience" />
        <NavButton label="Projects" />
        <NavButton label="Education" />
      </ul>
    </nav>
  );
};
