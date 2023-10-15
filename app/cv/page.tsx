import React from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
  description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
};

const MarkDownCurriculumPage = () => {
  const markdownContent = ``;

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <ReactMarkdown
          className={`${s.markdown} px-6 pt-0 text-sm md:px-3 xl:px-0`}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default MarkDownCurriculumPage;
