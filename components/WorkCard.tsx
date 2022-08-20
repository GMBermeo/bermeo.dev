import React from "react";

interface TWorkCardProps {
  title: string;
  company: string;
  companyShort: string;
  dateStart: string;
  dateEnd: string;
  description: string[];
}

export const WorkCard = ({
  title,
  company,
  companyShort,
  dateStart,
  dateEnd,
  description,
}: TWorkCardProps) => {
  return (
    <li
      className="mb-6 text-sm font-medium leading-6 md:text-base"
      key={dateStart}
    >
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

      <div className="text-dracula-foreground mt-2 ml-2 text-sm leading-5 md:text-base">
        {description.map((description) => (
          <div key={description}>{description}</div>
        ))}
      </div>
      <div className="text-dracula-currentLine mx-2 text-sm font-bold leading-7 md:text-base">
        {dateEnd} - {dateStart}
      </div>
    </li>
  );
};
