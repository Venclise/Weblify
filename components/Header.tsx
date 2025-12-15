import { NavLinks } from "@/constants/constants";
import { ThemeToggle } from "./ui/dark-toggle";
import Link from "next/link";

export default  function Header() {
     return(
         <div className="flex items-center justify-between p-5 fixed top-0 left-0 w-full h-max bg-white z-[100] dark:bg-black">
               <a href="#" className="font-bold text-xl">Weblify.</a>
               
                

             <ThemeToggle />
               </div>
        
     )
}