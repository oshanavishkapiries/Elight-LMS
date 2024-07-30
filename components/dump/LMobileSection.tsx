import React from "react";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GlobalImage from "../sub/GlobalImage";

const LMobileSection = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <Card key={index} className="relative w-full max-w-sm overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <GlobalImage 
          src="/placeholder.svg"
          alt="Card background"
          width={400}
          height={300}
          className="object-cover w-full aspect-[4/3]"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-6 gap-2">
          <Badge variant="outline" className="self-start">
            New
          </Badge>
          <h3 className="text-xl font-semibold text-white">Cozy Mountain Retreat</h3>
          <div className="text-sm text-white/80">2024</div>
        </div>
      </Card>
      ))}
    </div>
  );
};

export default LMobileSection;
