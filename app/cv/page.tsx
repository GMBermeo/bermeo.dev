import React from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";
import { Metadata } from "next";
import fs from "fs";
import matter from "gray-matter";

export const metadata: Metadata = {
  title:
    "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
  description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
};

const MarkDownCurriculumPage = () => {
  const filename = fs.readFileSync(`public/cv/GuilhermeBermeo-en.md`, "utf8");
  const { content } = matter(filename);

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <ReactMarkdown
          className={`${s.markdown} px-6 pt-0 text-sm md:px-3 xl:px-0`}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default MarkDownCurriculumPage;
