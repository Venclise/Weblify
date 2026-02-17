import AnimatedText from '@/lib/gsap/HeroTitle'
import { Gauge, MousePointerClick, Palette, UserRound } from 'lucide-react'
import React from 'react'

export default function Features() {
  return (
    <div className='h-max w-full mt-24 p-5 lg:p-10 flex flex-col gap-10  '>

<div className='flex flex-col items-center '>
<AnimatedText animate='topToBottom'>

      <h1 className=' p-5 lg:p-10  text-white text-center text-3xl lg:text-5xl'>Solutions tailored to your <br />
        <span className='text-pink-300'>
        Unique needs
        </span>
        </h1>
</AnimatedText>
        <p className='text-sm text-white max-w-sm font-light'>From SaaS dashboards and CRMs to eCommerce, healthcare, fintech, and Web3, we bring innovation and usability together.</p>
</div>

<div className='flex items-center gap-2 lg:flex-row flex-col w-full '>
  <div className='lg:w-[300px]  w-full'>

  <AnimatedText animate='topToBottom'>

    
    <div className=' w-full h-[130px] bg-gray-200 border p-5 rounded-xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-600'>01</span>
         <Gauge />
         <p className='text-xl'>Performance first.</p>
    </div>
  </AnimatedText>
  </div>
   <div className='lg:w-[300px]  w-full'>


  <AnimatedText animate='topToBottom'delay={.5} duration={.5}>

      
    <div className='lg:w-[300px] w-full  h-[130px] bg-gray-200 border p-5 rounded-xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-600'>02</span>
    <Palette />
         <p className='text-xl'>Clean Design.</p>
    </div>
      </AnimatedText >
   </div>
    <div className='lg:w-[300px]  w-full'>

  <AnimatedText animate='topToBottom' delay={.6}  duration={.6}>
    <div className=' lg:w-[300px]  h-[130px] bg-gray-200 border p-5 rounded-xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-600'>03</span>
         <UserRound />
         <p className='text-xl'>User Expereince </p>
    </div>
</AnimatedText>
    </div>
     <div className='lg:w-[300px]  w-full'>
      
<AnimatedText animate='topToBottom' delay={.7} duration={.7} >

      
    <div className=' w-100vw lg:w-[300px]   h-[130px] bg-gray-200 border p-5 rounded-xl flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-600'>04</span>
         <MousePointerClick />
         <p className='text-xl'>
Results You Can See</p>
    </div>
</AnimatedText>
     </div>

</div>
    </div>
  )
}
