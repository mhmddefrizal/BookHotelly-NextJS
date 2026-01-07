import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { DeleteRoom } from "@/lib/action";
import Link from "next/link";

// tombol hapus kamar
export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
    const DeleteRoomWithId = DeleteRoom.bind(null, id, image);
    return (
        <form action={DeleteRoomWithId}>
            <button
                type="submit"
                className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
            >
                <IoMdTrash size={5} color="red" />
            </button>
        </form >
    );
};

export const EditButton = ({ id }: { id: string}) => {
    return (
        <Link href={`/admin/kamar/edit/${id}`} className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
                <MdEdit size={20} color="blue" />
        </Link>    
    );
};