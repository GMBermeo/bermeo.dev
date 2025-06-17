// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

interface HelloData {
  name: string;
}

export async function GET(): Promise<NextResponse<HelloData>> {
  return Promise.resolve(NextResponse.json({ name: "It's alive!" }));
}
