import Link from "next/link";
import { dashBoardNavData } from "@/data/dashBoardNavData";
import GlobalImage from "@/components/sub/GlobalImage";
import { general } from "@/data/general";

const Sider = () => {
  return (
    <div className="flex-col border-r bg-background hidden md:flex">
      <div className="flex h-16 items-center justify-center border-b">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <GlobalImage
            src={general.img.logo_img}
            className="h-10 w-10"
            alt={"logo"}
            width={40}
            height={40}
          />
          <span className="text-lg font-semibold">Elight LMS</span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        {dashBoardNavData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
              prefetch={false}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sider;
