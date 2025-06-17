// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { experiences } from "@data";
import type { Experience } from "@types";

export async function GET(): Promise<NextResponse<Experience[]>> {
  return Promise.resolve(NextResponse.json(experiences));
}
