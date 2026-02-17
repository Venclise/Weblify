import { NavLinks } from "@/constants/constants";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
export default  function Header() {
     return(
      <div className="bg-transparent  flex items-center justify-center mt-4 w-full h-[2.5rem] fixed top-0 left-0 p-5 z-[99]">

         <div className="flex rounded-lg items-center justify-between py-6 pr-5 pl-2 overflow-hidden w-[90%] h-full bg-brown-800 backdrop-filter backdrop-blur-md   bg-opacity-10 ">
               <Link href="/" className="text-2xl bg-black text-white     px-1 rounded-md ">W</Link>
               
                <div className="flex items-center justify-center gap-2">


        
             <Sheet >
  <SheetTrigger  asChild>
<Button variant="ghost" className="hover:text-black cursor-pointer">
     <Menu  className="cursor-pointer text-white  "/>
</Button>
   
  </SheetTrigger>
<SheetContent className="z-100 p-5 bg-black border-0">
    <SheetHeader>
<SheetClose>
        <SheetTitle>
               <Link href="/" className="text-2xl text-white   px-1 rounded-md ">W</Link>

        </SheetTitle>
</SheetClose>
      <SheetDescription className="mt-24 flex justify-start items-start flex-col gap-4">
      {
        NavLinks.map(({id,href,title}) => (
            
            <Link href={href}  key={id} className="w-full   transition-all text-white">
            <SheetClose className="cursor-pointer">
                <p className=" text-2xl transition-all hover:text-white">{title}.</p>
            </SheetClose>
               </Link>
        ))
      }
      <Link href="/contact" className="w-full">
      <Button className="w-full mt-6 text-sm text-white dark:text-black rounded-sm font-boska lead">Contact</Button>
      </Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
                </div>
               </div>

      </div>
               
        
     )
}