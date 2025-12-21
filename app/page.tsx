
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ThemeToggle } from "@/components/ui/dark-toggle";
import Features from "@/sections/Features";

import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Work from "@/sections/Work";


export default function Home() {
  return (
    <>
   {/* <div className="bg-blue-500  h-screen w-[50%]"/> */}
      <Hero />
      <Features />
        <Work />
        <Reviews />
        
      
    </>

      
  )
}
