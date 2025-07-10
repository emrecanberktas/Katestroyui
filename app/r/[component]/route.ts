import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { component: string } }
) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "r",
    `${params.component}.json`
  );

  try {
    const file = await fs.readFile(filePath, "utf-8");
    return new NextResponse(file, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Not Found", { status: 404 });
  }
}
