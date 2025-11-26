import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="maxwith-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image src="/logo.png" width={96} height={36} alt="logo" />
            </Link>
            <p className="text-lime-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur a culpa nostrum, doloremque debitis porro.</p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/tentang">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/kamar">Kamar</Link>
                  </li>
                  <li>
                    <Link href="/kontak">Kontak Kami</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Term & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>Newsletter</h4>
          </div>
        </div>
      </div>
      <div
        className="maxwith-screen-xl mx-auto px-4 border-t border-gray-800 py-8 txet-center
        text-base text-gray-600"
      >
        &copy; Copyright 2025 | Booking Hotel | Tigo Nago
      </div>
    </footer>
  );
};

export default Footer;
