import React from "react";
import { CodeSpan } from "./ui/CodeSpan";

export const Hero = () => {
  return (
    <div className="bg-dracula-background py-6">
      <div className="py-6 text-center text-6xl lowercase">
        Guilherme Bermêo{" "}
        <span className="text-dracula-comment text-xl">
          {" "}
          front-end developer
        </span>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
        <div className="col-span-1 text-center">
          <CodeSpan type="let" name="telefone" value="+55 (61) 99634-2237" />
        </div>
        <div className="col-span-1 text-center">
          <CodeSpan
            type="const"
            name="e-mail"
            value="guilherme.bermeo@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
const telephone = "tel:+55 (11) 9 9999-9999";
