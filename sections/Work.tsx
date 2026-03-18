import AnimatedText from "@/lib/gsap/HeroTitle";
import Swiper from "@/components/Swiper";
import SplitText from "@/components/SplitText";

export default function Work() {
  return (
    <div className="w-full h-max lg:p-10 p-5  bg-neutral-950   " id="work">
      <AnimatedText animate="topToBottom" delay={0.1}>
            <p className="text-red-600 my-4 mx-2">Projects</p>

      </AnimatedText>
    

           <SplitText
        text="Unique solutions
that generate leads"
        className="text-4xl lg:text-6xl text-white font-semibold max-w-xl leading-10 lg:leading-20"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        tag="h2" 
        textAlign="left"
        />
      <Swiper />
    </div>
  );
}
