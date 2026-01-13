import { getReservations } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

// komponen daftar reservasi
const ReservationList = async () => {
  const reservation = await getReservations();
  if (!reservation) return <p>Tidak Ditemukan Reservasi</p>;
  return (
    // tabel kamar
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Gambar Kamar</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Nama</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Kedatangan</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Kepergian</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Nama Kamar</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Harga</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Dibuat Sejak</th>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* isi tabel */}
          {reservation.map((reserve) => (
            <tr key={reserve.id} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image src={reserve.Room.image} fill sizes="20vw" alt=" room image" className="object-cover" />
                </div>
              </td>
              {/* nama User */}
              <td className="px-6 py-4">{reserve.User.name}</td>
              {/* tanggal datang */}
              <td className="px-6 py-4">{formatDate(reserve.startDate.toString())}</td>
              {/* tanggal pergi */}
              <td className="px-6 py-4">{formatDate(reserve.endDate.toString())}</td>
              {/* nama kamar */}
              <td className="px-6 py-4">{reserve.Room.name}</td>
              {/* harga kamar */}
              <td className="px-6 py-4">{formatCurrency(reserve.price)}</td>
              {/* tanggal dibuat */}
              <td className="px-6 py-4">{formatDate(reserve.createdAt.toString())}</td>
              {/* status */}
              <td className="px-6 py-4 text-right">
                <span className="capitalize">{reserve.Payment?.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
