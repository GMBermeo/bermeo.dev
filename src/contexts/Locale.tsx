"use client";
import { createContext, useCallback, useContext } from "react";
import { useRouter } from "next/navigation";

type LocaleContextType = {
  locale: string;
  locales: string[];
  defaultLocale: string;
  asPath: string;
  isEng: () => boolean;
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  locales: ["en", "br"],
  defaultLocale: "en",
  asPath: "/",
  isEng: () => true,
  setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  //   const locales = ["en", "br"];
  //   const defaultLocale = "en";
  //   const locale = "en";

  const { asPath, locale, locales, defaultLocale } = useRouter();

  const setLocale = useCallback(
    (newLocale: string) => {
      // Use the router to set the new locale
      // You might need to handle route changes depending on your routing setup
      router.push(asPath, asPath, { locale: newLocale });
    },
    [asPath]
  );

  const isEng = useCallback(() => {
    return locale === "en";
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{ locale, locales, defaultLocale, isEng, asPath, setLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);
