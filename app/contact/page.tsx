'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedText from "@/lib/gsap/HeroTitle";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import ContactForm from "@/components/ContactForm";

export default function Page() {
 




  return (
    <div className="h-[130vh] mt-34 lg:mt-12 lg:h-screen w-full flex flex-col items-center md:flex-row justify-center gap-8 md:justify-between p-5 lg:p-10">
      

      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center gap-8">
        <AnimatedText animate="topToBottom">
          <h2 className=" text-8xl text-white md:text-7xl ">
            Have an idea?
          </h2>
          <p className="text-neutral-400 max-w-md md:text-sm text-xs ">
            Fill out the form let's discuss,how we can turn you dream into a fully functional designed site.
            </p>
        </AnimatedText>
      </div>
    <ContactForm />
      </div>
  ) }

