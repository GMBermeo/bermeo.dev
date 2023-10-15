"use client";
import { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Title } from "@components";
import { LocaleContext } from "@contexts/LocaleContext";
import s from "@styles/markdown.module.css";

export const About = () => {
  const { isEng } = useContext(LocaleContext);

  if (isEng()) {
    return (
      <div>
        <Title title={isEng() ? "About" : "Sobre"} />
        <article className="mb-16 space-y-6 text-justify leading-6 md:text-base">
          <ReactMarkdown>
            A versatile and detail-oriented professional, I bring passion and
            expertise in front-end development and user experience to fast-paced
            environments. With a background in Systems Analysis and Development,
            Graphic Design, Music, and experience in various industries, I excel
            in **cross-functional collaboration and adaptability**. Skilled in
            **JavaScript frameworks**, high-fidelity prototyping, and
            cutting-edge technologies like **React**, **TypeScript**, **Tailwind
            CSS**, and **Next**. Committed to continuous improvement and
            exploring new tech, I blend **creativity with problem-solving**
            skills to deliver exceptional results. Outside work, I enjoy board
            games and movies.
          </ReactMarkdown>
          <p>
            At the moment, my favorite technologies are
            <span className="text-balde-blue"> React.js </span>,
            <span className="text-balde-blue"> Typescript </span>,
            <span className="text-balde-blue"> Tailwind CSS </span> and
            <span className="text-balde-blue"> Next.js</span>. The tech stack
            I&apos;ve used to build this site.
          </p>
        </article>
      </div>
    );
  } else {
    return (
      <>
        <Title title={isEng() ? "About" : "Sobre"} />
        <article className="p customContainer mb-16 space-y-6 text-sm font-medium leading-6 md:text-base">
          <ReactMarkdown className={s.markdown}>
            Um profissional versátil e detalhista, eu trago paixão e expertise
            em desenvolvimento front-end e experiência do usuário para ambientes
            dinâmicos. Com formação em Análise e Desenvolvimento de Sistemas,
            Design Gráfico, Música e experiência em diversos setores, destaco-me
            em **colaboração multifuncional e adaptabilidade**. Habilidades em
            **frameworks JavaScript**, prototipagem de alta fidelidade e
            tecnologias de ponta como **React**, **TypeScript**, **Tailwind
            CSS** e **Next**. Comprometido com a melhoria contínua e exploração
            de novas tecnologias, combino **criatividade e habilidades de
            resolução de problemas** para entregar resultados excepcionais. Fora
            do trabalho, gosto de jogos de tabuleiro e filmes.
          </ReactMarkdown>
          <br /> <br /> No momento minhas tecnologias favoritas são
          <span className="text-balde-blue"> React.js </span> com
          <span className="text-balde-blue"> Typescript </span>,
          <span className="text-balde-blue"> Tailwind CSS </span> e
          <span className="text-balde-blue"> Next.js</span>. Que foram as
          tecnologias utilizadas para fazer este site.
        </article>
      </>
    );
  }
};
