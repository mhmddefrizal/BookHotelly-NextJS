import { Metadata } from 'next';
import DashboardCards from '@/components/admin/dashboard-cards';

// Metadata untuk halaman dashboard admin
export const metadata: Metadata = {
  title: 'Dashboard Admin',
  description: 'Halaman dashboard untuk admin',
};

const HalamanDashboard = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'>
      <h1 className='text-4xl font-bold text-gray-500'>Dashboard</h1>
      <DashboardCards />
    </div>
  )
}

export default HalamanDashboard