"use server";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import React from "react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import s from "@styles/markdown.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guilherme Yuri Bermêo Costa - Introdução à Narrativa em Música",
    description: "Introdução à Narrativa em Música, Tese de Pós-Graduação",
    abstract:
      "The main theme of this study is to discuss the importance and evolution of narrative elements in music and how these elements have influenced digital games. Through varied research that ranges from the study of the leitmotif in music as a narrative role since Scheherazade (1888) to contemporary popular music works, including the application of sound design techniques in the history of cinema and in the film Dune (2021), culminating in the emergence of tools that have enabled real-time re-sequencing and re-orchestration in digital games through player inputs, game states, and avatars. Finally, a final exploration of contemporary digital games that have used all these techniques for a better narrative construction and/or player immersion, such as The Legend of Zelda: Breath of the Wild (2017) and Journey (2012).",
  };
}

async function getMarkdown() {
  const readFile = promisify(fs.readFile);

  const markdownPath = path.join(
    process.cwd(),
    "public/thesis/article-introduction-to-narrative-in-music[br].md"
  );
  console.log(markdownPath);
  const content = await readFile(markdownPath, "utf8");

  return content;
}

const ThesisPage = async () => {
  const content = await getMarkdown();
  return (
    <div className="mx-auto mb-4 max-w-3xl">
      <ReactMarkdown
        className={`${s.markdown} px-6 pt-0 text-sm  md:px-3 xl:px-0`}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ThesisPage;
