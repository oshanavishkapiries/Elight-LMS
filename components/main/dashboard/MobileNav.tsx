import React from "react";
import Profile from "./Profile";
import GlobalImage from "@/components/sub/GlobalImage";
import { general } from "@/data/general";

const MobileNav = () => {
  return (
    <header className="z-30 w-full flex md:hidden h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="flex justify-between items-center gap-1">
        <GlobalImage
          src={general.img.logo_img}
          className="max-w-[120px]"
          alt={"logo"}
          width={120}
          height={40}
        />
      </div>
      <Profile />
    </header>
  );
};

export default MobileNav;
