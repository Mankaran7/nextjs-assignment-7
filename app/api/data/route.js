import { NextResponse } from "next/server";

export async function GET() {
  console.log("API Route Called"); 
  return NextResponse.json({ message: "Hello, Next.js!" });
}
