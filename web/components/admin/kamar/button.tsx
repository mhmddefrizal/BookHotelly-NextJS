"use client";

import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { DeleteRoom } from "@/lib/action";
import Link from "next/link";

// tombol hapus kamar
export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus kamar ini?");
    if (confirmed) {
      await DeleteRoom(id, image);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <button type="submit" className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
        <IoMdTrash size={20} color="red" />
      </button>
    </form>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/admin/kamar/edit/${id}`} className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
      <MdEdit size={20} color="blue" />
    </Link>
  );
};
