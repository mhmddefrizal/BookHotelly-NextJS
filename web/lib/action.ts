"use server";

import { ContactSchema } from "@/lib/zod";

export const ContactMessage = async () => {
    const validatedFields = ContactSchema.safeParse({
        
    })
};