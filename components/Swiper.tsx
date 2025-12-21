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
    <div className="relative w-full h-max">

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full mt-12"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {GalleryImages.map(({ link, id, title, desc, img, type }) => (
          <SwiperSlide key={id} className="flex justify-center">
        <Link href={link} className="w-full max-w-[310px]" target="_blank">
              <div
                className="
                h-[400px]
                  rounded-2xl
                  overflow-hidden
                  bg-neutral-100 dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  transition-all duration-300
                  hover:scale-[1.02]
                  p-2
                "
              >
                {/* IMAGE – 70% */}
                <div className="relative h-[70%] w-full rounded-md overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* CONTENT – 30% */}
                <div className="h-[30%] p-4 flex flex-col justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {title}
                    </h2>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-1 tracking-wide">
                      {desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs tracking-wider text-neutral-700 dark:text-neutral-400 font-medium px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
                      {type}
                    </span>
                    <ExternalLink className="text-neutral-700 dark:text-neutral-300" size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM NAVIGATION */}
      
      <div className=" absolute right-4 bottom-[-80px] flex gap-3 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            h-10 w-10 rounded-full
            border border-neutral-300 dark:border-neutral-700
            bg-neutral-200 dark:bg-neutral-800
            flex items-center justify-center
            hover:bg-neutral-300 dark:hover:bg-neutral-700
            transition-all
            text-black 
            lg:hidden
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-10 w-10 rounded-full
            border border-neutral-300 dark:border-neutral-700
            bg-neutral-200 dark:bg-neutral-800
            flex items-center justify-center
            hover:bg-neutral-300 dark:hover:bg-neutral-700
            transition-all
            text-black  
            lg:hidden
                    "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
