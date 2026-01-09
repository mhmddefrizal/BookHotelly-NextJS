import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

// Create Snap API instance
const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});

// Handle POST request to create a payment transaction
export const POST = async (request: Request) => {
    const reservation = await request.json();
}