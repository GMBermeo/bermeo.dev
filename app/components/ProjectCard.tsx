import Image from "next/image";

export const ProjectCard = ({
  title,
  description,
  coverImage,
  company,
  skills,
}: any) => {
  return (
    <figure className="flex h-full max-h-full w-5/6 flex-col justify-end pb-2">
      <Image
        className="mb-2 w-full"
        src={coverImage}
        alt={`${title} made with ${skills.join(", ")}`}
        // alt={isEng() ? title.en : title.br}
      />

      <figcaption className="text-center text-sm font-medium sm:text-lg">
        <>
          {title}{" "}
          {company !== "Other" && (
            <span className="text-primary text-sm">@{company}</span>
          )}
        </>
      </figcaption>
      <div className="flex items-center justify-center gap-x-1 text-sm">
        {skills.map((skill: any, index: React.Key | null | undefined) => (
          <div
            className="text-dracula-comment my-2 rounded bg-slate-800 px-2 py-1"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </figure>
  );
};
