import { auth } from '@/auth';
import { Metadata } from 'next';
import MyReserveList from '@/components/my-reserve-list';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Reservasi Saya - BookHotelly',
};

// Update Page Reservasi Saya
const HalamanReservasiSaya = async () => {
  // mengambil sesi autentikasi pengguna
  const session = await auth();
  if (!session || !session.user) redirect('/masuk');
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl text-gray-800 mt-2">Woyy, {session.user.name}</h3>
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