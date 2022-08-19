import React from "react";

interface TCodeSpanProps {
  type: string;
  name: string;
  value: string;
}

export const CodeSpan = ({ type, name, value }: TCodeSpanProps) => {
  return (
    <>
      <span className="font-code textsm font-bold text-dracula-purple">
        {type}{" "}
      </span>
      <span className="font-code text-sm font-bold text-dracula-pink">
        {name}
      </span>
      <span className="font-code text-sm font-bold text-dracula-purple">
        {" "}
        ={" "}
      </span>
      <span className="font-code text-sm font-bold text-dracula-yellow">
        &quot;{value}&quot;
      </span>
    </>
  );
};
