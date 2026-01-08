import CheckoutDetail from '@/components/checkout-detail'

// halaman checkout
const CheckoutPage = async ({params}: {params: Promise<{id: string}>}) => {
    // mengambil ID reservasi dari parameter URL
    const reservationId = (await params).id;
  return (
    // tampilkan detail checkout
    <div className='max-w-screen-xl px-4 mx-auto py-20 mt-12'>
        <h1>Checkout</h1>
        <CheckoutDetail reservationId={reservationId} />
    </div>
  )
}

export default CheckoutPage