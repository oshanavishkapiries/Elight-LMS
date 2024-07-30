import Footer from "@/app/(root)/LComponents/Footer";
import Navbar from "@/app/(root)/LComponents/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
