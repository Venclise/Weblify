
"use client"
import {A11y,Pagination,Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import type { Swiper as SwiperType } from "swiper";
import { useRouter, useSearchParams } from 'next/navigation';
import AnimatedText, { MorphExample } from '@/lib/gsap/HeroTitle';
import CountUp from '@/lib/motion/motion';

export default function FeaturesCard() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams?.get("category") ?? "all"

  

  const handleChange = (category:string) => {
      router.push(`/products?category=${category}`)
  }
  
     const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>

          <Swiper
            
            modules={[A11y,Pagination]}
            spaceBetween={5}
            speed={600}
           
         
          slidesPerView="auto"
                   onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className='h-screen w-full'
          >

           
            <SwiperSlide  className='h-full p-10  flex items-center justify-center flex-col  !w-[70%]   group transition-all rounded-lg border-2     ' >
 
   
              <AnimatedText animate='topToBottom' delay={0.5}>
              
          
         <h2 className=" z-10  text-black mx-auto max-w-4xl text-center text-5xl font-bold  md:text-4xl lg:text-7xl  ">
          Performance First        </h2>
                </AnimatedText> 


             <p className=" mt-4 text-md text-center text-gray-600">
           We optimize every detail so your website loads fast, feels smooth.
        </p>

      


             
              </SwiperSlide> 
   <SwiperSlide  className='h-full   flex items-center justify-center flex-col  !w-[30%]   group transition-all rounded-lg border-2     ' >
 
                       <div className='h-[50%]'> 

             </div>
               
              <AnimatedText animate='rightToLeft'>

                <h2 className=" text-center  text-green-600  text-7xl md:text-6xl lg:text-7xl  z-20 font-bold tracking-tight">
         Clean {" "}
         <span className=" text-orange-500  ">Designs</span> 
      </h2>
              </AnimatedText>

       <AnimatedText  animate="rightToLeft">

          <p className=" mt-4 text-md text-center text-gray-600 ">Every layout, color, and interaction is intentional — built to guide users.</p>
         </AnimatedText>
             
              </SwiperSlide> 
       
          
          
            </Swiper>
    </div>
  )
}
