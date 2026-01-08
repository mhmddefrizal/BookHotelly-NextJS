import Image from "next/image";
import { getRoomDetailById } from "@/lib/data";
import { notFound } from "next/navigation";
import { IoCheckmark, IoPeopleOutline } from "react-icons/io5";
import { formatCurrency } from "@/lib/utils";

// komponen detail kamar
const DetailKamar = async ({roomId}:{roomId:string}) => {
    // mengambil data kamar berdasarkan ID
    const room =  await getRoomDetailById(roomId);
    // jika kamar tidak ditemukan, tampilkan halaman 404
    if (!room) return notFound();
  return (
    <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
        {/* detail kamar */}
        <div className="md: col-span-8">
            <Image src={room.image} alt={room.name} width={770} height={430} priority className="w-full rounded-sm mb-8"/>
            <h1 className="text-5x1 font-semibold text-gray-900 mb-8">{room.name}</h1>
            <p>{room.description}</p>
            <h5 className="text-lg font-bold py-1 mt-1">Amenities:</h5>
            <div className="grid md:grid-cols-3">
                {/* menampilkan daftar amenities */}
                {room.RoomAmenities.map((item) => (
                    <div key={item.id} className="flex gap-1 py-1">
                        <IoCheckmark className="size-5" />
                        <span>{item.Amenities.name}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="md: col-span-4">
            <div className="border-2 border-gray-300 border-dashed px-3 py-5 bg-slate-50 rounded-md">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                        {/* menampilkan jumlah orang */}
                        <IoPeopleOutline className="size-4"/>
                        <span>
                            {room.capacity} {room.capacity === 1 ? "orang" : "orang"}
                        </span>
                    </div>
                    {/* menampilkan harga kamar */}
                    <div className="flex items-center">
                        <span className="text-2x1 font-semibold text-gray-500">{formatCurrency(room.price)}</span>
                        <span className="text-gray-400 text-sm">/Malam</span>
                    </div>
                </div>
                {/* Reservasio Form */}
            </div>
        </div>
    </div>
  )
}

export default DetailKamar