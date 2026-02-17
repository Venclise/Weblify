import AnimatedText from '@/lib/gsap/HeroTitle'

import Swiper from "@/components/Swiper";
import Carousel from '@/components/Carousel';
import { GalleryImages } from '@/constants/constants';
import Image from 'next/image';


export default function Work() {
    return (
        <div className='w-full h-max p-5 bg-black   'id='work'>
        <AnimatedText animate='topToBottom' delay={.1}>

      <h2 className="p-5  text-5xl text-center text-white ">Featured Projects</h2>
        </AnimatedText>
            





 <Swiper /> 

        </div>
    )
}