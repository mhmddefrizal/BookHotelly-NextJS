"use server";

import { ContactSchema } from "@/lib/zod";

export const ContactMessage = async (formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
};