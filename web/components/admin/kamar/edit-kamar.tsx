import BuatForm from "@/components/admin/kamar/buat-form";
import { getAmenities } from "@/lib/data";
const EditKamar = async ({roomId}:{roomId:string}) => {
  const amenities = await getAmenities();
  if (!amenities) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Kamar </h1>
      <BuatForm amenities={amenities} />
    </div>
  );
};

export default EditKamar;
