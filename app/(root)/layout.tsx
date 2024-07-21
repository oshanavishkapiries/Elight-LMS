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
      <main className="min-h-screen max-w-7xl mx-auto px-3 sm:px-5 md:px-7">
        {children}
      </main>
    <Footer />
    </>
  );
};

export default layout;
