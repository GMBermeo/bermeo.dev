// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { loadEducation } from "lib/loadEducation";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | object>
) {
  const { locale } = req.query;
  if (locale !== "br" && locale !== "en") {
    res.status(404).send("Parameter not found.");
  } else {
    res.status(200).json(loadEducation(locale));
  }
}
