import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { general } from "@/data/general";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: general.meta_name,
  description: general.meta_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
