import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// declare module "next-auth" untuk menambahkan properti khusus ke sesi dan objek pengguna
declare module "next-auth" {
  // interface DefaultSession digunakan untuk menambahkan properti khusus ke sesi
  interface Session {
    user: User & DefaultSession["user"];
  }
  // interface User digunakan untuk menambahkan properti khusus ke objek pengguna
  interface User {
    role: string;
  }
}

// declare module "next-auth/jwt" untuk menambahkan properti khusus ke token JWT
declare module "next-auth/jwt" {
  interface JWT {
    sub: string;
    role: string;
  }
}
