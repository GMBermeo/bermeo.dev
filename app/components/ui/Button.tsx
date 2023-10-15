"use client";

interface TButtonProps {
  text: string;
}

export const Button = ({ text }: TButtonProps) => {
  return (
    <button className="bg-dracula-background m-4 cursor-pointer rounded-md py-2 px-8 font-medium">
      {text}
    </button>
  );
};
