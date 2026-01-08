import Image from 'next/image'
import React from 'react'

// import fungsi untuk mengambil data reservasi berdasarkan ID
const CheckoutDetail = async({reservationId}:{reservationId:string}) => {
    const reservation = await getReservationById(reservationId);
    // jika data reservasi tidak ditemukan, tampilkan pesan
    if (!reservation || !reservation.Payment) return <h1>Tidak Ditemukan Data</h1>
  return (
    <div className='grid md:grid-cols-2 gap-5'>
        <div className="order-2">
            <div className="flex flex-col mb-3 items-start bg-white border border-gray-200 rounded-sm md:flex-row md:w-full">
                {/* menampilkan gambar kamar */}
                <div className="aspect-video relative">
                    <Image src={reservation.Room.image} width={500} height={300} alt={reservation.Room.name} fill className="object-cover w-full rounded-t-sm aspect-video md:rounded-t-none md:rounded-s -sm"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutDetail