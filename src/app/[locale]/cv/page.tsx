"use server";
import React from "react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DownloadCv } from "@components";
import { loadMarkdown } from "@lib";
import s from "@styles/Markdown.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
    description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
  };
}

const MarkDownCurriculumPage = async () => {
  const content = await loadMarkdown("public/cv/GuilhermeBermeo-en.md");

  return (
    <>
      <header className="mx-auto flex max-w-3xl px-6 pt-0 md:px-3 xl:px-0">
        <DownloadCv />
      </header>
      <div className="mx-auto mb-4 max-w-3xl">
        <ReactMarkdown
          className={`${s.markdown} px-6 pt-0 text-sm md:px-3 xl:px-0`}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default MarkDownCurriculumPage;
