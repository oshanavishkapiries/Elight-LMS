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
      <main className="min-h-screen w-full px-[1%] sm:px-[3%] md:px-[6%] lg:px-[9%] xl:px-[12%]">
        {children}
      </main>
    <Footer />
    </>
  );
};

export default layout;
