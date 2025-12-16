import { Metadata } from "next";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
    title:"Contact"
}
const HalamanKontak = () => {
  return (
    <div>
        <HeaderSection title="Kontak Kami" subTitle="Jika ingin info lebih lanjut hubungi kami."/>
        <div className="max-w-screen-xl mx-auto py-20 px-4 ">
            <div className="grid md:grid-cols-2 gap-8">
                <h1 className="text-lg text-gray-500 mb-3">Kontak Kami</h1>
                <h1 className="text-5xl font-semibold text-gray-900 mb-4">Hubungi kami segera.</h1>
                <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae eos cumque expedita perferendis sint beatae provident neque dolor similique doloremque sapiente rem, quia tempore minus maxime. Quae, culpa nobis!
                Voluptates, porro necessitatibus nulla, nihil magnam incidunt, minima expedita aut veritatis voluptas sed ipsam non? Delectus soluta perferendis iste nostrum fugiat ipsa, laudantium molestias assumenda neque vero cupiditate tempore ducimus.</p>
            </div>
        </div>
    </div>
  )
}

export default HalamanKontak