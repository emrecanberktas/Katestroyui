import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  context: { params: Promise<{ component: string }> }
) {
  const { component } = await context.params;
  const filePath = path.join(process.cwd(), "public", "r", `${component}.json`);

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
