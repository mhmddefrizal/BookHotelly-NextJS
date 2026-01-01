import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

// buat API route untuk meng-handle upload file
export const PUT = async (request: Request) => {
  const form = await request.formData();
};
