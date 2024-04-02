import React from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";

const MarkDownTestPage = () => {
  return (
    <ReactMarkdown className={s.markdown}># Hello, *World*!</ReactMarkdown>
  );
};

export default MarkDownTestPage;
