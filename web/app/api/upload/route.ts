import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

// buat API route untuk meng-handle upload file
export const PUT = async (request: Request) => {
  const form = await request.formData();
  const file = form.get("file") as File;

  if (file.size === 0 || file.size === undefined) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }
  if (file.size > 4000000) {
    return NextResponse.json({ error: "File must be less than 4MB" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "File must be an image" }, { status: 400 });
  }
};
