'use client';

import { useTransition } from 'react';
import { reservationProps } from '@/types/reservation';

// menambahkan tipe global untuk window.snap
declare global {
    interface Window {
        snap: {
            pay: (token: string) => void;
        };
    }
}

// tombol pembayaran
const PaymentButton = ({
    reservation,
}: {
    reservation: reservationProps;
}) => {
    // handle pembayaran
    const [isPending, startTransition] = useTransition();
    const handlePayment = async () => {
        // memulai proses pembayaran
        startTransition(async () => {
            try {
                const response = await fetch('/api/payment', {
                    method: 'POST',
                    body : JSON.stringify(reservation),
                });
                const { token } = await response.json();
                if(token) {
                    // redirect ke halaman pembayaran Midtrans
                    window.snap.pay(token);
                }
            } catch (error) {
                console.error('gagal membayar', error);
            }
        });
    }

  return (
    <button onClick={handlePayment} className="px-10 py-4 mt-2 text-center font-semibold bg-blue-600 text-white w-full rounded-sm hover:bg-blue-700 cursor-pointer">
        Bayar Sekarang
    </button>
  )
}

export default PaymentButton