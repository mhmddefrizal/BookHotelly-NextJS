import React from 'react'

const ReservasiDetail = ({reseservasiId} : {reseservasiId: string}) => {
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
                            #reservasi Id
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Tanggal buku</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            #Tanggal Buku
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Nama</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            Nama
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Email</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            Email
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
                            nomor
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Metode Pembayaran</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            Metode Pembayaran
                        </div>
                    </div>
                </li>
                <li className='py-2'>
                    <div className="flex items-center">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className='text-sm font-medium text-gray-800 truncate'>Status Pembayaran</p>
                        </div>
                        <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                            Status Pembayaran
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
                        <th className='px-6 py-3'>Kedatangan</th>
                        <th className='px-6 py-3'></th>
                        <th className='px-6 py-3'></th>
                        <th className='px-6 py-3'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ReservasiDetail