import { getReservationById } from "@/lib/data"
import { formatCurrency, formatDate } from "@/lib/utils";
import {differenceInCalendarDays} from "date-fns";
import { email } from "zod";

const ReservasiDetail = async ({reseservasiId} : {reseservasiId: string}) => {

    const reservasi = await getReservationById(reseservasiId);
    if (!reservasi) return <h1>Tidak Ditemukan Data</h1>;




  return (
    <div className='w-full p-4 bg-white border border-gray-300 rounded-sm shadow'>
        <div className='grid md:grid-cols-2 md:gap-5'>
            <ul>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Reservasi ID</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            #{reservasi.id}
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Tanggal buku</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            {formatDate(reservasi.createdAt.toISOString())}
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Nama</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            {reservasi.User.name}
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Email</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            {reservasi.User.email}
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Nomor Telepone</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            {reservasi.User.phone}
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Metode Pembayaran</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900 capitalize'>
                            {reservasi.Payment?.method ? reservasi.Payment.method.replace("_", " "): null}
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Status Pembayaran</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            {reservasi.Payment?.status}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        {/* table */}
        <div className="relative overflow-x-auto mt-3 py-6">
            <table className='w-full text-sm text-left text-gray-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                    <tr>
                        <th className='px-6 py-3'>Kamar</th>
                        <th className='px-6 py-3 min-w-60 md:min-w-0'>Kedatangan</th>
                        <th className='px-6 py-3'>Keberangkatan</th>
                        <th className='px-6 py-3'>Durasi</th>
                        <th className='px-6 py-3 text-right'>Sub Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td className='px-6 py-4 '>
                            <div className="flex flex-col">
                                <span className='font-medium text-gray-800 whitespace-nowrap'>{reservasi.Room.name}</span>
                                <span>Harga : {reservasi.Room.price}</span>
                            </div>
                        </td>
                        <td className='px-6 py-4 '>{formatDate(reservasi.startDate.toISOString())}</td>
                        <td className='px-6 py-4 '>{formatDate(reservasi.EndDate.toISOString())}</td>
                        <td className='px-6 py-4 '>{differenceInCalendarDays(reservasi.endDate, reservasi.startDate)}Malam</td>
                        <td className='px-6 py-4 text-right'>999999</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className='px-6 py-3 font-bold' colSpan={2}>Total</td>
                        <td className='px-6 py-3 font-bold' text-right colSpan={3}>999999</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default ReservasiDetail