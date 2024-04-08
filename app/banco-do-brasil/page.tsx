"use server";
import ReactMarkdown from "react-markdown";
import s from "styles/markdown.module.css";
import { NavBar } from "app/components/NavBar/NavBar";
import { Title } from "@components";
import { Metadata } from "next";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bank of Brazil Technology Branch | Guilherme Bermeo",
    description: "Banco do Brasil Tecnologia & Serviços",
  };
}

const BankBrazilPage = async () => {
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
};

export default BankBrazilPage;
