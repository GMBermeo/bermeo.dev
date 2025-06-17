// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { projects } from "@data";
import type { Project } from "@types";

export async function GET(): Promise<NextResponse<Project[]>> {
  return Promise.resolve(NextResponse.json(projects));
}
