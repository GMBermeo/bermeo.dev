import type { JSX } from "react";

interface TitleProps {
  title: string;
}

export const Title = (props: Readonly<TitleProps>): JSX.Element => {
  return (
    <h2
      id={props.title}
      className="relative z-40 my-4 text-3xl font-bold lowercase leading-none md:text-5xl"
    >
      {props.title}
      <span className="text-primary">.</span>
    </h2>
  );
};
