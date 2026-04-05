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
    <div className="relative w-full flex h-screen p-2  ">


      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full mt-12 h-full"
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.2 },
        }}
      >
        {GalleryImages.toReversed().map(({ url, id, title, desc, img, type }) => (
          <SwiperSlide key={id} className="flex justify-center">
        <Link href={url} className="w-full" target="_blank">
              <div
                className="
               h-full
                  rounded-3xl
                  overflow-hidden
               
                
                  transition-all duration-300
                  hover:scale-[1.01]
                  group 
                  relative
                  
                  
                "
              >
               
                <div className="relative h-full w-full  overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                          fill
                    className="object-cover brightness-90 group-hover:brightness-100"
                    priority
                  />
                </div>

                
                <div className="h-[20%]  transition-all bg-white w-full absolute bottom-0 left-0 p-4 flex flex-col justify-between gap-3">
                  <div>
                    <h2 className="text-3xl text-black tracking-tight">
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
          h-13 w-13 rounded-full
            border border-neutral-100
            bg-neutral-200
            flex items-center justify-center
           hover:bg-neutral-100
            transition-all
            text-black   
         
          "
        >
          <ChevronLeft size={35} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-13 w-13 rounded-full
            border border-neutral-100
            bg-neutral-200
            flex items-center justify-center
           hover:bg-neutral-100
            transition-all
            text-black   
         
                    "
        >
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}




