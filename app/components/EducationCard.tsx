import type { JSX } from "react";
import Link from "next/link";
import type { EducationProps } from "@types";

export const EducationCard = (props: Readonly<EducationProps>): JSX.Element => {
  if (props.type && !props.hours)
    return (
      <li className="mb-6 flex gap-x-2 text-sm md:text-base">
        <div className="flex flex-col justify-between leading-6">
          <div>{props.dateEnd}</div>
          <div className="text-dracula-currentLine">{props.dateStart}</div>
        </div>
        <div className="flex-col">
          <div className="flex flex-col font-medium">
            <div className="text-base font-bold text-white md:text-lg">
              {props.title}
            </div>
            <div className="text-dracula-foreground">
              {props.link ? (
                <Link
                  href={props.link}
                  title={`${props.type} ${props.thesis ?? ""}`}
                >{`${props.type} ${props.thesis ?? ""}`}</Link>
              ) : (
                `${props.type} ${props.thesis ?? ""}`
              )}
            </div>
            <div className="text-primary">{props.institution}</div>
          </div>
        </div>
      </li>
    );
  if (!props.type && props.hours)
    return (
      <li className="mb-3 flex justify-between text-sm sm:mb-0 md:text-base">
        <div className="flex w-full gap-x-2">
          <div className="leading-6">{props.dateEnd}</div>
          <div className="mr-2 flex w-full flex-col justify-between sm:flex-row">
            <div className="font-bold text-white">{props.title}</div>
            <div className="font-medium text-primary sm:leading-7">
              {props.institution}
            </div>
          </div>
        </div>
        <div className="font-bold leading-7">
          {props.hours}
          <span className="text-primary">h</span>
        </div>
      </li>
    );
  if (!props.type && !props.hours)
    return (
      <li className="mb-4 flex justify-between text-sm md:text-base">
        <div className="flex w-full gap-x-2">
          <div className="leading-6">{props.dateEnd}</div>
          <div className="flex w-full flex-col justify-between gap-x-4 sm:flex-row">
            <div className="text-base font-bold text-white">{props.title}</div>
            <div className="text-right font-medium text-primary sm:leading-6">
              {props.institution}
            </div>
          </div>
        </div>
      </li>
    );
  else return <></>;
};
