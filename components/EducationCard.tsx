import React from "react";
import { TEducationProps } from "../types/TEducation";

export const EducationCard = ({
  title,
  institution,
  type,
  dateStart,
  dateEnd,
  hours,
}: TEducationProps) => {
  if (type && !hours)
    return (
      <>
        <li className="mb-6 flex gap-x-2 text-sm md:text-base">
          <div className="flex flex-col justify-between leading-6">
            <div>{dateEnd}</div>
            <div className="text-dracula-currentLine">{dateStart}</div>
          </div>
          <div className="flex-col">
            <div className="flex flex-col font-medium">
              <div className="text-base font-bold text-white md:text-lg">
                {title}
              </div>
              <div className="text-dracula-foreground">{type}</div>
              <div className="text-primary">{institution}</div>
            </div>
          </div>
        </li>
      </>
    );
  if (!type && hours)
    return (
      <>
        <li className="mb-3 flex justify-between text-sm sm:mb-0 md:text-base">
          <div className="flex w-full gap-x-2">
            <div className="leading-6">{dateEnd}</div>
            <div className="mr-2 flex w-full flex-col justify-between sm:flex-row">
              <div className="font-bold text-white">{title}</div>
              <div className="text-primary font-medium sm:leading-7">
                {institution}
              </div>
            </div>
          </div>
          <div className="font-bold leading-7">
            {hours}
            <span className="text-primary">h</span>
          </div>
        </li>
      </>
    );
  if (!type && !hours)
    return (
      <>
        <li className="mb-4 flex justify-between text-sm md:text-base">
          <div className="flex w-full gap-x-2">
            <div className="leading-6">{dateEnd}</div>
            <div className="flex w-full flex-col justify-between gap-x-4 sm:flex-row">
              <div className="text-base font-bold text-white">{title}</div>
              <div className="text-primary font-medium sm:leading-6">
                {institution}
              </div>
            </div>
          </div>
        </li>
      </>
    );
  else return null;
};
