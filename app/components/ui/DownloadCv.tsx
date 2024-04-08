"use client";
import Link from "next/link";
import sLink from "@styles/Link.module.css";

export const DownloadCv = () => {
  const isWindows =
    typeof window !== "undefined"
      ? navigator.userAgent.toUpperCase().indexOf("WIN") >= 0
      : false;

  return (
    <>
      <Link
        href={"/download/CV-202312[en].pdf"}
        hrefLang="en"
        className={sLink.link}
        prefetch={false}
      >
        <span className={isWindows ? "hidden" : ""}>🇬🇧 </span>Download CV
      </Link>
      |
      <Link
        href={"/download/CV-202312[br].pdf"}
        hrefLang="pt-BR"
        className={sLink.link}
        prefetch={false}
      >
        <span className={isWindows ? "hidden" : ""}>🇧🇷 </span>Baixar currículo
      </Link>
    </>
  );
};
