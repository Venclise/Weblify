import { reviews } from "@/constants/constants";
import AnimatedText from "@/lib/gsap/HeroTitle";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  return (
    <div className="w-full overflow-hidden space-y-6 py-8 mt-24 p-5 h-max lg:h-screen">
         
            <AnimatedText animate='leftToRight'>
                <h1 className='font-semibold text-xl md:text-2xl text-black dark:text-white '>

                          Reviews.
                </h1>
             </AnimatedText>

    <AnimatedText animate='leftToRight'>
                <p className=' text-xs sm:text-sm  text-neutral-700 dark:text-neutral-300 '>

                          See what our client say about us.
                </p>
             </AnimatedText>
      <Marquee speed={60} pauseOnHover gradient={false}>
        {reviews.map(({ id, name, post,country }) => (
          <div
            key={id}
            className="
              mx-3
              w-[260px] sm:w-[300px]
              bg-neutral-100 dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              p-5 rounded-2xl
              flex flex-col justify-between
            "
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              “{post}”
            </p>

            <p className="font-medium text-sm text-right mt-4 text-neutral-900 dark:text-neutral-100">
              — {name},<span className="font-semibold">

              {country}
              </span>
            </p>
          </div>
        ))}
      </Marquee>

      {/* MARQUEE 2 (REVERSE) */}
      <Marquee speed={60} direction="right" pauseOnHover gradient={false}>
        {reviews.map(({ id, name, post,country }) => (
          <div
            key={`reverse-${id}`}
            className="
              mx-3
              w-[260px] sm:w-[300px]
              bg-neutral-100 dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              p-5 rounded-2xl
              flex flex-col justify-between
            "
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              “{post}”
            </p>

            <p className="font-medium text-sm text-right mt-4 text-neutral-900 dark:text-neutral-100">
              — {name},
              <span className="font-semibold">

              {country}
              </span>
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
