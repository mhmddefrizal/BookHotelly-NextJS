import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const getAmenities = async () => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.amenities.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// fungsi untuk mengambil data kamar
export const getRooms = async () => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.room.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomById = async (roomId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: { RoomAmenities: { select: { amenitiesId: true } } },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomDetailById = async (roomId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomAmenities: {
          include: {
            Amenities:
            {
              select: {
                name: true, 
              }
            }
          }
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationById = async (id: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.reservation.findUnique({
      where: { id },
      include: {
        Room: {
          select: {
            name: true,
            price: true,
            image: true,
          },
        },
        User: {
          select: {
            name: true,
            phone: true,
            email: true,
          },
        },
        Payment: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// fungsi untuk mengambil data kamar yang tidak tersedia berdasarkan ID kamar
export const getDisabledRoomById = async (roomId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.reservation.findMany({
      select: {
        startDate: true,
        endDate: true,
      },
      where: {
        roomId: roomId,
        Payment: {
          status: { not: "failure" },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// fungsi untuk mengambil data reservasi berdasarkan ID pengguna
export const getReservationByUserId = async () => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.reservation.findMany({
      where: { userId: session.user.id },
      include: {
        Room: {
          select: {
            name: true,
            price: true,
            image: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
