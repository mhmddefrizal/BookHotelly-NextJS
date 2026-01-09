import { NextResponse } from "next/server";
import Prisma from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";

// membuat endpoint untuk menerima notifikasi pembayaran dari Midtrans
export const POST = async (request: Request) => {
    const data: PaymentProps = await request.json();
    const reservationId = data.order_id;

    let responseData = null;
}