import { Project } from "@types";

export const ProjectCard = (props: Project) => {
  return (
    <figure className="flex h-full max-h-full w-5/6 flex-col justify-end pb-2">
      <img
        className="mb-2 w-full"
        src={props.coverImage}
        alt={`${props.title} made with ${props.skills.join(", ")}`}
        title={props.title}
        loading="lazy"
        width={697}
        height={368}
        // alt={title.en : title.br}
      />

      <figcaption className="text-center text-sm font-medium sm:text-lg">
        {props.title}{" "}
        {props.company !== "Other" && (
          <span className="text-sm text-primary">@{props.company}</span>
        )}
      </figcaption>
      <div className="flex items-center justify-center gap-x-1 text-sm">
        {props.skills.map((skill: string, index: number) => (
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
