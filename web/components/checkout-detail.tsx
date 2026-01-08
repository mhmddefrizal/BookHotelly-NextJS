import Image from 'next/image'
import { getReservationById } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { DifferenceInCalendarDays } from 'date-fns';


// import fungsi untuk mengambil data reservasi berdasarkan ID
const CheckoutDetail = async({reservationId}:{reservationId:string}) => {
    const reservation = await getReservationById(reservationId);
    // jika data reservasi tidak ditemukan, tampilkan pesan
    if (!reservation || !reservation.Payment) return <h1>Tidak Ditemukan Data</h1>

    // hitung durasi menginap
    const duration = DifferenceInCalendarDays(reservation.endDate, reservation.startDate);

  return (
    <div className='grid md:grid-cols-2 gap-5'>
        <div className="order-2">
            <div className="flex flex-col mb-3 items-start bg-white border border-gray-200 rounded-sm md:flex-row md:w-full">
                {/* menampilkan gambar kamar */}
                <div className="aspect-video relative">
                    <Image src={reservation.Room.image} width={500} height={300} alt={reservation.Room.name} fill className="object-cover w-full rounded-t-sm aspect-video md:rounded-t-none md:rounded-s -sm"/>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <h5 className='mb-1 text-4xl font-bold tracking-tight text-gray-600'>{reservation.Room.name}</h5>
                    <div className="flex items-center gap-1 text-2xl text-gray-700">
                        <div className="flex items-center justify-center gap-1">
                            <span className='text-2xl'>
                                {reservation.price}        
                            </span>
                            <span>/ malam</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* tombol bayar */}
        </div>
        <div className="border border-gray-300 px-3 py-5 rounded-md p-5 bg-slate-50">
            <table className='w-full'>
                <tbody>
                    {/* ID reservasi */}
                    <tr>
                        <td className='py-2'>ID Reservasi</td>
                        <td className='py-2 text-right truncate'>{reservation.id}</td>
                    </tr>
                    {/* nama */}
                    <tr>
                        <td className='py-2'>Nama</td>
                        <td className='py-2 text-right truncate'>{reservation.User.name}</td>
                    </tr>
                    {/* email */}
                    <tr>
                        <td className='py-2'>Email</td>
                        <td className='py-2 text-right truncate'>{reservation.User.email}</td>
                    </tr>
                    {/* nomor telepon */}
                    <tr>
                        <td className='py-2'>Nomor Telepon</td>
                        <td className='py-2 text-right truncate'>{reservation.User.phone}</td>
                    </tr>
                    {/* tanggal kedatangan */}
                    <tr>
                        <td className='py-2'>Kedatangan</td>
                        <td className='py-2 text-right truncate'>{formatDate(reservation.startDate.toISOString())}</td>
                    </tr>
                    {/* tanggal kepergian */}
                    <tr>
                        <td className='py-2'>Kepergian</td>
                        <td className='py-2 text-right truncate'>{formatDate(reservation.endDate.toISOString())}</td>
                    </tr>
                    <tr>
                        <td className='py-2'>Durasi</td>
                        <td className='py-2 text-right truncate'>
                            {/* menampilkan durasi menginap */}
                            <span>
                                {duration} {duration === 1 ? "malam" : "malam"}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CheckoutDetail