"use server";
import { Title, NavBar } from "@components";
import ReactMarkdown from "react-markdown";
import s from "styles/markdown.module.css";
import { Metadata } from "next";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Brazil's Attorney-General's Office | Guilherme Bermeo",
    description:
      "Advocacia-Geral da União (Brazil's Attorney-General's Office)",
  };
}

const AguPage = async () => {
  const content = await loadMarkdown("_data/advocacia-geral-da-uniao-en.md");

  return (
    <>
      <NavBar />
      <main className="container mx-auto mt-7 max-w-3xl px-6 sm:mt-14 sm:px-8">
        <Title title={"Advocacia-Geral da União"} />
        <ReactMarkdown className={s.markdown}>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export default AguPage;
