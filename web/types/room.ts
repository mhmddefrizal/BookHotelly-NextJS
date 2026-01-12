import { Prisma } from "@prisma/client";

// tipe data untuk properti room dengan include RoomAmenities
export type RoomProps = Prisma.RoomGetPayload<{
  include: { RoomAmenities: { select: { amenitiesId: true } } };
}>;

// tipe data untuk properti room dengan include RoomAmenities dan Amenities
export type RoomDetailProps = Prisma.RoomGetPayload<{
  include: {
    RoomAmenities: {
      include: {
        Amenities: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;

// tipe data untuk properti disabledDate
export type DisabledDateProps = Prisma.ReservationGetPayload<{
  select: {
    startDate: true;
    endDate: true;
  };
}>[];
