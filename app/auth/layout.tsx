import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    Navbar
      <main className="min-h-screen w-full bg-red-400">
        {children}
      </main>
    Footer
    </>
  );
};

export default layout;
