import Image from "next/image";
import Link from "next/link";
import { NavButton } from "@components";
import s from "@styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={s.navBar}>
      <div className="hidden sm:inline-block">
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
        <Link
          href={"/cv"}
          className="ml-1 pl-2 pr-2 hover:underline hover:decoration-primary hover:decoration-2"
        >
          CV
        </Link>
        <NavButton label="About" class="hidden sm:inline-block" />
        <NavButton label="Experience" />
        <NavButton label="Projects" />
        <NavButton label="Education" />
      </ul>
    </nav>
  );
};
