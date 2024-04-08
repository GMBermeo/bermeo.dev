import React from "react";
import { ExperienceProps } from "@types";
import ReactMarkdown from "react-markdown";
import s from "@styles/Markdown.module.css";

export const WorkCard = ({
  title,
  company,
  companyShort,
  dateStart,
  dateEnd,
  description,
  linkTo,
}: ExperienceProps) => {
  return (
    <li className="mb-6 text-sm font-medium leading-6 md:text-base">
      <div className="flex items-center">
        <div className="mr-2 flex w-full justify-between text-base md:text-xl">
          <div className="decoration-primary font-bold leading-5 text-white underline decoration-2">
            {title}
          </div>
          <div className="text-bold cursor-help self-end leading-5">
            <span className="text-primary font-thin">@</span>
            <abbr title={company}>{companyShort}</abbr>
          </div>
        </div>
      </div>
      <div className="text-dracula-foreground ml-2 mt-2 text-justify text-sm leading-5 md:text-base ">
        {description.map((description) => (
          <ReactMarkdown className={s.markdown} key={description}>
            {description}
          </ReactMarkdown>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-dracula-currentLine mx-2 text-sm font-bold leading-7 md:text-base">
          {dateStart} - {dateEnd}
        </div>
        {linkTo && (
          <div>{/* <ReadMore label={"Some works ›"} url={linkTo} /> */}</div>
        )}
      </div>
    </li>
  );
};
