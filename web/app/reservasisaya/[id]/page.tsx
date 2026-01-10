import React from 'react'

const reservasiDetailsaya
 = async ({
    params
 } : {
    params: Promise<{ id: string }>
 }) => {

    const reservasiId = (await params).id
  return (
    <div className='min-h-screen bg-slate-100'>
        <div className='max-w-screen-lg mx-auto mt-10 py-20 px-4'>
            {/* reservation detail */} 
        </div>
        
    </div>
  )
}

export default reservasiDetailsaya
