import CardSkeleton from "@/components/skeleton/card-skeleton"

// KamarSkeleton Component
const KamarSkeleton = () => {
  return (
    <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* card skeleton untuk menampilkan data kamar (loader) */}
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    </div>
  )
}

export default KamarSkeleton