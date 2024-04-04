"use server";
import React from "react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import s from "@styles/markdown.module.css";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { DownloadCv } from "@components";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
    description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
  };
}

async function getMarkdown() {
  const readFile = promisify(fs.readFile);

  const markdownPath = path.join(
    process.cwd(),
    "public/cv/GuilhermeBermeo-en.md"
  );
  console.log(markdownPath);
  const content = await readFile(markdownPath, "utf8");

  return content;
}

const MarkDownCurriculumPage = async () => {
  const content = await getMarkdown();

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
