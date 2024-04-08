/* eslint-disable @next/next/no-img-element */
"use server";
import React from "react";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import s from "@styles/markdown.module.css";
import { loadMarkdown } from "@lib";
import Link from "next/link";

const tituloTese =
  "Motivo Condutor, Desenho de Som, Re-Sequenciamento Horizontal e Re-Orquestração Vertical: Introdução sobre Narrativa em Música";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Introdução sobre Narrativa em Música",
    description:
      tituloTese +
      ". Trabalho de Conclusão do Curso, apresentado para obtenção de certificado no Curso de Especialização - Latu Sensu em Desenvolvimento de Jogos Digitais da União Brasileira de Faculdades.",
    applicationName: "Guilherme Yuri Bermêo Costa - " + tituloTese,
    abstract:
      "The main theme of this study is to discuss the importance and evolution of narrative elements in music and how these elements have influenced digital games. Through varied research that ranges from the study of the leitmotif in music as a narrative role since Scheherazade (1888) to contemporary popular music works, including the application of sound design techniques in the history of cinema and in the film Dune (2021), culminating in the emergence of tools that have enabled real-time re-sequencing and re-orchestration in digital games through player inputs, game states, and avatars. Finally, a final exploration of contemporary digital games that have used all these techniques for a better narrative construction and/or player immersion, such as The Legend of Zelda: Breath of the Wild (2017) and Journey (2012).",
    authors: {
      url: "https://www.bermeo.dev",
      name: "Guilherme Yuri Bermêo Costa",
    },
    alternates: {
      canonical: "https://www.bermeo.dev/unibf23",
      languages: { "pt-BR": "https://www.bermeo.dev/unibf23" },
    },
    creator: "Guilherme Yuri Bermêo Costa",
    publisher: "União Brasileira de Faculdades (UniBF)",
    category: "Academic Publication",
    assets: [
      "/unibf23/article-introduction-to-narrative-in-music[br].md",
      "/unibf23/img/fig1.jpg",
      "/unibf23/img/fig2.jpg",
      "/unibf23/img/fig3.jpg",
      "/unibf23/img/fig4.jpg",
      "/unibf23/img/fig5.jpg",
      "/unibf23/img/fig6.jpg",
      "/unibf23/img/fig7.jpg",
      "/unibf23/img/fig8.jpg",
      "/unibf23/img/fig9.jpg",
    ],
    keywords: [
      tituloTese,
      "Narrative",
      "Music",
      "Digital Games",
      "Sound Design",
      "Leitmotif",
      "Scheherazade",
      "Nikolai Rimsky-Korsakov",
      "Cinema",
      "Hans Zimmer",
      "Dune",
      "The Legend of Zelda: Breath of the Wild",
      "Journey",
      "Vertical Re-orchestration",
      "Horizontal Re-sequencing",
      "Soundtrack",
      "Motivo Condutor",
      "Re-orquestração Vertical",
      "Re-sequenciamento Horizontal",
      "Narrativa",
      "Trilha Sonora",
      "Fresno",
      "A Sinfonia de Tudo que Há",
      "UniBF",
      "Pós-Graduação",
      "Latu Sensu",
      "Bermeo",
      "Guilherme Bermêo",
      "Carlos Hoegen",
    ],
    bookmarks: [
      "/unibf23#1-introdu%C3%A7%C3%A3o",
      "/unibf23#2-desenvolvimento",
      "/unibf23#21-narrativa-em-m%C3%BAsica",
      "/unibf23#22-trilha-sonora-em-cinema",
      "/unibf23#23-m%C3%BAsica-adaptativa-em-jogos-digitais",
      "/unibf23#3-revis%C3%A3o-bibliogr%C3%A1fica",
      "/unibf23#4-metodologia",
      "/unibf23#5-an%C3%A1lise-dos-resultados",
      "/unibf23#6-considera%C3%A7%C3%B5es-finais",
      "/unibf23#7-refer%C3%AAncias-bibliogr%C3%A1ficas",
    ],
  };
}

const ThesisPage = async () => {
  const content = await loadMarkdown(
    "public/unibf23/article-introduction-to-narrative-in-music[br].md"
  );

  return (
    <article className="mx-auto max-w-5xl pb-4">
      <ReactMarkdown
        className={`${s.markdown} px-6 pt-0 text-sm  md:px-3 xl:px-0`}
        components={{
          a: ({ href, title, children }) => (
            <Link title={title ?? children?.toString()} href={href ?? ""}>
              {children}
            </Link>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} title={alt} className="mx-auto" />
          ),
        }}
        remarkPlugins={[remarkGfm]}
        remarkRehypeOptions={{
          footnoteLabel: "Notas de rodapé",
          footnoteBackLabel: "Voltar",
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default ThesisPage;
