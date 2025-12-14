import { NavLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='pt-5  pl-3 pr-3 md:p-5 md:pb-0 border-t border-neutral-200 dark:border-neutral-700 mt-24 '>
      <Link className="font-semibold text-2xl md:text-4xl" href="#" >
      Weblify.
      </Link>

      <div className='mt-8 ml-4'>
          <span className='font-bold text-md dark:text-neutral-400 text-neutral-600 md:text-2xl '>Quick links.</span>
          <div className='flex   flex-col'>

          {NavLinks.map(({id,title,href}) => (
              <Link className='text-sm underline text-neutral-500' href={href} key={id}>
               {title}  
             </Link>
          ))}
          </div>
      </div>
       
       <div className='text-xs md:text-sm dark:text-neutral-300 text-neutral-600 text-center leading-5 pt-5'>
           ©{year} Weblify.All rights reserved
       </div>
         
    </div>
  )
}
