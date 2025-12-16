"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navlink = () => {
  // buat state untuk mengelola menu navigasi pada perangkat mobile
  const [open, setOpen] = useState(false);

  // buat session pengguna
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2">
          <div className="hidden text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-gray-300">
            <Image className="size-8 rounded-full" src={session.user.image || "/avatar.svg"} width={64} height={64} alt="avatar"/>
          </div>
          <div className="flex item-center">
            <button onClick={()=>signOut()} className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">Sign Out</button>
          </div>
        </div>

      ):null}
      <button onClick={() => setOpen(!open)} className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100">
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-white md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-gray-200">
          <li>
            <Link href="/" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/kamar" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
              Daftar Kamar
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
              Kontak
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link href="/reservasi-saya" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                  Reservasi Saya
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link href="/admin/dashboard" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                      Dasbor
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/kamar" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                      Kelola Kamar
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {session ? (
            <li className="pt-2 md:pt-0">
            <button onClick={()=> signOut()}
            className="md:hidden py-2.5 px-6 bg-red-400 text-white hover:bg-red-600 rounded-sm cursor-pointer">
              Keluar
            </button>
          </li>
          ):(
          <li className="pt-2 md:pt-0">
            <Link href="/masuk" className="py-2.5 px-6 bg-blue-900 text-white hover:bg-blue-500 rounded-sm">
              Masuk
            </Link>
          </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
