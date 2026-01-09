import { NextResponse } from "next/server";
import Prisma from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";

// membuat endpoint untuk menerima notifikasi pembayaran dari Midtrans
export const POST = async (request: Request) => {
    const data: PaymentProps = await request.json();
    const reservationId = data.order_id;

    let responseData = null;

    // mengupdate status pembayaran berdasarkan notifikasi yang diterima
    const transactionStatus = data.transaction_status;
    const paymentType = data.payment_type || null;
    const fraudStatus = data.fraud_status;
    const statusCode = data.status_code;
    const grossAmount = data.gross_amount;
    const signatureKey = data.signature_key;
}