import Nav from "@/components/main/Nav";
import { MobileBottomNav } from "@/components/main/MobileBottomNav";
import MobileNav from "@/components/main/MobileNav";
import Sider from "@/components/main/Sider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="grid min-h-screen w-full md:grid-cols-[240px_1fr] overflow-hidden">
        {/* sider */}
        <Sider />
        {/* dashboard-pages */}
        <div className="flex flex-col">
          {/* navbar */}
          <Nav />
          {/* mobile-nav */}
          <MobileNav />
          <main className="flex-1 overflow-auto">{children}</main>
          {/*mobile-bottom-nav */}
          <MobileBottomNav />
        </div>
      </main>
    </>
  );
};

export default layout;
