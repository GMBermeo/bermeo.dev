/* eslint-disable @next/next/no-img-element */
export const ProjectCard = ({ title, coverImage, company, skills }: any) => {
  return (
    <figure className="flex h-full max-h-full w-5/6 flex-col justify-end pb-2">
      <img
        className="mb-2 w-full"
        src={coverImage}
        alt={`${title} made with ${skills.join(", ")}`}
        // alt={title.en : title.br}
      />

      <figcaption className="text-center text-sm font-medium sm:text-lg">
        {title}{" "}
        {company !== "Other" && (
          <span className="text-sm text-primary">@{company}</span>
        )}
      </figcaption>
      <div className="flex items-center justify-center gap-x-1 text-sm">
        {skills.map((skill: any, index: React.Key | null | undefined) => (
          <div
            className="my-2 rounded bg-slate-800 px-2 py-1 text-dracula-comment"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </figure>
  );
};
