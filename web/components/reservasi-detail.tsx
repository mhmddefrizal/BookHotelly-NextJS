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
            </ul>
        </div>
    </div>
  )
}

export default ReservasiDetail