import { Metadata } from 'next';
import DashboardCards from '@/components/admin/dashboard-cards';
import { Suspense } from 'react';

// Metadata untuk halaman dashboard admin
export const metadata: Metadata = {
  title: 'Dashboard Admin',
  description: 'Halaman dashboard untuk admin',
};

const HalamanDashboard = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'>
      <h1 className='text-4xl font-bold text-gray-500'>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DashboardCards />
      </Suspense>
    </div>
  )
}

export default HalamanDashboard