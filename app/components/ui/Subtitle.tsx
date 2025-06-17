import type { JSX } from "react";

interface SubtitleProps {
  title: string;
}

export const Subtitle = (props: Readonly<SubtitleProps>): JSX.Element => {
  return (
    <h2
      id={props.title}
      className="relative z-40 my-4 text-2xl font-bold lowercase leading-none md:text-4xl"
    >
      {props.title}
      <span className="text-primary">.</span>
    </h2>
  );
};
