import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/masuk",
  },
  // gunakan callbacks untuk menambahkan peran pengguna ke token JWT dan sesi
  callbacks: {
    // jwt dipanggil setiap kali token JWT dibuat atau diperbarui
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // session dipanggil setiap kali sesi dibuat atau diperbarui
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
});
