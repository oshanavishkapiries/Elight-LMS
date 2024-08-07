import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen relative">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
