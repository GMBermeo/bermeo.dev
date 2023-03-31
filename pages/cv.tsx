import { NextPage, GetServerSideProps } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import s from "../styles/markdown.module.css";

interface MarkDownCurriculumPageProps {
  markdownContent: string;
}

export const MarkDownCurriculumPage: NextPage<MarkDownCurriculumPageProps> = ({
  markdownContent,
}) => {
  return (
    <div className="mx-auto max-w-3xl">
      <ReactMarkdown className={s.markdown}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkDownCurriculumPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const url =
    locale === "br"
      ? "https://bermeo.dev/cv/GuilhermeBermeo-br.md"
      : "https://bermeo.dev/cv/GuilhermeBermeo-en.md";

  try {
    const response = await fetch(url);
    const markdownContent = await response.text();

    return {
      props: {
        markdownContent,
      },
    };
  } catch (error) {
    console.error("Error fetching markdown:", error);

    // Return an empty string in case of an error to avoid breaking the component
    return {
      props: {
        markdownContent: "",
      },
    };
  }
};
