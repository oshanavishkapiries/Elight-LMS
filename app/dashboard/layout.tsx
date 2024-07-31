"use client";
import Nav from "@/components/main/Nav";
import { MobileBottomNav } from "@/components/main/MobileBottomNav";
import MobileNav from "@/components/main/MobileNav";
import Sider from "@/components/main/Sider";
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
      <main className="grid min-h-screen w-full md:grid-cols-[240px_1fr] overflow-hidden">
        {isMobile ? <></> : <Sider />}

        <div className="flex flex-col">
          {isMobile ? <MobileNav /> : <Nav />}

          <main className="flex-1 overflow-auto">{children}</main>
          {isMobile ? <MobileBottomNav /> : <></>}
        </div>
      </main>
    </>
  );
};

export default layout;
