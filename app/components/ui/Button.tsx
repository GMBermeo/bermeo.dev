interface TButtonProps {
  text: string;
}

export const Button = ({ text }: TButtonProps) => {
  return (
    <button className="m-4 cursor-pointer rounded-md bg-dracula-background px-8 py-2 font-medium">
      {text}
    </button>
  );
};
