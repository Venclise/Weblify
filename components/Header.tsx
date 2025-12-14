import { ThemeToggle } from "./ui/dark-toggle";

export default  function Header() {
     return(
         <div className="flex items-center justify-between p-5">
               <a href="#" className="font-bold text-xl">WebLify.</a>
             <ThemeToggle />
         </div>
     )
}