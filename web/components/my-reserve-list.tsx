import Image from 'next/image';

// membuat komponen MyReserveList
const MyReserveList = () => {
    return (
        <div>
            <div className="bg-white shadow pb-4 mb-4 md:pb-0 relative">
                <div className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded-t-sm">
                    <h1 className="text-sm font-medium text-gray-900 truncate">
                        Reservation ID:
                    </h1>

                    <div className="flex gap-1 px-3 py-2 text-sm font-normal">
                        <span>Status:</span>
                        <span className="font-bold uppercase">status</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mb-4 items-start bg-white rounded-sm md:flex-row md:w-full">
                {/* content */}
                <Image
                    src={}
                    width={500}
                    height={300}
                    className="object-cover w-full rounded-t-sm h-60 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-sm"
                    alt="image room"
                />

                <div className="flex items-center gap-1 mb-3 font-normal text-gray-700">
                    <div className="w-full">
                        <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                            <span>Harga</span>
                            <span>Harga</span>
                        </div>

                        <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                            <span>Kedatangan</span>
                            <span>Kedatangan</span>
                        </div>

                        <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                            <span>Kepergian</span>
                            <span>Kepergian</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                            <span>Durasi</span>
                            <span>Durasi</span>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                            <span>Sub Total</span>
                            <span>Sub Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyReserveList