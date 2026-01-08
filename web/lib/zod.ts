import { array, object, string, coerce } from "zod";

// Schema untuk validasi form kamar
export const RoomSchema = object({
  name: string().min(1),
  description: string().min(50),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).nonempty(),
});

// Schema untuk validasi form reservasi
export const ReserveSchema = object({
  name: string().min(1),
  phone: string().min(10),
});

// Schema untuk validasi form kontak
export const ContactSchema = object({
  name: string().min(6, "nama harus berisi 6 karakter"),
  email: string().min(6, "email harus berisi 6 karakter.").email(" Mohon masukkan email yang valid"),
  subject: string().min(6, "subjek harus berisi 6 karakter"),
  message: string().min(50, "pesan harus berisi 50 karakter").max(200, "pesan harus berisi maksimal 200 karakter"),
});
