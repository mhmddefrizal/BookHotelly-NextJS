"use server";

import { ContactSchema, RoomSchema, ReserveSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { differenceInCalendarDays, } from "date-fns";
import { Princess_Sofia } from "next/font/google";

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

export const CreateReserve = async (
  // definisikan parameter fungsi CreateReserve
  roomId: string,
  startDate: string,
  endDate: string,
  prevState: unknown,
  formData: FormData,

) => {
  // autentikasi user
  const session = await auth();
  if(!session || !session.user || !session.user.email) redirect (`/masuk?redirect_url=/kamar/${roomId}`);
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  // validasi data menggunakan ReserveSchema
  const validatedFields = ReserveSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  // ambil data harga kamar dari database
  const { name, phone } = validatedFields.data;
  const room = await prisma.room.findUnique({
    where: { id: roomId },
    select: { price: true },
  });
  if (!room) {
    return { message: "Kamar tidak ditemukan" };
  }
  const night = differenceInCalendarDays(endDate, startDate);
  if (night <= 0) {
    return { message: "Tanggal keberangkatan harus lebih besar dari tanggal kedatangan" };
  }
  const total = night * room.price;

  // simpan data ke database
  let reservationId;
  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: {
          name,
          phone,
        },
        where: { id: session.user.id },
      });


      const reservation = await tx.reservation.create({
        data: {
          startDate: startDate,
          endDate: endDate,
          price: room.price,
          total: total,
          userId: session.user.id as string,
          Payment: {
            create: {
              amount: total,
            },
          },
        },
      });
      reservationId = reservation.id;
    });
  } catch (error) {
    console.log(error);
  }
  // redirect ke halaman checkout
  redirect(`/checkout/${reservationId}`);
};
