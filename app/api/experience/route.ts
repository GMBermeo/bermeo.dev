// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { experiences } from "@data";

export async function GET() {
  return NextResponse.json(experiences);
}
