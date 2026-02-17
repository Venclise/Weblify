import Aurora from "@/components/Aurora";
import { Button } from "@/components/ui/button";
import { HeroTitle, HighlightPulse } from "@/lib/gsap/HeroTitle";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
   return (

  
     <div  className="flex  justify-between  w-full h-screen  relative bg-black overflow-hidden " >
       <div className="w-full h-full ">
<Aurora
  colorStops={["#050505","#d2d0d8","#281f4c"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
  </div>   


             <div className="flex  gap-4 flex-col w-full h-full absolute p-5 lg:p-10 justify-center">
          

               <HeroTitle />
          
         <p className="font-normal md:text-md lg:text-xl text-xs sm:text-sm  text-neutral-500 dark:text-gray-400 ">   Traffic isn’t the problem.
    

<span 

className="text-gray-200"> Performance, clarity, and experience are. </span>  </p>


           <div className="flex  gap-6 mt-4 ml-4">
                  <Link href="/#work" className="none ">
              <Button className="cursor-pointer text-sm    bg-white text-black" size="lg" >
                          Our Work
                </Button> 
                   </Link>
                   <Link href="/contact" className="w-1/3">
              <Button variant="outline"  className="cursor-pointer w-full bg-white  border text-sm md:text-md rounded-full  text-gray-800 " size="lg">
                   Contact 
              </Button>
                   </Link>
           </div>
   
 </div>  
 
          
    

     </div>

   )
}