import React from "react";

interface TCodeSpanProps {
  type: string;
  name: string;
  value: string;
}

export const CodeSpan = ({ type, name, value }: TCodeSpanProps) => {
  return (
    <>
      <span className="text-dracula-purple font-code textsm font-bold">
        {type}{" "}
      </span>
      <span className="text-dracula-pink font-code text-sm font-bold">
        {name}
      </span>
      <span className="text-dracula-purple font-code text-sm font-bold">
        {" "}
        ={" "}
      </span>
      <span className="text-dracula-yellow font-code text-sm font-bold">
        {value}
      </span>
    </>
  );
};
const telephone = "tel:+55 (11) 9 9999-9999";
