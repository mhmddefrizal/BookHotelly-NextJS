import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(6, "nama harus berisi 6 karakter"),
  email: string().min(6, "email harus berisi 6 karakter.").email(" Mohon masukkan email yang valid"),
  subject: string().min(6, "subjek harus berisi 6 karakter"),
  message: string().min(50, "pesan harus berisi 50 karakter").max(200, "pesan harus berisi maksimal 200 karakter"),
});
