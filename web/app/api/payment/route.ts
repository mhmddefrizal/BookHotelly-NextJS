import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";
import { reservationProps } from "@/types/reservation";

// Create Snap API instance
const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});

// Handle POST request to create a payment transaction
export const POST = async (request: Request) => {
    const reservation: reservationProps = await request.json();

    // buat parameter untuk transaksi Midtrans
    const parameter = {
        transaction_details: {
            order_id: reservation.id,
            gross_amount: reservation.Payment?.amount || 0,
        },
        credit_card: {
            secure: true,
        },
        customer_details: {
            first_name: reservation.User.name,
            email: reservation.User.email,
            phone: reservation.User.phone,
        },
    };

    const token = await snap.createTransactionToken(parameter);
    return NextResponse.json({ token });