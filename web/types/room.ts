import { Prisma } from "@prisma/client";

// tipe data untuk properti room dengan include RoomAmenities
export type RoomProps = Prisma.RoomGetPayload<{
    include: { RoomAmenities: { select: { amenitiesId: true } } };
}>;
