import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";
import crypto from "crypto";

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

    // validasi signature key
    const hash = crypto.createHash('sha512').update(
        `${reservationId}${statusCode}${grossAmount}${process.env.MIDTRANS_SERVER_KEY}`
    ).digest('hex');

    // berikan respon sesuai status pembayaran
    // jika signature key tidak valid, kembalikan error

    if (signatureKey !== hash) {
        return NextResponse.json({ error: "Kode signature tidak valid" }, { status: 400 });
    }

    // proses update status pembayaran berdasarkan status transaksi
    if (transactionStatus === 'capture') {
        if (fraudStatus === 'accept') {
            const transaction = await prisma.payment.update({
                data: {
                    method: paymentType,
                    status: 'paid',
                },
                where: { reservationId }
            });
            responseData = transaction;
        }
    } else if (transactionStatus === 'settlement') {
        const transaction = await prisma.payment.update({
            data: {
                method: paymentType,
                status: 'paid',
            },
            where: { reservationId }
        });
        responseData = transaction;
    } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
        const transaction = await prisma.payment.update({
            data: {
                method: paymentType,
                status: 'failed',
            },
            where: { reservationId }
        });
        responseData = transaction;
    } else if (transactionStatus === 'pending') {
        const transaction = await prisma.payment.update({
            data: {
                method: paymentType,
                status: 'pending',
            },
            where: { reservationId }
        });
        responseData = transaction;
    }
    return NextResponse.json({responseData}, { status: 200 });
};