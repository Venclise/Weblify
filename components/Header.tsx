import { NavLinks } from "@/constants/constants";
import { ThemeToggle } from "./ui/dark-toggle";
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
         <div className="flex items-center justify-between p-5 fixed top-0 left-0 w-full h-max bg-white z-[99] dark:bg-black">
               <a href="#" className="font-bold text-xl">Weblify.</a>
               
                <div className="flex items-center justify-center gap-2">


             <ThemeToggle />
             <Sheet >
  <SheetTrigger >
     <Menu />
  </SheetTrigger>
  <SheetContent className="z-100 p-5">
    <SheetHeader>
      <SheetTitle className="font-semibold text-3xl text-center">Weblify.</SheetTitle>
      <SheetDescription className="mt-24 flex justify-start items-start flex-col gap-2">
      {
        NavLinks.map(({id,href,title}) => (
            
            <Link href={href}  key={id} className="w-full  hover:text-black transition-all dark:hover:text-white">
            <SheetClose className="cursor-pointer">
                <p className="font-semibold text-2xl hover:text-black transition-all dark:hover:text-white">{title}.</p>
            </SheetClose>
               </Link>
        ))
      }
      <Button className="w-full mt-6 text-sm text-neutral-300 dark:text-neutral-700">Contact</Button>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
                </div>
               </div>
        
     )
}