import ContactForm from '@/components/ContactForm'
import React from 'react'
import SplitText from '@/components/SplitText'

export default function 
() {
  return (
    <div className='h-max flex flex-col lg:flex-row items-center justify-between p-5 lg:p-10 '>
        <div className='flex-1 flex flex-col'>
          <SplitText
  text="Let's talk!"
  className="text-[10rem] text-white max-w-sm"
  delay={35}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  tag='h6'
  
/>
      <SplitText
  text="Have an idea in mind — website? Let’s make it real."
  className="text-white text-2xl max-w-sm"
  delay={35}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  tag='p'
 />
      
        </div>
        <ContactForm />
    </div>
  )
}
