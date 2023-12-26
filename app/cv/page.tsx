"use client";
import React, { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";
import { LocaleContext } from "@contexts/LocaleContext";

// export const metadata: Metadata = {
//   title:
//     "Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum Vitae",
//   description: "Guilherme Yuri Bermêo Costa's Curriculum Vitae",
// };

const MarkDownCurriculumPage = () => {
  const [markdownContent, setMarkdownContent] = React.useState("");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    fetch(`/cv/GuilhermeBermeo-${locale}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [locale]);

  return (
    <div className="mx-auto max-w-3xl">
      <ReactMarkdown
        className={`${s.markdown} px-6 pt-0 text-sm md:px-3 xl:px-0`}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDownCurriculumPage;
