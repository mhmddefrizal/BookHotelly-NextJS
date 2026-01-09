import { Metadata } from 'next';
import { Suspense } from 'react';
import CheckoutDetail from '@/components/checkout-detail';
import Script from 'next/script';

// metadata halaman checkout
export const metadata: Metadata = {
    title: 'Checkout',
}

// halaman checkout
const CheckoutPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    // mengambil ID reservasi dari parameter URL
    const reservationId = (await params).id;
    return (
        // tampilkan detail checkout
        <div className='max-w-screen-xl px-4 mx-auto py-20 mt-12'>
            <h1 className='text-2xl font-bold text-gray-800 mb-8'>Checkout</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <CheckoutDetail reservationId={reservationId} />
            </Suspense>
            {/* menyisipkan script Midtrans Snap.js */}
            <Script
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                strategy="lazyOnload"
            />
        </div>
    )
}

export default CheckoutPage