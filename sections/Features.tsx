import AnimatedText from '@/lib/gsap/HeroTitle'
import { Gauge, MousePointerClick, Palette, UserRound } from 'lucide-react'
import SplitText from '@/components/SplitText'

export default function Features() {
  return (
    <div id="features" className='  h-max lg:h-screen flex justify-center w-full lg:mt-24 p-5 lg:p-10  flex-col gap-10 mt-12 lg:mt-0  '>

<div className='flex flex-col   items-start justify-start gap-4'>
  <SplitText
  text="Solutions tailored to your"
  className="text-4xl lg:text-6xl text-black font-semibold max-w-lg "
  delay={35}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
  tag='h2'
/>

  <SplitText
  text="Unique needs"
  className=" text-red-600  text-4xl lg:text-6xl max-w-lg "
  delay={35}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  tag='h2'
/>


 <SplitText
  text="From SaaS dashboards and CRMs to eCommerce, healthcare, fintech, and Web3, we bring innovation and usability together. "
className='text-sm text-neutral-800 max-w-sm '
  delay={35}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
  tag='p'
/>

       
</div>

<div className='flex items-center gap-2 lg:flex-row flex-col w-full '>
  <div className='lg:w-[300px]  w-full'>

  <AnimatedText animate='topToBottom'>

    
    <div className=' w-full h-[130px] bg-neutral-100  p-5 rounded-2xl border border-neutral-200 flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-800'>01</span>
         <Gauge  className='text-neutral-800'/>
         <p className='text-xl text-neutral-900'>Performance first.</p>
    </div>
  </AnimatedText>
  </div>
   <div className='lg:w-[300px]  w-full'>


  <AnimatedText animate='topToBottom'delay={.5} duration={.5}>

    <div className=' w-full h-[130px] bg-neutral-100  p-5 rounded-2xl border border-neutral-200 flex items-center gap-4 relative'>

      <span className='absolute right-3 top-3 text-xs text-neutral-800'>02</span>
    <Palette className='text-neutral-900'/>
         <p className='text-xl text-neutral-900'>Clean Design.</p>
    </div>
      </AnimatedText >
   </div>
    <div className='lg:w-[300px]  w-full'>

  <AnimatedText animate='topToBottom' delay={.6}  duration={.6}>
    <div className=' w-full h-[130px] bg-neutral-100  p-5 rounded-2xl border border-neutral-200 flex items-center gap-4 relative'>

      <span className='absolute right-3 top-3 text-xs text-neutral-800'>03</span>
         <UserRound className='text-neutral-900'/>
         <p className='text-xl text-neutral-900'>User Expereince </p>
    </div>
</AnimatedText>
    </div>
     <div className='lg:w-[300px]  w-full'>
      
<AnimatedText animate='topToBottom' delay={.7} duration={.7} >

      
    <div className=' w-full h-[130px] bg-neutral-100  p-5 rounded-2xl border border-neutral-200 flex items-center gap-4 relative'>
      <span className='absolute right-3 top-3 text-xs text-neutral-800'>04</span>
         <MousePointerClick className='text-neutral-900' />
         <p className='text-xl text-neutral-900'>
Results You Can See</p>
    </div>
</AnimatedText>
     </div>

</div>
    </div>
  )
}
