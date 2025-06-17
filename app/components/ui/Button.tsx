import type { JSX } from "react";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: Readonly<ButtonProps>): JSX.Element => {
  return (
    <button
      className="m-4 cursor-pointer rounded-md bg-dracula-background px-8 py-2 font-medium"
      type="button"
    >
      {text}
    </button>
  );
};
