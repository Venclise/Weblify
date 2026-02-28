import { reviews } from "@/constants/constants";
import AnimatedText from "@/lib/gsap/HeroTitle";
import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  return (
    <div id="reviews" className="w-full lg:h-screen overflow-hidden flex flex-col gap-4 mt-24 h-max lg:p-5 ">
      <AnimatedText animate="topToBottom" delay={0.1}>
     <p className="text-red-600 my-4 text-center">Testimonials</p>
         </AnimatedText>


      <Marquee speed={60} pauseOnHover gradient={false}>
        {reviews.map(({ id, name, post,country }) => (
          <div
            key={id}
            className="
              mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[170px]
             
              bg-neutral-900
              border border-neutral-800
              p-5 rounded-3xl
              flex flex-col justify-between
            "
          >
            <p className="text-sm text-neutral-400 leading-relaxed">
              “{post}”
            </p>

            <p className=" text-xs text-right mt-4 text-neutral-100">
              — {name},<span className="">

              {country}
              </span>
            </p>
          </div>
        ))}
      </Marquee>

      
      <Marquee speed={60} direction="right" pauseOnHover gradient={false}>
        {reviews.map(({ id, name, post,country }) => (
          <div
            key={`reverse-${id}`}
            className="
            mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[170px]
             
              bg-neutral-900
              border border-neutral-800
              p-5 rounded-3xl
              flex flex-col justify-around
            "
          >
            <p className="text-sm text-neutral-400 leading-relaxed">
              “{post}”
            </p>

            <p className=" text-xs text-right mt-4 text-neutral-100">
              — {name},
              <span className="">

              {country}
              </span>
            </p>
          </div>
        ))}
      </Marquee> 
    </div>
  );
}
