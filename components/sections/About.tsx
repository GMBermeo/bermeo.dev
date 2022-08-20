import React from "react";
import { Title } from "../ui/Title";

export const About = () => {
  return (
    <>
      <Title title="Sobre" />
      <div className="p mb-16 text-sm font-medium leading-6 md:text-base">
        Formado em Análise e Desenvolvimento de Sistemas em 2011, fui
        traumatizado pelas aulas de Java na época e me refugiando no HTML e CSS.
        Em 2015, comecei a trabalhar em produtos do Banco do Brasil, e tendo um
        background em Design Gráfico, acabei sendo alocado na equipe de UX
        Design. Foi quando descobri a magia da simplicidade do Javascript, e
        comecei a estudar a fundo sobre desenvolvimento front-end e prototipação
        de alta fidelidade.
        <br />
        <br /> Quando em 2018, fui cedido à Advocacia-Geral da União como UX
        Designer e com isso, comecei a trabalhar em sistemas legados e
        ferramentas Low Code, tendo desenvolvido um aplicativo Mobile em
        Microsoft PowerApps.
        <br />
        Quando em 2022 fiz a transição total para front-end, criando novas
        interfaces em sistemas legados, participação no desenvolvimento de novos
        projetos e exporando as infinitas possibilidades de frameworks
        javascript.
        <br />
        <br />
        Gosto de aprender e explorar novas coisas e quando não estou trabalhando
        estou{" "}
        <a
          href="https://boardgamegeek.com/plays/bydate/user/gm_bermeo/subtype/boardgame"
          className="hover:decoration-3 decoration-primary underline  decoration-2"
        >
          jogando
        </a>{" "}
        jogos de tabuleiro ou assistindo filmes.
        <br /> <br /> No momento minhas tecnologias favoritas são
        <span className="text-balde-blue"> React.js </span> com
        <span className="text-balde-blue"> Typescript </span>,
        <span className="text-balde-blue"> Tailwind CSS </span> e
        <span className="text-balde-blue"> Next.js</span>. Que foram as
        tecnologias utilizadas para fazer este site.
      </div>
    </>
  );
};
