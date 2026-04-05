import SplitText from "@/components/SplitText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/constants/constants"
import AnimatedText from "@/lib/gsap/HeroTitle"


export default function FAQ() {
  return (
    <div className='lg:p-10 p-5 mt-12 lg:mt-0 gap-8  h-max  w-full flex flex-col items-center '>

            <span className=' text-red-500 font-semibold' > 
FAQ's
</span>
<div className="flex items-center justify-between  gap-8 w-full lg:flex-row flex-col  ">
    <div className="flex flex-col justify-center items-center  lg:justify-start lg:items-start ">
     
        <SplitText
        text="Got Questions?"
        className="text-5xl md:text-6xl lg:text-7xl text-black max-w-xl leading-10 lg:leading-20"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        tag="h4"
        
/>
  
     
        <SplitText
        text="We've got answers"
        className="text-lg md:text-xl lg:text-2xl text-neutral-800 max-w-xl lg:   mx-4 leading-10 lg:leading-20"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        tag="p"
        
/>
    
    </div>

<Accordion type="single" collapsible defaultValue={`items-1`} className="flex flex-col gap-4">
{faqs.map(({id,question,answer}) => (
    <AnimatedText animate="bottomToTop" delay={id * .3} key={id}>

  <AccordionItem value={`item-${id}  `}  key={id} className="w-full md:w-lg bg-neutral-100 border border-neutral-200 py-2 px-5 rounded-3xl " >
    <AccordionTrigger className="text-neutral-700 text-md">{question}</AccordionTrigger>
    <AccordionContent className="text-neutral-800">
        {answer}
    </AccordionContent>
  </AccordionItem>
</AnimatedText>
        ))
}
        </Accordion>
        </div>
    </div>
  )
}
