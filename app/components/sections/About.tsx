import ReactMarkdown from "react-markdown";
import { Title } from "@components";

export const About = () => {
  return (
    <div>
      <Title title={"About"} />
      <article className="mb-16 space-y-6 text-justify leading-6 md:text-base">
        <ReactMarkdown>
          A versatile and detail-oriented professional, I bring passion and
          expertise in front-end development and user experience to fast-paced
          environments. With a background in Systems Analysis and Development,
          Graphic Design, Music, and experience in various industries, I excel
          in **cross-functional collaboration and adaptability**. Skilled in
          **JavaScript frameworks**, high-fidelity prototyping, and cutting-edge
          technologies like **React**, **TypeScript**, **Tailwind CSS**, and
          **Next**. Committed to continuous improvement and exploring new tech,
          I blend **creativity with problem-solving** skills to deliver
          exceptional results. Outside work, I enjoy board games and movies.
        </ReactMarkdown>
        <p>
          At the moment, my favorite technologies are{" "}
          <span className="text-balde-blue"> React.js </span>,{" "}
          <span className="text-balde-blue"> MUI </span>,{" "}
          <span className="text-balde-blue"> Typescript </span>,{" "}
          <span className="text-balde-blue"> Tailwind CSS </span> and{" "}
          <span className="text-balde-blue"> Next.js</span>.
        </p>
      </article>
    </div>
  );
};
