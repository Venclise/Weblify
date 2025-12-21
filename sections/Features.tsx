import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/lib/gsap/HeroTitle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <div id="features" className="w-full h-max  p-5 lg:p-10 mt-6 md:mt-12">
<AnimatedText animate="leftToRight">

      <h2 className="font-semibold  p-2 md:p-5 text-xl  md:text-3xl">Our features.</h2>
</AnimatedText>
        <div className="flex-col flex items-center md:flex-row gap-5">
              <div className="relative flex h-max md:h-[70vh] w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect  cellSize={100}/>
      <div className="mt-60 w-full flex items-center justify-center flex-col gap-4">
        <AnimatedText  animate="topToBottom">

        <h2 className=" z-10 mx-auto max-w-4xl text-center text-5xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Performance First
        </h2>
        </AnimatedText>
         <AnimatedText  animate="bottomToTop">

        <p className=" z-10  mt-4 text-sm max-w-xs md:max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          We optimize every detail so your website loads fast, feels smooth.
        </p>
         </AnimatedText>
      </div>
    </div>
     
      <div className="p-10 flex h-[50vh] md:h-[70vh] flex-col items-center justify-center overflow-hidden rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 md:size-100 dark:shadow-white/10 dark:ring-white/5">
        
      <div className="flex items-center justify-center gap-4 flex-col ">
        <AnimatedText animate="rightToLeft">

            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-purple-400 to-slate-500  text-7xl md:text-6xl lg:text-7xl  z-20 font-bold tracking-tight">
        Clean <br />
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-t from-purple-500 to-slate-500 ">Designs</span> 
      </h2>
        </AnimatedText>
         <AnimatedText  animate="rightToLeft">

         <p className="z-10  mt-4 text-sm text-center text-neutral-800 dark:text-neutral-500">Every layout, color, and interaction is intentional — built to guide users.</p>
         </AnimatedText>
      </div>
  


    </div>
      
</div>
     
        <div className="flex-col mt-12 flex items-center justify-between md:flex-row gap-5">
            <div className="w-100% h-[30vh]  md:w-[70%] md:h-[50vh]  flex items-center justify-center flex-col gap-6 rounded-xl   bg-gradient-to-b from-slate-700 to-gray-900  p-10 ">
              <AnimatedText animate="topToBottom">

                <h2 className=" z-10   text-center text-3xl font-bold text-neutral-200 md:text-5xl lg:text-6xl dark:text-neutral-100">
        Clear User Experience
        </h2>
              </AnimatedText>


              <AnimatedText animate="leftToRight">
                <p 
                className="font-normal text-center text-sm   text-neutral-400">
                  We design experiences that feel natural, predictable, and easy to use.

                </p>
              </AnimatedText>
              
            </div>
            <div className=" w-[50%] md:w-[30%] h-[50vh] flex items-center justify-center flex-col">
        <AnimatedText animate="bottomToTop">
  <h2 className=" text-center font-bold text-green-500 dark:text-green-500 text-5xl md:text-5xl">
   <span className="font-bold text-neutral-600 dark:text-neutral-300">Intrested?</span>  <br/>
      Lets Start a Conversation
        </h2>
          </AnimatedText>     
          <Link href="/contact">
        <Button className="mt-12 rounded-full  p-5 bg-green-500 hover:bg-green-500  text-white flex items-center justify-center hover:gap-6  cursor-pointer" >
              Start a Conversation
               <ChevronRight />
        </Button>
          </Link> 
            </div>

        </div>
    </div>
  )
}
