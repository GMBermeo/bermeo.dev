import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>
          Guilherme Yuri Bermêo Costa - Senior Front-end Developer | Curriculum
          Vitae
        </title>
        {/* <meta
          name="description"
          content=""
          key="desc"
        /> */}
      </Head>
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

export async function generateMetadata({}) {
  return {
    title: "Guilherme Bermêo",
    description: "Guilherme Bermêo's Curriculum Vitae",
  };
}
