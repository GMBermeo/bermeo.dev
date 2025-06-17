"use server";
import type { JSX } from "react";
import s from "styles/markdown.module.css";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { Title, NavBar } from "@components";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title: "Bank of Brazil Technology Branch | Guilherme Bermeo",
    description: "Banco do Brasil Tecnologia & Serviços",
  });
}

export default async function BankBrazilPage(): Promise<JSX.Element> {
  const content = await loadMarkdown("_data/banco-do-brasil-en.md");

  return (
    <>
      <NavBar />
      <main className="container mx-auto mt-7 max-w-3xl px-6 sm:mt-14 sm:px-8">
        <Title title={"Banco do Brasil"} />
        <ReactMarkdown className={s.markdown}>{content}</ReactMarkdown>
      </main>
    </>
  );
}
