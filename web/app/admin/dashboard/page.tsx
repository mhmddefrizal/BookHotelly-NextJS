import { Metadata } from "next";
import DashboardCards from "@/components/admin/dashboard-cards";
import ReservationList from "@/components/admin/reservation-list";
import { Suspense } from "react";

// Metadata untuk halaman dashboard admin
export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Halaman dashboard untuk admin",
};

const HalamanDashboard = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-500">Dashboard</h1>
      {/* tampilkan card dan daftar reservasi */}
      <Suspense fallback={<p>Loading Cards...</p>}>
        <DashboardCards />
      </Suspense>
      {/* tampilkan daftar reservasi */}
      <Suspense fallback={<p>Loading Reservation...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default HalamanDashboard;
