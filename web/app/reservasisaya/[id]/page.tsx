import { Metadata } from "next"
import ReservasiDetail from "@/components/reservasi-detail"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "Detail Reservasi",
}

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
            <Suspense fallback={<p>Tunggu bentar ya...</p>}>
                <ReservasiDetail reseservasiId={reservasiId} />
            </Suspense>
            
        </div>
        
    </div>
  )
}

export default reservasiDetailsaya
