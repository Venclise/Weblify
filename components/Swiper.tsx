"use client";

import { useRef } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { GalleryImages } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function GallerySlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full h-max ">

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full mt-12 h-screen"
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {GalleryImages.map(({ url, id, title, desc, img, type }) => (
          <SwiperSlide key={id} className="flex justify-center">
        <Link href={url} className="w-full" target="_blank">
              <div
                className="
                h-full
                  rounded-4xl
                  overflow-hidden
                  bg-neutral-900
                  border  border-neutral-800
                  transition-all duration-300
                  hover:scale-[1.01]
                  
                "
              >
               
                <div className="relative h-full w-full  overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover "
                    priority
                  />
                </div>

                
                <div className="h-[10%] hidden p-4 flex flex-col justify-between gap-3">
                  <div>
                    <h2 className="text-3xl text-white tracking-tight">
                      {title}
                    </h2>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1 tracking-wide">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM NAVIGATION */}
      
      <div className=" absolute right-4 bottom-[-80px] flex gap-3 z-10 ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            h-12 w-12 rounded-full
            border border-neutral-800
            bg-neutral-900
            flex items-center justify-center
           hover:bg-neutral-800
            transition-all
            text-white   
         
          "
        >
          <ChevronLeft size={25} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-12 w-12 rounded-full
            border border-neutral-800
           bg-neutral-900
            flex items-center justify-center
            hover:bg-neutral-700
            transition-all
            text-white  
         
                    "
        >
          <ChevronRight size={25} />
        </button>
      </div>
    </div>
  );
}




