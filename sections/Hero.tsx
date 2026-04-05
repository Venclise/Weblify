import React from 'react'
import SplitText from '@/components/SplitText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronRightCircle } from 'lucide-react'
import AnimatedText from '@/lib/gsap/HeroTitle'

export default function Hero({title,subtitle}:{title?:string,subtitle?:string}) {
  return (
    <div className=' h-screen lg:h-screen w-full  flex flex-col gap-6 justify-center p-5 lg:p-10  lg:mt-0'>



      

        
        <SplitText
        text={`${title ? title : "We Build Websites That Sell Not Just Look Good." }`}
        className=" text-6xl  lg:text-8xl text-black font-semibold   max-w-4xl"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
        tag='h1'
/>


      
<AnimatedText animate='bottomToTop'>

<p 
  className=" text-lg text-neutral-900 max-w-xl leading-5"
  >
{
  subtitle && subtitle 
}

</p>
  </AnimatedText>

<div className='flex items-center gap-4'>
  <AnimatedText animate='bottomToTop'>

  <Link href="#work">
    <Button  className='bg-neutral-700  rounded-full hover:bg-neutral-600  text-xl transition-all cursor-pointer  py-6 text-white hover:gap-4'>
Our work       
  </Button>
  </Link>
  </AnimatedText>
  <AnimatedText animate='bottomToTop' delay={.2}>
  <Link href="/contact">
    <Button variant="secondary" className='bg-neutral-900 rounded-full  hover:bg-neutral-900 hover:text-white  text-xl transition-all cursor-pointer  py-6 text-white hover:gap-4'>Contact us
      <span className='  mt-1  rounded-full '>
       <ChevronRight />
      </span>
     </Button>
</Link>
</AnimatedText>
</div>
    </div>
  )
}
