import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="maxwith-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="block">
              <Image src="/logo.png" width={100} height={40} alt="logo" />
            </Link>
            <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a culpa nostrum, doloremque debitis porro.</p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-blue-900">Tautan</h4>
                <ul className="list-item space-y-5 text-gray-700">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/tentang">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/kamar">Daftar Kamar</Link>
                  </li>
                  <li>
                    <Link href="/kontak">Kontak Kami</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-blue-900">Informasi Hukum</h4>
                <ul className="list-item space-y-5 text-gray-700">
                  <li>
                    <Link href="#">Informasi Hukum</Link>
                  </li>
                  <li>
                    <Link href="#">Syarat & Ketentuan</Link>
                  </li>
                  <li>
                    <Link href="#">Metode Pembayaran</Link>
                  </li>
                  <li>
                    <Link href="#">Kebijakan Privasi</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-blue-900">Buletin</h4>
            <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input type="text" name="email" className="w-full p-3 rounded-sm text-gray-700 bg-white" placeholder="email@gmail.com" />
              </div>
              <button className="bg-blue-900 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-blue-500">Berlangganan</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center
        text-base text-gray-700"
      >
        &copy; Copyright 2025 | Booking Hotel | Tigo Nago
      </div>
    </footer>
  );
};

export default Footer;
