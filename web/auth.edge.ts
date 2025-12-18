import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Konfigurasi ringan untuk Edge Runtime (middleware)
// Tanpa Prisma adapter karena Edge tidak support Node.js modules
export const { auth: authMiddleware } = NextAuth({
  providers: [Google],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/masuk",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
});
