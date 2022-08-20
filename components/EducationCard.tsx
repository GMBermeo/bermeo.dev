import React from "react";
import { TEducation } from "./sections/Education";

export const EducationCard = ({
  title,
  company,
  type,
  dateStart,
  dateEnd,
}: TEducation) => {
  if (type === "Pós-graduação Lato Sensu" || type === "Ensino Superior")
    return (
      <>
        <li className="mb-4 flex flex-col gap-x-2">
          <div className="text-base font-bold leading-5 text-white ">
            {title}
          </div>
          <div className="ml-1 flex gap-x-2 text-sm">
            <div className="text-dracula-currentLine flex flex-col justify-between font-medium">
              <div className="text-primary">{dateEnd}</div>
              <div>{dateStart}</div>
            </div>
            <div className="flex-col font-medium">
              <div className="text-primary">{type}</div>
              <div className="text-dracula-currentLine">{company}</div>
            </div>
          </div>
        </li>
      </>
    );
  if (type === "Cursos")
    return (
      <>
        <div className="flex">
          <div className="flex flex-col justify-center">
            <div>{dateEnd}</div>
            <div>{dateStart}</div>
          </div>
          <div className="flex-col">
            <div>{title}</div>
            <div>{company}</div>
          </div>
        </div>
      </>
    );
  if (type === "Certificado")
    return (
      <div>
        <div className="flex">
          <div className="flex flex-col justify-center">
            <div>{dateStart}</div>
          </div>
          <div className="flex-col">
            <div>{title}</div>
            <div>{company}</div>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col justify-center">
          <div>{dateEnd}</div>
          <div>{dateStart}</div>
        </div>
        <div className="flex-col">
          <div>{title}</div>
          <div>{company}</div>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import { TEducation } from "./sections/Education";
//
// export const EducationCard = ({
//   title,
//   company,
//   type,
//   dateStart,
//   dateEnd,
// }: TEducation) => {
//   if (type === "Pós-graduação Lato Sensu" || type === "Ensino Superior")
//     return (
//       <>
//         <div className="flex">
//           <div className="flex flex-col justify-center">
//             <div>{dateEnd}</div>
//             <div>{dateStart}</div>
//           </div>
//           <div className="flex-col">
//             <div>{type}</div>
//             <div>{title}</div>
//             <div>{company}</div>
//           </div>
//         </div>
//       </>
//     );
//   if (type === "Cursos")
//     return (
//       <>
//         <div className="flex">
//           <div

{
  /* <div
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
              {company}
            </div>
          </div>
        </div>

        <div className="text-dracula-foreground my-2 ml-2 text-sm leading-5 md:text-base"></div>
        <div className="text-dracula-currentLine mx-2 text-sm font-bold  leading-7 md:text-base">
          {dateEnd} - {dateStart}
        </div>
      </div> */
}
