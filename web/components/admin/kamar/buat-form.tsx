"use client";
import { useActionState, useRef, useState, useTransition } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import Image from "next/image";
import { BarLoader } from "react-spinners";
import { Amenities } from "@prisma/client";
import { saveRoom } from "@/lib/action";

const BuatForm = ({ amenities }: { amenities: Amenities[] }) => {
  // buat useRef untuk input file dari form upload
  const inputFileRef = useRef<HTMLInputElement>(null);

  // buat useState untuk menyimpan URL gambar yang diupload
  const [image, setImage] = useState("");

  // buat useState untuk menyimpan pesan error atau sukses
  const [message, setMessage] = useState("");

  // buat useTransition untuk menandai proses pengiriman
  const [pending, startTransition] = useTransition();
  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
          return;
        }
        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, ispending] = useActionState(saveRoom.bind(null, image), null);

  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Nama Kamar..." />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.name}</span>
            </div>
          </div>
          <div className="mb-4">
            <textarea name="description" rows={8} className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Description"></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.description}</span>
            </div>
          </div>
          <div className="mb-4 grid md:grid-cols-3">
            {amenities.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <input type="checkbox" name="amenities" value={item.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label className="ms-2 text-sm font-medium text-gray-900 capitalize">{item.name}</label>
              </div>
            ))}
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.amenities}</span>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-4">
          <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative">
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              {/* gunakan variabel pending untuk menandai proses pengiriman */}
              {pending ? <BarLoader /> : null}

              {/* buat kondisi dimana jika image ada maka tampilkan tombol delete jika tidak ada maka tampilkan icon upload
               */}
              {image ? (
                <button type="button" onClick={() => deleteImage(image)} className="flex items-center justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-500 ">
                  <IoTrashOutline className="size-4 text-transparent hover:text-white" />
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <IoCloudUploadOutline className="size-8" />
                  <p className="mb-1 text-sm font-bold">Pilih Gambar</p>
                  {/* buat kondisi dimana jika pesan ada maka tampilkan pesan */}
                  {message ? <p className="text-sm text-red-500 mt-2">{message}</p> : <p className="text-xs">SVG, PNG, JPG, GIF or Others (Max: 4MB)</p>}
                </div>
              )}
            </div>
            {/* buat kondisi dimana jika image ada maka tampilkan gambar */}
            {!image ? (
              <input type="file" ref={inputFileRef} onChange={handleUpload} id="input-file" className="hidden" />
            ) : (
              <Image src={image} alt="image" width={640} height={360} className="rounded-md absolute aspect-video object-cover" />
            )}
          </label>
          <div className="mb-4">
            <input type="text" name="capacity" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Kapasitas..." />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.capacity}</span>
            </div>
          </div>
          <div className="mb-4">
            <input type="text" name="price" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Harga..." />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.price}</span>
            </div>
          </div>
          {/* General Message */}
          {state?.message ? (
            <div className="mb-4 bg-red-200 p-2">
              <span className="text-sm text-gray-700 mt-2">{state.message}</span>
            </div>
          ) : null}
          <button type="submit" className="bg-blue-600 text-white w-full hover:bg-blue-800 py-2.5 px-6 md:px-10 text-lg font-semibold cursor-pointer">
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuatForm;
