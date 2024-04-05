"use server";
import React from "react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import s from "@styles/markdown.module.css";
import { micromark } from "micromark";
import { gfmFootnote, gfmFootnoteHtml } from "micromark-extension-gfm-footnote";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guilherme Yuri Bermêo Costa - Introdução à Narrativa em Música",
    description: "Introdução à Narrativa em Música, Tese de Pós-Graduação",
    abstract:
      "The main theme of this study is to discuss the importance and evolution of narrative elements in music and how these elements have influenced digital games. Through varied research that ranges from the study of the leitmotif in music as a narrative role since Scheherazade (1888) to contemporary popular music works, including the application of sound design techniques in the history of cinema and in the film Dune (2021), culminating in the emergence of tools that have enabled real-time re-sequencing and re-orchestration in digital games through player inputs, game states, and avatars. Finally, a final exploration of contemporary digital games that have used all these techniques for a better narrative construction and/or player immersion, such as The Legend of Zelda: Breath of the Wild (2017) and Journey (2012).",
    authors: {
      url: "https://www.bermeo.dev",
      name: "Guilherme Yuri Bermêo Costa",
    },
    keywords: [
      "Narrative",
      "Music",
      "Digital Games",
      "Sound Design",
      "Leitmotif",
      "Scheherazade",
      "Dune",
      "The Legend of Zelda: Breath of the Wild",
      "Journey",
      "Vertical Re-orchestration",
      "Horizontal Re-sequencing",
      "Soundtrack",
      "Motivo Condutor",
      "Re-orquestração Vertical",
      "Re-sequenciamento Horizontal",
      "Narrativa",
      "Trilha Sonora",
      "Fresno",
      "Sinfonia de Tudo que Há",
      "UniBF",
      "Pós-Graduação",
    ],
  };
}

const ThesisPage = async () => {
  const content = await loadMarkdown(
    "public/thesis/article-introduction-to-narrative-in-music[br].md"
  );

  return (
    <article className="mx-auto max-w-3xl pb-4">
      <ReactMarkdown
        className={`${s.markdown} px-6 pt-0 text-sm  md:px-3 xl:px-0`}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default ThesisPage;
