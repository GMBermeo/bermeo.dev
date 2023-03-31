import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import s from "../styles/markdown.module.css";

export const MarkDownTestPage: NextPage = () => {
  return (
    <ReactMarkdown className={s.markdown}># Hello, *World*!</ReactMarkdown>
  );
};

export default MarkDownTestPage;
