import type { JSX } from "react";
import Link from "next/link";

interface ReadMoreProps {
  label: string;
  url: string;
}

export const ReadMore = (props: Readonly<ReadMoreProps>): JSX.Element => {
  return (
    <Link
      href={props.url || ""}
      title={props.label}
      className="rounded px-4 py-1 text-sm lowercase text-dracula-currentLine hover:bg-primary hover:text-black"
    >
      {props.label}
    </Link>
  );
};
