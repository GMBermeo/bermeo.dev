import type { JSX } from "react";
import ReactMarkdown from "react-markdown";
import s from "@styles/markdown.module.css";

export default function MarkDownTestPage(): JSX.Element {
  return (
    <ReactMarkdown className={s.markdown}># Hello, *World*!</ReactMarkdown>
  );
}
