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
    <div className="h-[130vh]   w-full flex flex-col items-center md:flex-row justify-center gap-4 md:justify-between p-7">
      

      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center gap-4">
        <AnimatedText animate="topToBottom">
          <h2 className=" text-[5rem] text-white md:text-4xl text-center">
            Have an Idea ?
          </h2>
          <p className="text-neutral-400 max-w-md md:text-sm text-xs text-center">
            Fill out the form let's discuss,how we can turn you dream into a fully functional designed site.
            </p>
        </AnimatedText>
      </div>
    <ContactForm />
      </div>
  ) }

