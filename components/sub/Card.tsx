import React from "react";

const Card = () => {
  return (
    <div className="overflow-hidden rounded-md border shadow-xl">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dldtrjalo/image/upload/v1713958445/storydes_ggydqb.jpg"
          alt=""
        />
        <div className="absolute top-0 left p-3 ">
            <div className="bg-red-500 rounded-sm px-4 text-sm text-white">2022-2023</div>
        </div>
      </div>
      <div className="p-3 pb-5">
        <div className="flex">
          <div className="bg-amber-100 rounded-sm px-4 py-1 ">
            <h1 className="font-semibold text-xs opacity-80">Revision</h1>
          </div>
        </div>
        <h1 className="font-bold text-xl my-1">Mechanice Science</h1>
        <p className="text-sm ">
          It is a long established fact that a reader will be distracted by the
          readable content of a{" "}
        </p>
        <div className="flex gap-3">
          <p className="text-[12px] opacity-65 mt-3">Sujith Sanjeewa</p>
          <p className="text-[12px] opacity-65 mt-3">2024 june 2</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
