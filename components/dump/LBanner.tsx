"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import GlobalImage from "../sub/GlobalImage";

import { Autoplay, Pagination } from "swiper/modules";

const LBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <SwiperSlide key={index} className="">
          <div className="w-full flex items-center justify-center rounded-md overflow-hidden">
            <GlobalImage
              src={"https://i.ibb.co/L63cMX2/BIOLOGY-THISSA-JANANAYAKA.png"}
              alt={""}
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LBanner;
