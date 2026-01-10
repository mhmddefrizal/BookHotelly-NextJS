import { getReservations } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

// komponen daftar reservasi
const ReservationList = async () => {
    const reservation = await getReservations();
    if (!reservation) return <p>Tidak Ditemukan Reservasi</p>;
    return (
        // tabel kamar
        <div className='bg-white p-4 mt-5 shadow-sm'>
            <table className='w-full divide-y divide-gray-300'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Gambar Kamar</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Nama</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Kedatangan</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Kepergian</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Nama Kamar</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Harga</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Dibuat Sejak</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase'>Status</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                    {/* isi tabel */}
                    {reservation.map((reserve) => (
                        <tr key={room.id} className='hover:bg-gray-100'>
                            <td className='px-6 py-4'>
                                <div className="h-20 w-32 relative">
                                    <Image src={reserve.Room.image} fill sizes="20vw" alt=" room image" className="object-cover" />
                                </div>
                            </td>
                            {/* nama kamar */}
                            <td className='px-6 py-4'>{reserve.User.name}</td>
                            {/* harga kamar */}
                            <td className='px-6 py-4'>{formatCurrency(room.price)}</td>
                            {/* tanggal dibuat */}
                            <td className='px-6 py-4'>{formatDate(room.createdAt.toString())}</td>
                            {/* tombol aksi */}
                            <td className='px-6 py-4 text-right'>
                                <div className="flex items-center gap-1 justify-center">
                                    {/* tombol edit */}
                                    <EditButton id={room.id} />
                                    {/* tombol hapus */}
                                    <DeleteButton id={room.id} image={room.image} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReservationList