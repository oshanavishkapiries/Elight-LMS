"use client";
import Nav from "@/components/main/dashboard/Nav";
import { MobileBottomNav } from "@/components/main/dashboard/MobileBottomNav";
import MobileNav from "@/components/main/dashboard/MobileNav";
import Sider from "@/components/main/dashboard/Sider";
import useWindowSize from "@/hooks/useWindowSize";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const size = useWindowSize();
  const isMobile = size.width && size.width <= 768;

  return (
    <>
      <main className="grid min-h-screen w-full md:grid-cols-[240px_1fr] overflow-hidden fixed">
        {isMobile ? <></> : <Sider />}

        <div className="flex flex-col h-screen">
          {isMobile ? <MobileNav /> : <Nav />}

          <main className="flex-1 overflow-y-auto bg-muted">{children}</main>
          {isMobile ? <MobileBottomNav /> : <></>}
        </div>
      </main>
    </>
  );
};

export default layout;
