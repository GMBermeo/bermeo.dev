import Link from "next/link";

export const ReadMore = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link
      href={url || ""}
      title={label}
      className="rounded px-4 py-1 text-sm lowercase text-dracula-currentLine hover:bg-primary hover:text-black"
    >
      {label}
    </Link>
  );
};
