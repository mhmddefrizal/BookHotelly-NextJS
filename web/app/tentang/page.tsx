import { Metadata } from "next"
import Image from "next/image"
import HeaderSection from "@/components/header-section"
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: "Tentang Kami",
    description: "Situ Siapa?",
}

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="Tentang Kami" subTitle="Belum update" />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
            <Image src='/about-image.jpg' alt="tentang kami" width={650} height={579}/>
            <div>
                <h1 className="text-5xl font-semibold text-gray-900 mb-4">Siapa Kami?</h1>
                <p className="text-gray-700 py-5">Masukkan Teks Masukkan Teks Masukkan Teks Masukkan Teks Masukkan Teks Masukkan Teks Masukkan Teks</p>
                <ul className="list-item space-y-6 pt-8 ">
                    <li className="flex gap-5">
                        <div className="flex-none mt-1">
                            <IoEyeOutline className="size-7 text-gray-900" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">Visi :</h4>
                            <p className="text-gray-600">Kami sangat berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan kami. Meskipun permintaannya aneh-aneh</p>
                        </div>
                    </li>
                    <li className="flex gap-5">
                        <div className="flex-none mt-1">
                            <IoLocateOutline className="size-7 text-gray-900" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">Misi :</h4>
                            <p className="text-gray-600">Tidak Dapat Bicara Sekarang, WhatsApp Saja</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage