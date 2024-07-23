"use client";
import Image from "next/image";
import React, { useState } from "react";

interface GlobalImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const GlobalImage: React.FC<GlobalImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImageLoaded(true)}
        className={`object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.3s" }}
      />
    </div>
  );
};

export default GlobalImage;
