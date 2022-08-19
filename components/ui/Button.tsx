import React from "react";

interface TButtonProps {
  text: string;
}

export const Button = ({ text }: TButtonProps) => {
  return (
    <button className="m-4 cursor-pointer rounded-md bg-dracula-background py-2 px-8 font-medium">
      {text}
    </button>
  );
};
