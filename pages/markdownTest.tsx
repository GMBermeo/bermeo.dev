import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";

export const MarkDownTestPage: NextPage = () => {
  return <ReactMarkdown># Hello, *World*!</ReactMarkdown>;
};

export default MarkDownTestPage;
