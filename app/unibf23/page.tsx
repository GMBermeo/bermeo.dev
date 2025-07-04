"use server";
import type { JSX } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import s from "@styles/markdown.module.css";
import { loadMarkdown } from "@lib";

const tituloTese =
  "Motivo Condutor, Desenho de Som, Re-Sequenciamento Horizontal e Re-Orquestração Vertical: Introdução sobre Narrativa em Música";

export async function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title: "Introdução sobre Narrativa em Música",
    description: tituloTese + ". TCC Latu Sensu em Jogos Digitais da UNIBF.",
    applicationName: "Guilherme Yuri Bermêo Costa - " + tituloTese,
    abstract:
      "Este estudo tem como tema principal discutir a importância e a evolução do papel dos elementos narrativos na música e como tais elementos influenciaram os jogos digitais. Através de uma pesquisa variada que vai do estudo do motivo condutor na música como papel narrativo desde Scheherazade (1888) a obras de música popular contemporânea, passando por aplicação de técnicas de sound design na história do cinema e na obra Duna (2021), culminando no surgimento de ferramentas que possibilitaram re-sequenciamento e re-orquestração em tempo real em jogos digitais através de inputs do jogador e estados do jogo e avatares. Por fim, uma exploração final de jogos digitais contemporâneos que se utilizaram de todo esse conjunto de técnicas para uma melhor construção narrativa e/ou imersão do jogador, como The Legend of Zelda: Breath of the Wild (2017) e Journey (2012).",
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
  });
}

const CustomLink: Components["a"] = ({
  href,
  title,
  children,
}: Readonly<{ href?: string; title?: string; children?: React.ReactNode }>) => (
  <Link
    title={title ?? (typeof children === "string" ? children : undefined)}
    href={href ?? ""}
  >
    {children}
  </Link>
);

const CustomImage: Components["img"] = ({
  src,
  alt,
}: Readonly<{
  src?: string;
  alt?: string;
}>) => (
  <img src={src} alt={alt} title={alt} className="mx-auto" loading="lazy" />
);

export default async function ThesisPage(): Promise<JSX.Element> {
  const content = await loadMarkdown(
    "public/unibf23/article-introduction-to-narrative-in-music[br].md",
  );

  return (
    <article className="mx-auto max-w-5xl pb-4">
      <ReactMarkdown
        className={`${s.markdown} px-6 pt-0 text-sm  md:px-3 xl:px-0`}
        components={{
          a: CustomLink,
          img: CustomImage,
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
}
