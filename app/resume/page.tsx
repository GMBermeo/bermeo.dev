"use server";
import s from "@styles/markdown.module.css";
import type { JSX } from "react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DownloadResume } from "@components";
import { loadMarkdown } from "@lib";

export async function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title:
      "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
    description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
  });
}

export default async function MarkDownCurriculumPage(): Promise<JSX.Element> {
  const content = await loadMarkdown("public/resume/GuilhermeBermeo-en.md");

  return (
    <>
      <header className="mx-auto flex max-w-3xl px-6 pt-0 md:px-3 xl:px-0">
        <DownloadResume />
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
}
