// Next.js API route support: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextResponse } from "next/server";
import { education } from "@data";

export async function GET() {
  return NextResponse.json(education);
}
