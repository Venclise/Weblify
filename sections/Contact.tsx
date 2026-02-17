import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function 
() {
  return (
    <div className='h-max flex flex-col lg:flex-row items-center justify-between p-5 lg:p-10 '>
        <div>
        <h1 className='text-[10rem] text-white lg:max-w-sm'>Let's  talk!</h1>
      <p className='text-white text-2xl max-w-sm'>Have an idea in mind — website? Let’s make it real.</p>
        </div>
        <ContactForm />
    </div>
  )
}
