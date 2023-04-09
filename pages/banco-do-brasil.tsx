import { Title } from "../components/ui/Title";
import type { NextPage } from "next";
import { Subtitle } from "../components/ui/Subtitle";
import Head from "next/head";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import s from "styles/markdown.module.css";
import { NavBar } from "@components/NavBar/NavBar";

export async function getStaticProps(context: any) {
  const filename = fs.readFileSync(
    `_data/banco-do-brasil-${context.locale}.md`,
    "utf8"
  );
  const { content } = matter(filename);

  return {
    props: {
      content,
    },
  };
}

const BB: NextPage<{ content: string }> = ({ content }) => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>
          {isEng()
            ? "Bank of Brazil Technology and Services"
            : "Banco do Brasil Tecnologia & Serviços"}
          - Guilherme Bermeo
        </title>

        <meta
          name="description"
          content={
            isEng()
              ? "Bank of Brazil Technology and Services"
              : "Banco do Brasil Tecnologia & Serviços"
          }
        />
      </Head>
      <NavBar />
      <main className="container mx-auto mt-7 max-w-3xl px-6 sm:mt-14 sm:px-8">
        <Title title={"Banco do Brasil"} />

        <ReactMarkdown className={s.markdown}>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export default BB;
