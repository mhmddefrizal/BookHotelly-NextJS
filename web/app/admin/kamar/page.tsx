import Link from "next/link";
import TabelKamar from "@/components/admin/kamar/tabel-kamar";
import { Suspense } from "react";

const HalamanKamar = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-4x1 font-bold text-gray-800">Daftar Kamar</h1>
        {/* Tombol buat kamar */}
        <Link href="/admin/kamar/buat" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md">Buat Kamar</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>

      <TabelKamar />
      </Suspense>
    </div>
  )
};

export default HalamanKamar;
