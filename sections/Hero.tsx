import { Button } from "@/components/ui/button";
import { HeroTitle, HighlightPulse } from "@/lib/gsap/HeroTitle";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
   return (
     <div  className="flex items-center justify-between p-10  w-full h-screen lg:h-[120vh] dark:bg-black " >
          

    
           <div className="flex items-center justify-center gap-4 flex-col w-full h-full">
          

               <HeroTitle />
         <p className="font-normal md:text-md lg:text-xl text-xs sm:text-sm text-center text-neutral-500 dark:text-gray-400 ">   Traffic isn’t the problem.
    

<span 

className="text-neutral-700 dark:text-gray-200"> Performance, clarity, and experience are. </span>  </p>


           <div className="flex items-center justify-center gap-6 mt-4">
                  <Link href="/#work" className="none">
              <Button className="cursor-pointer text-sm rounded-full" size="lg" >
                          Our Work
                </Button> 
                   </Link>
                   <Link href="/contact">
              <Button variant="outline"  className="cursor-pointer text-sm md:text-md rounded-full" size="lg">
                   Contact 
              </Button>
                   </Link>
           </div>
  
</div>
 
          
    

     </div>

   )
}