import { NavLinks } from '@/constants/constants'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='p-10 lg:p-20  border-t border-neutral-200 mt-24 h-max  flex flex-col lg:flex-row items-center  justify-between '>
      <div className='flex flex-col '>

      <Link className=" text-2xl  text-neutral-800" href="/" >
      Weblify.
      </Link>

       <div className='text-xs  text-neutral-600 text-center  pt-5'>
           ©{year} Weblify.All rights reserved
       </div>

       <div className='flex gap-2 mt-4'>
             <Link href="https://www.instagram.com/weblifyorg/">
       <Image 
       src="/insta.svg"
       height={25}
       width={25}
       alt="Instagram icon"
       />
      </Link>
            <Link  href="https://wa.me/923165575485?text=Hi%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer" >
       <Image 
       src="/whatsapp.svg"
       height={25}
       width={25}
       alt="Instagram icon"
       />
      </Link>
    
  
       </div>
      </div>

      <div className='flex items-center  gap-4 mt-12 lg:mt-0'>
        <div className='flex flex-col gap-2'>

<h3 className='text-black text-sm'>
  Let's connect
</h3> 
<a href="tel:+923165575485" className='text-neutral-800 underline flex items-center gap-2 text-sm'>
  <Phone className='text-neutral-800'/>
  +923165575485
</a>
<a href="mailto: weblifyorg@gmail.com" className='text-neutral-800 underline flex items-center gap-2 text-sm'>
  <Mail />
  weblifyorg@gmail.com
</a>
        </div>

<div className='flex flex-col gap-2 w-full lg:w-max'>
<h3 className='text-black text-sm'>Quick Links.</h3>
<div className='flex flex-col w-full'>

         {
           NavLinks.map(({id,href,title}) => (
             
             <Link href={href}  key={id} className="w-full hover:underline  transition-all text-neutral-700">
     
                <p className=" text-sm transition-all  ">{title}.</p>


         
               </Link>
        ))
      }
      </div>
      </div>
      </div>
         
    </div>
  )
}
