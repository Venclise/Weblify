import { NavLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='pt-5  pl-3 pr-3 md:p-5 md:pb-0 border-t border-neutral-200 dark:border-neutral-700 mt-24 h-max lg:h-[20vh] flex flex-col md:flex-row items-center justify-between '>
      <Link className="font-semibold text-2xl md:text-4xl dark:text-neutral-200 text-neutral-700" href="/" >
      Weblify.
      </Link>

    
       <div className='text-xs font-normal dark:text-neutral-400 text-neutral-800 text-center leading-5 pt-5 tracking-wider'>
           ©{year} Weblify.All rights reserved
       </div>
         
    </div>
  )
}
