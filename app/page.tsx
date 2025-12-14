
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ThemeToggle } from "@/components/ui/dark-toggle";
import Features from "@/sections/Features";

import Hero from "@/sections/Hero";
import Work from "@/sections/Work";


export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <Features />
        <Work />
        <Footer />
      
    </>

      
  )
}
