import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import KontakForm from "@/components/kontak-form";

export const metadata: Metadata = {
  title: "Contact",
};
const HalamanKontak = () => {
  return (
    <div>
      <HeaderSection title="Kontak Kami" subTitle="Jika ingin info lebih lanjut hubungi kami." />
      <div className="max-w-screen-xl mx-auto py-20 px-4 ">
        <div className="grid md:grid-cols-2 gap-8">
          <h1 className="text-lg text-gray-500 mb-3">Kontak Kami</h1>
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">Hubungi kami segera.</h1>
          <p className="text-gray-700 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae eos cumque expedita perferendis sint beatae provident neque dolor similique doloremque sapiente rem, quia tempore minus maxime. Quae, culpa nobis!
            Voluptates, porro necessitatibus nulla, nihil magnam incidunt, minima expedita aut veritatis voluptas sed ipsam non? Delectus soluta perferendis iste nostrum fugiat ipsa, laudantium molestias assumenda neque vero cupiditate
            tempore ducimus.
          </p>
          <ul>
            <li className="flex gap-5">
              <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                <IoMailOutline className="size-7" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">Email :</h4>
                <p>email-uwu@example.com</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                <IoCallOutline className="size-7" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">Telepon :</h4>
                <p>+62 83902785927, masukkan teks</p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                <IoLocationOutline className="size-7" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">Lokasi :</h4>
                <p>Jl. Endang 12</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Kontak formulir */}
        <KontakForm />
      </div>
    </div>
  );
};

export default HalamanKontak;
