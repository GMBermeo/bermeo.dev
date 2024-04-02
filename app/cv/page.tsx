"use client";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";

import { DownloadCv } from "@components";

// export const metadata: Metadata = {
//   title:
//     "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
//   description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
// };

const MarkDownCurriculumPage = () => {
  const [markdownContent, setMarkdownContent] = React.useState("");

  useEffect(() => {
    fetch(`/cv/GuilhermeBermeo-en.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <>
      <header className="flex px-6 pt-0 md:px-3 xl:px-0">
        <DownloadCv />
      </header>
      <div className="mx-auto mb-4 max-w-3xl">
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
