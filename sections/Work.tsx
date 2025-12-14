import AnimatedText from '@/lib/gsap/HeroTitle'

import Swiper from "@/components/Swiper";


export default function Work() {
    return (
        <div className='w-full h-max p-5 md:p-10'>
             <AnimatedText animate='leftToRight'>
                <h1 className='font-semibold text-xl md:text-2xl text-black dark:text-white '>

                          Our Works. 
                </h1>
             </AnimatedText>
<Swiper />

        </div>
    )
}