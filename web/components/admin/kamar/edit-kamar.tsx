import EditForm from "@/components/admin/kamar/edit-form";
import { getAmenities, getRoomById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditKamar = async ({roomId}:{roomId:string}) => {
    const [amenities, room] = await Promise.all([getAmenities (), getRoomById(roomId)]);
  if (!amenities || !room) return notFound();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Kamar </h1>
      <EditForm amenities={amenities} room ={room}/>
    </div>
  );
};

export default EditKamar;
