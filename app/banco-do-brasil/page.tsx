import { Title } from "@components";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import s from "styles/markdown.module.css";
import { NavBar } from "app/components/NavBar/NavBar";

const BB = () => {
  const { locale } = useContext(LocaleContext);
  const filename = fs.readFileSync(
    `_data/banco-do-brasil-${locale}.md`,
    "utf8"
  );
  const { content } = matter(filename);

  return (
    <>
      <NavBar />
      <main className="container mx-auto mt-7 max-w-3xl px-6 sm:mt-14 sm:px-8">
        <Title title={"Banco do Brasil"} />

        <ReactMarkdown className={s.markdown}>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export default BB;
