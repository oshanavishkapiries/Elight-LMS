import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="min-h-screen w-full flex flex-row">
        {/* sider */}
        <section className="bg-red-400 w-[250px] h-screen">

        </section>
        {/* dashboard-pages */}
        <section className="bg-green-400 w-full h-screen">
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
