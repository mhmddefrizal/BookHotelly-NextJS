import MyReserveList from '@/components/my-reserve-list'

// Update Page Reservasi Saya
const HalamanReservasiSaya = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl text-gray-800 mt-2">Woyy,</h3>
            <p className="mt-1 font-medium mb-4">
              Berikut adalah riwayat pemesanan Anda :
            </p>
          </div>
        </div>

        <div className="rounded-sm">
          <MyReserveList />
        </div>
      </div>
    </div>
  )
}

export default HalamanReservasiSaya