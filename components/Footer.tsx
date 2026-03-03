import { NavLinks } from '@/constants/constants'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='p-5 border-t border-neutral-900 mt-24 h-max  flex flex-col lg:flex-row items-center  justify-between '>
      <div className='flex flex-col '>

      <Link className=" text-2xl  text-neutral-200" href="/" >
      Weblify.
      </Link>

       <div className='text-xs  text-neutral-400  text-center leading-5 pt-5 tracking-wider'>
           ©{year} Weblify.All rights reserved
       </div>
      </div>

      <div className='flex items-center  gap-4 mt-12 lg:mt-0'>
        <div className='flex flex-col gap-2'>

<h3 className='text-white text-sm'>
  Let's connect
</h3>
<a href="tel:+923165575485" className='text-gray-200 underline flex items-center gap-2 text-sm'>
  <Phone className='text-gray-200'/>
  +923165575485
</a>
<a href="mailto: weblifyorg@gmail.com" className='text-gray-200 underline flex items-center gap-2 text-sm'>
  <Mail />
  weblifyorg@gmail.com
</a>
        </div>

<div className='flex flex-col gap-2 w-full lg:w-max'>
<h3 className='text-white text-sm'>Quick Links.</h3>
<div className='flex flex-col w-full'>

         {
           NavLinks.map(({id,href,title}) => (
             
             <Link href={href}  key={id} className="w-full hover:underline  transition-all text-gray-300">
     
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
