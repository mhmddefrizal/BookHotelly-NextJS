"use server";

import { ContactSchema, RoomSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export const saveRoom = async (image: string, prevState: unknown, formData: FormData) => {
  if (!image) return { message: "gambar harus diupload terlebih dahulu" };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, description, capacity, price, amenities } = validatedFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({ amenitiesId: item })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/admin/kamar");
};

export const ContactMessage = async (prevState: unknown, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: "terima kasih telah menghubungi kami" };
  } catch (error) {
    console.log(error);
  }
};

// hapus kamar
export const DeleteRoom = async (id: string, image: string) => {
  try {
    // hapus gambar
    await del(image);
    await prisma.room.delete({
      where: { id },
    });

    // revalidate halaman admin/kamar
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/kamar");
}

// Perbarui kamar
export const UpdateRoom = async (image: string, prevState: unknown, roomId: string, formData: FormData) => {
  if (!image) return { message: "gambar harus diupload terlebih dahulu" };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, description, capacity, price, amenities } = validatedFields.data;

  try {
    await prisma.$transaction([
      prisma.room.update({
        where: { id: roomId },
        data: {
          name,
          description,
          image,
          price,
          capacity,
          RoomAmenities: {
            deleteMany: {},
          },
        },
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((item) => ({ 
          roomId,
          amenitiesId: item })),
      }),
    ])
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/kamar");
  redirect("/admin/kamar");
};