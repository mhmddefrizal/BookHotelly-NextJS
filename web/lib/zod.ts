import {object, string} from "zod";

export const ContactSchema = object({
    name: string().min(6, "nama harus berisi 6 karakter"),
    email: string().min(6, "email harus berisi 6 karakter").email("email tidak valid"),
});