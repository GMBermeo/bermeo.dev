"use client";
import { useContext } from "react";
import Link from "next/link";
import { LocaleContext } from "@contexts/LocaleContext";

export const LangButton = ({ localeSet }: { localeSet: "en" | "br" }) => {
  const { isEng, asPath, locale, defaultLocale } = useContext(LocaleContext);

  return (
    <li
      className={`${
        locale == localeSet ? "opacity-100 hover:scale-105" : "opacity-50"
      } ml-2 text-2xl`}
    >
      <Link href={asPath || ""} locale={localeSet}>
        {localeSet == defaultLocale ? "🇬🇧" : "🇧🇷"}
      </Link>
    </li>
  );
};
