import { IoMdTrash } from "react-icons/io";
import { DeleteRoom } from "@/lib/action";
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