import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

async function main() {
  const pool = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  // Insert amenities
  const amenities = await prisma.amenities.createMany({
    data: [{ name: "Free Wifi" }, { name: "AC" }, { name: "TV" }, { name: "Breakfast" }, { name: "Swimming Pool" }, { name: "Gym" }, { name: "Spa" }, { name: "Parking" }],
    skipDuplicates: true,
  });

  console.log("Amenities created:", amenities);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
