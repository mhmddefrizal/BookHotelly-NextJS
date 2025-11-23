import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
