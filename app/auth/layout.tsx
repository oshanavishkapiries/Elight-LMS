import SubFooter from "@/components/sub/SubFooter";
import SubNav from "@/components/sub/SubNav";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="min-h-screen w-full">
        {children}
      </main>
    </>
  );
};

export default layout;
