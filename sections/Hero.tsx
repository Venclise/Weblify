import React from 'react'
import SplitText from '@/components/SplitText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronRightCircle } from 'lucide-react'
import AnimatedText from '@/lib/gsap/HeroTitle'

export default function Hero({title,subtitle}:{title?:string,subtitle?:string}) {
  return (
    <div className=' h-screen lg:h-screen w-full flex flex-col items-center justify-center p-5 lg:p-10  lg:mt-0'>

      

        
        <SplitText
        text={`${title ? title : "We Build Websites That Sell Not Just Look Good." }`}
        className="font-semibold text-4xl lg:text-6xl text-white max-w-xl leading-10 lg:leading-20"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        tag='h1'
/>


      
<AnimatedText animate='bottomToTop'>

<p 
  className=" text-xs lg:text-sm text-neutral-200 max-w-xl leading-20"
  >
{
  subtitle ? subtitle : (
    "Conversion-optimized, SEO-ready websites for ambitious businesses worldwide. "
  )
}

</p>
  </AnimatedText>

<div className='flex items-center gap-4'>
  <AnimatedText animate='bottomToTop'>

  <Link href="#work">
    <Button  className='bg-gray-200  rounded-full hover:bg-neutral-900 hover:text-white  text-xl transition-all cursor-pointer  py-6 text-black hover:gap-4'>
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
