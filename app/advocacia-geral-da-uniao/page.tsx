"use server";
import s from "styles/markdown.module.css";
import type { JSX } from "react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { NavBar, Title } from "@components";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title: "Brazil's Attorney-General's Office | Guilherme Bermeo",
    description:
      "Advocacia-Geral da União (Brazil's Attorney-General's Office)",
  });
}

export default async function AguPage(): Promise<JSX.Element> {
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
}
