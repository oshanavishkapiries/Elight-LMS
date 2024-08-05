import Link from "next/link";
import { dashBoardNavData } from "@/data/dashBoardNavData";
import { general } from "@/data/general";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sider = () => {
  const pathname = usePathname();

  return (
    <div className="flex-col border-r bg-background hidden md:flex">
      <div className="flex h-16 items-center justify-center border-b">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <Image
            src={general.img.logo_img}
            className="max-w-[120px]"
            alt={"logo"}
            width={120}
            height={40}
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        {dashBoardNavData.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md mx-2 mt-1 hover:ps-6 transition-all",
                isActive && "bg-primary font-semibold text-white"
              )}
              prefetch={false}
            >
              <IconComponent
                className={cn("h-5 w-5", isActive && "animate-icon-zoom")}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sider;
