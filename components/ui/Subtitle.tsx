import React from "react";

interface TSubtitleProps {
  title: string;
}

export const Subtitle = ({ title }: TSubtitleProps) => {
  return (
    <h2
      id={title}
      className="relative z-40 my-4 text-2xl font-bold lowercase leading-none md:text-4xl"
    >
      {title}
      <span className="text-primary">.</span>
    </h2>
  );
};
