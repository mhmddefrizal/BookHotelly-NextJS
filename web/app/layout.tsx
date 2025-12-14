import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Booking Hotel Online",
  description: "Booking Hotel Online",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // buat sesi pengguna tersedia di seluruh aplikasi
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* SessionProvider digunakan untuk menyediakan sesi pengguna */}
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
