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
               <Link href="/" className="font-bold text-2xl">Weblify.</Link>
               
                <div className="flex items-center justify-center gap-2">


             <ThemeToggle />
             <Sheet >
  <SheetTrigger className="border border-neutral-300 rounded-sm dark:border-neutral-700 p-1">

     <Menu  className="cursor-pointer  "/>
   
  </SheetTrigger>
<SheetContent className="z-100 p-5">
    <SheetHeader>
<SheetClose>
        <SheetTitle>

      <Link href="/" className="font-semibold text-3xl ">Weblify.</Link>
        </SheetTitle>
</SheetClose>
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
      <Link href="/contact" className="w-full">
      <Button className="w-full mt-6 text-sm text-white rounded-full">Contact</Button>
      </Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
                </div>
               </div>
        
     )
}