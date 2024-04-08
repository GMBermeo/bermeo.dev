interface TTitleProps {
  title: string;
}

export const Title = ({ title }: TTitleProps) => {
  return (
    <h2
      id={title}
      className="relative z-40 my-4 text-3xl font-bold lowercase leading-none md:text-5xl"
    >
      {title}
      <span className="text-primary">.</span>
    </h2>
  );
};
