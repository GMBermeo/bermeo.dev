"use client";
import Link from "next/link";

export const DownloadCv = () => {
  const isWindows =
    typeof window !== "undefined"
      ? navigator.userAgent.toUpperCase().indexOf("WIN") >= 0
      : false;

  const tailwind =
    " ml-1 pl-2 pr-2 hover:decoration-primary hover:underline hover:decoration-2";

  return (
    <>
      <Link
        href={"/download/CV-202312[en].pdf"}
        hrefLang="en"
        className={tailwind}
      >
        <span className={isWindows ? "hidden" : ""}>🇬🇧 </span>Download CV
      </Link>
      |
      <Link
        href={"/download/CV-202312[br].pdf"}
        hrefLang="pt-BR"
        className={tailwind}
      >
        <span className={isWindows ? "hidden" : ""}>🇧🇷 </span>Baixar currículo
      </Link>
    </>
  );
};
