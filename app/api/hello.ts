// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(): Promise<NextResponse<Data[]>> {
  return NextResponse.json([{ name: "Guilherme Bermêo" }]);
}
