import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";
import { Title } from "../ui/Title";

export const About = () => {
  const { isEng } = useContext(LocaleContext);

  if (isEng()) {
    return (
      <div>
        <Title title={isEng() ? "About" : "Sobre"} />
        <article className="mb-16 space-y-6 text-justify text-sm font-medium leading-6 md:text-base">
          <p>
            Graduated in Systems Analysis and Development in 2011, I discovered
            right away in college a vocation for front-end and user experience
            in software engineering classes. In 2015, I started working on Banco
            do Brasil products, and having a background in Graphic Design, I
            ended up being allocated to the UX Design team. That&apos;s when I
            discovered the magic of Javascript&apos;s simplicity and started to
            study in-depth front-end development and high-fidelity prototyping.
          </p>
          <p>
            In 2018, I was assigned to the Attorney General&apos;s Office as a
            UX Designer. With that, I started working on legacy systems and Low
            Code tools, having developed a Mobile application in Microsoft
            PowerApps. In 2022, I transitioned to the front-end, creating new
            interfaces in legacy systems, participating in developing new
            projects, and exposing the infinite possibilities of javascript
            frameworks.
          </p>
          <p>
            I like to learn and explore new technologies, and when I&apos;m not
            working, I{" "}
            <a
              href="https://boardgamegeek.com/plays/bydate/user/gm_bermeo/subtype/boardgame"
              className="hover:decoration-3 decoration-primary underline  decoration-2"
            >
              play
            </a>{" "}
            board games and watch movies.
          </p>
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
          Formado em Análise e Desenvolvimento de Sistemas em 2011, descobri
          logo na faculdade uma vocação por front-end e experiência do usuário
          nas aulas de engenharia de software. Em 2015, comecei a trabalhar em
          produtos do Banco do Brasil, e tendo um background em Design Gráfico,
          acabei sendo alocado na equipe de UX Design. Foi quando descobri a
          magia da simplicidade do Javascript, e comecei a estudar a fundo sobre
          desenvolvimento front-end e prototipação de alta fidelidade.
          <br />
          Quando em 2018, fui cedido à Advocacia-Geral da União como UX Designer
          e com isso, comecei a trabalhar em sistemas legados e ferramentas Low
          Code, tendo desenvolvido um aplicativo Mobile em Microsoft PowerApps.
          <br />
          Quando em 2022 fiz a transição total para front-end, criando novas
          interfaces em sistemas legados, participação no desenvolvimento de
          novos projetos e exporando as infinitas possibilidades de frameworks
          javascript.
          <br />
          Gosto de aprender e explorar novas coisas e quando não estou
          trabalhando estou{" "}
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
        </article>
      </>
    );
  }
};
