import React from 'react'

const TabelKamar = () => {
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
                <tr className= 'hover:bg-gray-100'>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4 text-right'></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TabelKamar