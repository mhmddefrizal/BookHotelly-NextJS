import { getRooms } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

const TabelKamar = async () => {
    const rooms = await getRooms();
    if (!rooms?.length) return <p>Tidak Ditemukan kamar</p>;
    return (
        // tabel kamar
        <div className='bg-white p-4 mt-5 shadow-sm'>
            <table className='w-full divide-y divide-gray-300'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Gambar Kamar</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Nama Kamar</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Harga</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left'>Dibuat Sejak</th>
                        <th className='px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase'>Ket.</th>
                    </tr>
                </thead>
                <tbody className='divide-y Idivide-gray-200'>
                    {/* isi tabel */}
                    {rooms.map((room) => (
                        <tr key={room.id} className='hover:bg-gray-100'>
                            <td className='px-6 py-4'>
                                <div className="h-20 w-32 relative">
                                    <Image src={room.image} fill sizes="20vw" alt=" room image" className="object-cover" />
                                </div>
                            </td>
                            <td className='px-6 py-4'>{room.name}</td>
                            <td className='px-6 py-4'>{formatCurrency(room.price)}</td>
                            <td className='px-6 py-4'>{formatDate(room.createdAt.toString())}</td>
                            <td className='px-6 py-4 text-right'></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelKamar