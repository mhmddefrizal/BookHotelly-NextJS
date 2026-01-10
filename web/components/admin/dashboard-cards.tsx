import { getRevenueAndReserve, getTotalCustomers } from '@/lib/data';
import {LuChartArea, LuShoppingCart, LuUser} from 'react-icons/lu';
import { formatCurrency } from '@/lib/utils';
import { notFound } from 'next/navigation';

// buat card dashboard admin
const DashboardCards = async () => {
    // ambil data pendapatan dan reservasi
    const [data, customers] =await Promise.all([
        getRevenueAndReserve(),
        getTotalCustomers(),
    ]);

    // jika data tidak ada, tampilkan halaman not found
    if (!data || !customers) {
        return notFound();
    }

    return (
        <div className="grid md:grid-cols-3 gap-5 pb-10">
            {/* card untuk menampilkan total penjualan */}
            <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
                <div className="p-4 bg-green-400">
                    {/* content */}
                    <LuChartArea className="text-white" size={12} />
                </div>
                <div className="px-4 text-gray-400">
                    <h3 className='text-sm tracking-winder'>Total Penjualan</h3>
                    <p className='text-3xl'>999</p>
                </div>
            </div>
            {/* card untuk menampilkan total pemesanan */}
            <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
                <div className="p-4 bg-red-400">
                    {/* content */}
                    <LuShoppingCart className="text-white" size={12} />
                </div>
                <div className="px-4 text-gray-400">
                    <h3 className='text-sm tracking-winder'>Total Pemesanan</h3>
                    <p className='text-3xl'>999</p>
                </div>
            </div>
            {/* card untuk menampilkan total pengguna */}
            <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
                <div className="p-4 bg-blue-400">
                    {/* content */}
                    <LuUser className="text-white" size={12} />
                </div>
                <div className="px-4 text-gray-400">
                    <h3 className='text-sm tracking-winder'>Total Pengguna</h3>
                    <p className='text-3xl'>999</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards