import AnimatedText from "@/lib/gsap/HeroTitle";
import Swiper from "@/components/Swiper";

export default function Work() {
  return (
    <div className="w-full h-max p-5 bg-neutral-950   " id="work">
      <AnimatedText animate="topToBottom" delay={0.1}>
            <p className="text-red-600 my-4 text-center">Projects</p>

      </AnimatedText>
      <Swiper />
    </div>
  );
}
