import React from "react";
import Profile from "./Profile";
import GlobalImage from "@/components/sub/GlobalImage";
import { general } from "@/data/general";

const MobileNav = () => {
  return (
    <header className="fixed top-0 z-30 w-full flex md:hidden h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="flex justify-between items-center gap-1">
        <GlobalImage
          src={general.img.logo_img}
          className="h-10 w-10"
          alt={"logo"}
          width={40}
          height={40}
        />
        <span className="text-lg font-semibold">Elight LMS</span>
      </div>
      <Profile />
    </header>
  );
};

export default MobileNav;
