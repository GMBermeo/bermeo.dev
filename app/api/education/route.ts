// Next.js API route support: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextResponse } from "next/server";
import { education, type DataEducation } from "@data";

export async function GET(): Promise<NextResponse<DataEducation>> {
  return Promise.resolve(NextResponse.json(education));
}
