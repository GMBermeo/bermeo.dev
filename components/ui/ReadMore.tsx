import Link from "next/link";
import React from "react";

export const ReadMore = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link href={url}>
      <a className="hover:bg-primary text-dracula-currentLine rounded px-4 py-1 text-sm lowercase hover:text-black">
        {label}
      </a>
    </Link>
  );
};
