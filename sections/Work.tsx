import AnimatedText from '@/lib/gsap/HeroTitle'

import Swiper from "@/components/Swiper";


export default function Work() {
    return (
        <div className='w-full h-max p-5 md:p-10 mt-24'id='work'>
             <AnimatedText animate='leftToRight'>
      <h2 className="font-semibold p-5 text-xl  md:text-3xl">Our Works.</h2>
              

                

             </AnimatedText>
<Swiper />

        </div>
    )
}